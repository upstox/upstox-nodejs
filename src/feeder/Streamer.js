/**
 * Interface for classes that manage a WebSocket connection.
 */
import { EventEmitter } from "events";
class Streamer extends EventEmitter {
  Event = Object.freeze({
    OPEN: "open",
    CLOSE: "close",
    MESSAGE: "message",
    ERROR: "error",
    RECONNECTING: "reconnecting",
    AUTO_RECONNECT_STOPPED: "autoReconnectStopped",
  });

  #enableAutoReconnect;
  #interval;
  #retryCount;
  #reconnectInterval;
  #reconnectOpenListener;
  #reconnectCloseListener;

  constructor() {
    super();
    this.#enableAutoReconnect = true;
    this.#interval = 1;
    this.#retryCount = 5;
    this.#reconnectInterval = null;
    this.#reconnectOpenListener = null;
    this.#reconnectCloseListener = null;
    this.#prepareAutoReconnect();
    if (new.target === Streamer) {
      throw new TypeError("Cannot construct Streamer instances directly");
    }
  }

  async connect() {
    throw new Error("Method 'connect()' must be implemented.");
  }

  addEventsListeners() {
    throw new Error("Method 'addEventsListeners()' must be implemented.");
  }

  setupEventListeners() {
    this.streamer.on("open", () => this.emit(this.Event.OPEN));
    this.streamer.on("data", (data) => {
      this.emit(this.Event.MESSAGE, data);
    });
    this.streamer.on("error", (error) => this.emit(this.Event.ERROR, error));
    this.streamer.on("close", () => this.emit(this.Event.CLOSE));
  }

  #prepareAutoReconnect() {
    let counter = 0;

    const attemptReconnect = async () => {
      if (!this.#enableAutoReconnect) {
        clearInterval(this.#reconnectInterval);
        return;
      }

      if (this.streamer.shouldReconnect()) {
        this.emit(
          this.Event.RECONNECTING,
          `Auto reconnect attempt ${counter + 1}/${this.#retryCount}`
        );
        await this.connect();
        counter++;
      }

      if (counter >= this.#retryCount) {
        clearInterval(this.#reconnectInterval);
        this.streamer.clearSubscriptions();
        this.emit(
          this.Event.AUTO_RECONNECT_STOPPED,
          `retryCount of ${this.#retryCount} exhausted.`
        );
        return;
      }
    };

    // Remove existing listeners if they exist
    if (this.#reconnectOpenListener) {
      this.removeListener("open", this.#reconnectOpenListener);
    }
    if (this.#reconnectCloseListener) {
      this.removeListener("close", this.#reconnectCloseListener);
    }

    // Define new listeners
    this.#reconnectOpenListener = () => {
      clearInterval(this.#reconnectInterval);
      counter = 0;
    };
    this.#reconnectCloseListener = () => {
      this.#reconnectInterval = setInterval(
        attemptReconnect,
        this.#interval * 1000
      );
    };

    // Attach the new listeners
    this.on("open", this.#reconnectOpenListener);
    this.on("close", this.#reconnectCloseListener);
  }

  autoReconnect(enable, interval = 1, retryCount = 5) {
    this.#enableAutoReconnect = enable;
    this.#interval = interval;
    this.#retryCount = retryCount;

    if (!enable) {
      this.emit(this.Event.AUTO_RECONNECT_STOPPED, "Stopped by client.");
      return;
    }

    this.#prepareAutoReconnect();
  }
}

export default Streamer;
