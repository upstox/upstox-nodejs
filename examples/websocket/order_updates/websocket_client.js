// Import required modules
var UpstoxClient = require("upstox-js-sdk");
const WebSocket = require("ws").WebSocket;

// Initialize the Upstox client and set the OAuth2 access token
let defaultClient = UpstoxClient.ApiClient.instance;
let apiVersion = "2.0";
let OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = "ACCESS_TOKEN"; // Replace "ACCESS_TOKEN" with your actual token

// Define an asynchronous function to get PortfolioFeedUrl from the Upstox server
const getPortfolioFeedUrl = async () => {
  return new Promise((resolve, reject) => {
    // Initialize a Websocket API instance
    let apiInstance = new UpstoxClient.WebsocketApi();

    // Request to get the portfolio stream feed authorization
    apiInstance.getPortfolioStreamFeedAuthorize(
      apiVersion,
      (error, data, response) => {
        if (error) {
          // If there's an error, log it and reject the promise
          reject(error);
        } else {
          // If no error, log the returned data and resolve the promise
          resolve(data.data.authorizedRedirectUri);
        }
      }
    );
  });
};

// Define an asynchronous function to connect to the websocket
const connectWebSocket = async (wsUrl) => {
  return new Promise((resolve, reject) => {
    // Initialize a WebSocket instance with the authorized URL and appropriate headers
    const ws = new WebSocket(wsUrl, {
      headers: {
        "Api-Version": apiVersion,
        Authorization: "Bearer " + OAUTH2.accessToken,
      },
      followRedirects: true,
    });

    // Set up WebSocket event handlers
    ws.on("open", function open() {
      console.log("connected");
      resolve(ws); // Resolve the promise when the WebSocket is opened
    });

    ws.on("close", function close() {
      console.log("disconnected");
    });

    ws.on("message", function message(data) {
      console.log("data received", data.toString());
    });

    ws.on("error", function onError(error) {
      console.log("error:", error);
      reject(error); // Reject the promise when there's an error
    });
  });
};

// Execute the async functions to get PortfolioFeedUrl and connect to WebSocket
(async () => {
  try {
    const wsUrl = await getPortfolioFeedUrl(); // First, get the authorization
    const ws = await connectWebSocket(wsUrl); // Then, connect to the WebSocket using the authorized URL
  } catch (error) {
    // Catch and log any errors
    console.error("An error occurred:", error);
  }
})();
