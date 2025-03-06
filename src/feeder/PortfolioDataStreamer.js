import { PortfolioDataFeeder } from "./PortfolioDataFeeder";
import Streamer from "./Streamer";

class PortfolioDataStreamer extends Streamer {
  constructor(orderUpdate = true, positionUpdate = false, holdingUpdate = false, gttUpdate = false) {
    super();
    this.orderUpdate = orderUpdate;
    this.positionUpdate = positionUpdate;
    this.holdingUpdate = holdingUpdate;
    this.gttUpdate = gttUpdate;
  }

  async connect() {
    this.streamer = new PortfolioDataFeeder();
    this.setupEventListeners();
    await this.streamer.connect(this.orderUpdate, this.positionUpdate, this.holdingUpdate, this.gttUpdate);
  }

  disconnect() {
    this.streamer.disconnect();
  }
}

export { PortfolioDataStreamer };
