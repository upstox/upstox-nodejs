import WebSocket from "ws";
import { ApiClient } from "../ApiClient";
import Feeder from "./Feeder";

class PortfolioDataFeeder extends Feeder {
  ws = null;
  userClosedWebSocket = false;
  closingCode = -1;

  constructor() {
    super();
    this.apiClient = ApiClient.instance;
  }

  async connect(orderUpdate = true, positionUpdate = false, holdingUpdate = false) {
    // Skip if its already connected
    if (
      this.ws &&
      (this.ws.readyState == ws.CONNECTING || ws.readyState == ws.OPEN)
    )
      return;
    let wsUrl = this.getWebSocketUrl(orderUpdate, positionUpdate,holdingUpdate);
    this.ws = await this.connectWebSocket(
      wsUrl,
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
      this.push(data);
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
  getWebSocketUrl(orderUpdate, positionUpdate,holdingUpdate) {
    let wsUrl = "wss://api.upstox.com/v2/feed/portfolio-stream-feed";
    let updateTypes = [];

    if (orderUpdate) {
      updateTypes.push("order");
    }
    if (holdingUpdate) {
      updateTypes.push("holding");
    }
    if (positionUpdate) {
      updateTypes.push("position");
    }

    if (updateTypes.length >= 1) {
      wsUrl += "?update_types=";
    }

    for (let i = 0; i < updateTypes.length - 1; i++) {
      wsUrl += updateTypes[i] + "%2C";
    }

    if (updateTypes.length >= 1) {
      wsUrl += updateTypes[updateTypes.length - 1];
    }
    return wsUrl;
  }
}

export { PortfolioDataFeeder };
