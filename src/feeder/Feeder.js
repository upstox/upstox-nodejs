import { Readable } from "stream";

/**
 * Interface representing a data feeder.
 * Implementations should provide functionality for connecting to a data source,
 * handling connection events, and streaming data.
 */
class Feeder extends Readable {
  constructor() {
    super();
    if (new.target === Feeder) {
      throw new Error(
        "Feeder is an interface-like class and cannot be instantiated directly."
      );
    }
  }

  /**
   * Establishes a connection to the data source.
   */
  async connect() {
    throw new Error("Method 'connect()' must be implemented.");
  }

  /**
   * Determines if a reconnection is necessary.
   */
  shouldReconnect() {
    throw new Error("Method 'shouldReconnect()' must be implemented.");
  }

  /**
   * Handles incoming messages from the WebSocket connection.
   */
  onMessage() {
    throw new Error("Method 'onMessage()' must be implemented.");
  }

  /**
   * Handles the closing of the WebSocket connection.
   */
  onClose() {
    throw new Error("Method 'onClose()' must be implemented.");
  }

  /**
   * Handles errors from the WebSocket connection.
   */
  onError() {
    throw new Error("Method 'onError()' must be implemented.");
  }

  /**
   * Disconnects from the data source.
   */
  disconnect() {
    throw new Error("Method 'disconnect()' must be implemented.");
  }

  /**
   * Implementation of the Readable stream's _read method.
   */
  _read() {}
}

export default Feeder;
