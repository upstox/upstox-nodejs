import { PortfolioDataFeeder } from "./PortfolioDataFeeder";
import Streamer from "./Streamer";

class PortfolioDataStreamer extends Streamer {
  constructor() {
    super();
  }

  async connect() {
    this.streamer = new PortfolioDataFeeder(this.instrumentKeys, this.mode);
    this.setupEventListeners();
    await this.streamer.connect();
  }

  disconnect() {
    this.streamer.disconnect();
  }
}

export { PortfolioDataStreamer };
