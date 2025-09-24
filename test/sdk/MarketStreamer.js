const UpstoxClient = require("upstox-js-sdk");
const { accessToken } = require("./DataToken");

// Configure the client
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = accessToken;

// Initialize streamer with "NSE_INDEX|Nifty 50" in "full" mode
const streamer = new UpstoxClient.MarketDataStreamerV3();

// Timer references for cleanup
const timers = [];

// Enable auto-reconnect (if available)
if (typeof streamer.autoReconnect === 'function') {
    streamer.autoReconnect(true, 5, 10);
}

function onOpen() {
    console.log("WebSocket connection opened");
    console.log("Initial subscription: NSE_INDEX|Nifty 50 in 'full' mode");
    
    // Subscribe to initial instrument
    try {
        streamer.subscribe(["NSE_INDEX|Nifty 50"], "full");
        console.log("Successfully subscribed to Nifty 50");
    } catch (error) {
        console.error("Error subscribing to Nifty 50:", error);
    }
    
    // Set up timed operations
    const timer1 = setTimeout(subscribeBankNifty, 6000); // 6 seconds
    timers.push(timer1);
    
    const timer2 = setTimeout(unsubscribeNifty50, 15000); // 15 seconds
    timers.push(timer2);
    
    const timer3 = setTimeout(changeModeToD30, 30000); // 30 seconds
    timers.push(timer3);
    
    const timer4 = setTimeout(cleanupAndExit, 50000); // 50 seconds
    timers.push(timer4);
}

function subscribeBankNifty() {
    console.log("\n[6 SECONDS] Subscribing to 'NSE_INDEX|Nifty Bank' in 'full' mode");
    try {
        streamer.subscribe(["NSE_INDEX|Nifty Bank"], "full");
        console.log("Successfully subscribed to Nifty Bank");
    } catch (error) {
        console.error("Error subscribing to Nifty Bank:", error);
    }
}

function unsubscribeNifty50() {
    console.log("\n[15 SECONDS] Unsubscribing from 'NSE_INDEX|Nifty 50'");
    try {
        streamer.unsubscribe(["NSE_INDEX|Nifty 50"]);
        console.log("Successfully unsubscribed from Nifty 50");
    } catch (error) {
        console.error("Error unsubscribing from Nifty 50:", error);
    }
}

function changeModeToD30() {
    console.log("\n[30 SECONDS] Changing mode to 'full_d30' for all remaining subscriptions");
    try {
        // Change mode for Nifty Bank (which should be the only remaining subscription)
        streamer.changeMode(["NSE_INDEX|Nifty Bank"], "full_d30");
        console.log("Successfully changed mode to 'full_d30' for Nifty Bank");
    } catch (error) {
        console.error("Error changing mode to full_d30:", error);
    }
}

function cleanupAndExit() {
    console.log("\n[50 SECONDS] Cleaning up and disconnecting...");
    try {
        // Clear any remaining timers
        timers.forEach(timer => {
            if (timer) {
                clearTimeout(timer);
            }
        });
        
        // Disconnect the streamer
        if (typeof streamer.disconnect === 'function') {
            streamer.disconnect();
        } else if (streamer.feeder && streamer.feeder.ws) {
            streamer.feeder.ws.close();
        }
        
        console.log("Cleanup completed. Exiting...");
        process.exit(0);
    } catch (error) {
        console.error("Error during cleanup:", error);
        process.exit(1);
    }
}

function onClose(code, reason) {
    console.log(`WebSocket connection closed: ${code} - ${reason}`);
}

function onMessage(data) {
    try {
        let parsedData;
        
        // Handle different data types
        if (Buffer.isBuffer(data)) {
            parsedData = JSON.parse(data.toString('utf-8'));
        } else if (typeof data === 'string') {
            parsedData = JSON.parse(data);
        } else {
            parsedData = data;
        }
        
        if (parsedData && typeof parsedData === 'object' && parsedData.type === 'live_feed') {
            const feeds = parsedData.feeds || {};
            
            for (const [instrumentKey, feedData] of Object.entries(feeds)) {
                const mode = feedData.requestMode || 'Unknown';
                
                // Extract LTP based on the feed structure
                let ltp = null;
                
                if (feedData.fullFeed) {
                    // Full mode data structure
                    const fullFeed = feedData.fullFeed;
                    if (fullFeed.indexFF && fullFeed.indexFF.ltpc) {
                        ltp = fullFeed.indexFF.ltpc.ltp;
                    } else if (fullFeed.ltpc) {
                        ltp = fullFeed.ltpc.ltp;
                    }
                } else if (feedData.ltpc) {
                    // LTPC mode data structure
                    ltp = feedData.ltpc.ltp;
                }
                
                console.log(`[${mode.toUpperCase()}] ${instrumentKey} - LTP: ${ltp}`);
            }
        } else {
            // Fallback for other message types
            console.log("Other message:", parsedData);
        }
        
    } catch (error) {
        console.error("Error parsing message:", error);
        console.log("Raw data:", data);
    }
}

function onError(error) {
    console.error("WebSocket error:", error);
}

function onReconnecting(data) {
    console.log("Reconnecting event:", data);
}

// Register event handlers
streamer.on("open", onOpen);
streamer.on("message", onMessage);
streamer.on("close", onClose);
streamer.on("reconnecting", onReconnecting);
streamer.on("error", onError);

console.log("Starting MarketDataStreamerV3 with timed operations...");
console.log("Timeline:");
console.log("  0 sec: Connect with 'NSE_INDEX|Nifty 50' in 'full' mode");
console.log("  6 sec: Subscribe to 'NSE_INDEX|Nifty Bank' in 'full' mode");
console.log("  15 sec: Unsubscribe from 'NSE_INDEX|Nifty 50'");
console.log("  30 sec: Change mode to 'full_d30' for remaining subscriptions");
console.log("  50 sec: Cleanup and exit");
console.log("\nConnecting...");

// Handle process termination
process.on('SIGINT', () => {
    console.log("\nKeyboard interrupt received. Cleaning up...");
    cleanupAndExit();
});

process.on('SIGTERM', () => {
    console.log("\nTermination signal received. Cleaning up...");
    cleanupAndExit();
});

// Start the connection
try {
    streamer.connect();
} catch (error) {
    console.error("Error connecting to streamer:", error);
    process.exit(1);
}
