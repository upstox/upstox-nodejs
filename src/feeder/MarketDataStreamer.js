import { MarketDataFeeder } from "./MarketDataFeeder";
import Streamer from "./Streamer";

class MarketDataStreamer extends Streamer {
  //Required enums
  Mode = Object.freeze({
    LTPC: "ltpc",
    FULL: "full",
  });

  constructor(instrumentKeys = [], mode = "") {
    super();
    this.instrumentKeys = instrumentKeys;
    this.mode = mode;
    this.subscriptions = {
      [this.Mode.LTPC]: new Set(),
      [this.Mode.FULL]: new Set(),
    };
    // Populate initial subscriptions if provided
    instrumentKeys.forEach((key) => this.subscriptions[mode].add(key));
  }

  subscriptionEventListeners() {
    this.streamer.on("open", () => {
      Object.entries(this.subscriptions).forEach(([mode, keys]) => {
        if (keys.size > 0) {
          this.subscribe(Array.from(keys), mode);
        }
      });
    });
  }

  async connect() {
    this.streamer = new MarketDataFeeder(this.instrumentKeys, this.mode);
    this.setupEventListeners();
    this.subscriptionEventListeners();
    await this.streamer.connect();
  }

  disconnect() {
    this.streamer.disconnect();
    this.#clearSubscriptions();
  }

  subscribe(instrumentKeys, mode) {
    this.streamer.subscribe(instrumentKeys, mode);
    this.subscriptions[mode] = new Set([
      ...this.subscriptions[mode],
      ...instrumentKeys,
    ]);
  }

  unsubscribe(instrumentKeys) {
    this.streamer.unsubscribe(instrumentKeys);
    Object.values(this.subscriptions).forEach((set) => {
      instrumentKeys.forEach((key) => set.delete(key));
    });
  }

  changeMode(instrumentKeys, newMode) {
    this.streamer.changeMode(instrumentKeys, newMode);
    const oldMode =
      newMode === this.Mode.LTPC ? this.Mode.FULL : this.Mode.LTPC;

    // Remove keys from the old mode
    instrumentKeys.forEach((key) => {
      this.subscriptions[oldMode].delete(key);
    });

    // Add keys to the new mode
    this.subscriptions[newMode] = new Set([
      ...this.subscriptions[newMode],
      ...instrumentKeys,
    ]);
  }

  #clearSubscriptions() {
    this.subscriptions[this.Mode.LTPC].clear();
    this.subscriptions[this.Mode.FULL].clear();
  }
}

export { MarketDataStreamer };
