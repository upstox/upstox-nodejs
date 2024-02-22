import { PortfolioDataFeeder } from "./PortfolioDataFeeder";
import Streamer from "./Streamer";

class PortfolioDataStreamer extends Streamer {
  constructor() {
    super();
  }

  async connect() {
    this.streamer = new PortfolioDataFeeder();
    this.setupEventListeners();
    await this.streamer.connect();
  }

  disconnect() {
    this.streamer.disconnect();
  }
}

export { PortfolioDataStreamer };
