import { PortfolioDataFeeder } from "./PortfolioDataFeeder";
import Streamer from "./Streamer";

class PortfolioDataStreamer extends Streamer {
  constructor(orderUpdate = true, positionUpdate = false, holdingUpdate = false) {
    super();
    this.orderUpdate = orderUpdate;
    this.positionUpdate = positionUpdate;
    this.holdingUpdate = holdingUpdate;
  }

  async connect() {
    this.streamer = new PortfolioDataFeeder();
    this.setupEventListeners();
    await this.streamer.connect(this.orderUpdate, this.positionUpdate, this.holdingUpdate);
  }

  disconnect() {
    this.streamer.disconnect();
  }
}

export { PortfolioDataStreamer };
