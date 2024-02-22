import WebSocket from "ws";
import protobuf from "protobufjs";
import path from "path";
import uuid4 from "uuid4";
import { ApiClient } from "../ApiClient";
import Feeder from "./Feeder";

class MarketDataFeeder extends Feeder {
  //Required enums
  Mode = Object.freeze({
    LTPC: "ltpc",
    FULL: "full",
  });

  Method = Object.freeze({
    SUBSCRIBE: "sub",
    CHANGE_METHOD: "change_mode",
    UNSUBSCRIBE: "unsub",
  });

  ws = null;
  instrumentKeys = [];
  mode = "";
  userClosedWebSocket = false;
  closingCode = -1;
  protobufRoot = null;

  constructor(instrumentKeys = [], mode = this.Mode.FULL) {
    super();
    this.apiClient = ApiClient.instance;
    this.instrumentKeys = instrumentKeys;
    this.mode = mode;
    this.initProtobuf();
  }

  async connect() {
    // Skip if its already connected
    if (
      this.ws &&
      (this.ws.readyState == ws.CONNECTING || ws.readyState == ws.OPEN)
    )
      return;

    this.ws = await this.connectWebSocket(
      `wss://api.upstox.com/v2/feed/market-data-feed`,
      this.apiClient.authentications["OAUTH2"].accessToken
    );
    this.onOpen();
    this.onMessage();
    this.onClose();
    this.onError();
  }

  shouldReconnect() {
    return (
      this.ws === null ||
      (!this.userClosedWebSocket && this.ws.readyState !== WebSocket.OPEN)
    );
  }

  onOpen() {
    this.ws.on("open", () => {
      this.emit("open");
    });
  }

  onMessage() {
    this.ws.on("message", (data) => {
      const decodedData = this.decodeProtobuf(data);
      this.push(JSON.stringify(decodedData));
    });
  }

  onClose() {
    this.ws.on("close", (code) => {
      this.push(null);
      this.closingCode = code;
      if (code === 1000) {
        this.userClosedWebSocket = true;
      }
    });
  }

  onError() {
    this.ws.on("error", (e) => {
      this.emit("error", e);
    });
  }

  disconnect() {
    this.ws.close(1000);
  }

  subscribe(instrumentKeys, mode) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(
        this.buildRequest(instrumentKeys, this.Method.SUBSCRIBE, mode)
      );
    } else {
      throw new Error("Failed to subscribe: WebSocket is not open.");
    }
  }

  unsubscribe(instrumentKeys) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(this.buildRequest(instrumentKeys, this.Method.UNSUBSCRIBE));
    }
  }

  changeMode(instrumentKeys, newMode) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(
        this.buildRequest(instrumentKeys, this.Method.SUBSCRIBE, newMode)
      );
    } else {
      throw new Error("Failed to changeMode: WebSocket is not open.");
    }
  }

  // Function to establish WebSocket connection
  async connectWebSocket(wsUrl, accessToken) {
    return new Promise((resolve) => {
      const ws = new WebSocket(wsUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        followRedirects: true,
      });
      resolve(ws);
    });
  }

  // Function to initialize the protobuf part
  async initProtobuf() {
    const protoPath = path.resolve(__dirname, "./proto/MarketDataFeed.proto");
    protobuf.load(protoPath, (error, root) => {
      if (error) {
        console.error("Error loading .proto file", error);
        return;
      }
      this.protobufRoot = root;
    });
  }

  // Function to decode protobuf message
  decodeProtobuf(buffer) {
    if (!this.protobufRoot) {
      console.warn("Protobuf part not initialized yet!");
      return null;
    }

    const FeedResponse = this.protobufRoot.lookupType(
      "com.upstox.marketdatafeeder.rpc.proto.FeedResponse"
    );
    return FeedResponse.decode(buffer);
  }

  buildRequest(instrumentKeys, method, mode) {
    const requestObj = {
      guid: uuid4(),
      method,
      data: {
        instrumentKeys,
      },
    };

    // Only add 'mode' to 'data' if it is not undefined
    if (mode !== undefined) {
      requestObj.data.mode = mode;
    }

    return Buffer.from(JSON.stringify(requestObj));
  }
}

export { MarketDataFeeder };
