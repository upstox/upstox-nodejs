let UpstoxClient = require("upstox-js-sdk");
const { accessToken } = require("./DataToken");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = accessToken;
const streamer = new UpstoxClient.MarketDataStreamer();
streamer.connect();

// Subscribe to instrument keys upon the 'open' event
streamer.on("open", () => {
  streamer.subscribe(["NSE_INDEX|Nifty Bank"], "ltpc");
});

// Handle incoming market data messages
streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});