import { MarketDataFeederV3 } from "./MarketDataFeederV3";
import Streamer from "./Streamer";

class MarketDataStreamerV3 extends Streamer {
  //Required enums
  Mode = Object.freeze({
    LTPC: "ltpc",
    FULL: "full",
    OPTION: "option_greeks"
  });

  constructor(instrumentKeys = [], mode = "ltpc") {
    super();
    this.instrumentKeys = instrumentKeys;
    this.mode = mode;
    this.subscriptions = {
      [this.Mode.LTPC]: new Set(),
      [this.Mode.FULL]: new Set(),
      [this.Mode.OPTION]: new Set()
    };
    if(!Object.values(this.Mode).includes(mode)){
        throw new Error("Invalid mode provided ", mode);
    }
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
    this.streamer = new MarketDataFeederV3(this.instrumentKeys, this.mode);
    this.setupEventListeners();
    this.subscriptionEventListeners();
    await this.streamer.connect();
  }

  disconnect() {
    this.streamer.disconnect();
    this.#clearSubscriptions();
  }

  subscribe(instrumentKeys, mode) {
    if(this.isInvalidMode(mode)){
        return;
    }
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
    if (this.isInvalidMode(newMode)) {
        return;
    }
    this.streamer.changeMode(instrumentKeys, newMode);

    Object.keys(this.subscriptions).forEach((mode) => {
        instrumentKeys.forEach((key) => {
            this.subscriptions[mode].delete(key);
        });
    });

    // Add keys to the new mode
    this.subscriptions[newMode] = new Set([
        ...this.subscriptions[newMode],
        ...instrumentKeys,
    ]);

    this.mode = newMode;
}

  #clearSubscriptions() {
    this.subscriptions[this.Mode.LTPC].clear();
    this.subscriptions[this.Mode.FULL].clear();
    this.subscriptions[this.Mode.OPTION].clear();
  }

  isInvalidMode(mode) {
    if(!Object.values(this.Mode).includes(mode)){
        this.emit(this.Event.ERROR, `Invalid mode provided ${mode}`);
        return true;
    }
    return false;
  }
}

export { MarketDataStreamerV3 };
