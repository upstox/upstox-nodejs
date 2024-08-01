const { accessToken } = require('./DataToken');
let UpstoxClient = require("upstox-js-sdk");
let defaultClient = UpstoxClient.ApiClient.instance;
var OAUTH2 = defaultClient.authentications["OAUTH2"];
OAUTH2.accessToken = accessToken;
const streamer = new UpstoxClient.PortfolioDataStreamer();
streamer.connect();

streamer.on("message", (data) => {
  const feed = data.toString("utf-8");
  console.log(feed);
});
