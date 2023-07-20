# Market Stream feed websocket client

This Node.js project illustrates how to connect to the Upstox Websocket API to stream live market data. It fetches market data for a specified list of instrument keys and decodes the incoming protobuf data.

## Getting Started

Follow these instructions to run the websocket client.

### Prerequisites

Before you can run this script, you need to have Node.js and npm installed on your system. If you haven't installed Node.js and npm yet, you can download it from the official website:

[Download Node.js](https://nodejs.org/en/download)

You will also need to install several npm packages:

- `upstox-js-sdk`
- `ws`
- `protobufjs`

You can install these packages using npm, a package manager for Node.js. Open a terminal and enter the following command:

```sh
npm install upstox-js-sdk ws protobufjs
```

### Configuration

The script requires an Upstox API access token for authorization. You will need to specify your Upstox API access token in the script. Look for the line below and replace 'ACCESS_TOKEN' with your actual access token.

```
OAUTH2.accessToken = "ACCESS_TOKEN";
```

### Running the Script

After installing the prerequisites and setting up your access token, you can run the script. Navigate to the directory containing the script and run the following command:

```
node websocket_client.js
```

Replace websocket_client.py with the name of your JavaScript file.

## Understanding the Code

The script first authenticates using an OAuth2 access token. It fetches the authorized redirect URI from the Upstox server and uses this to establish a connection to the Websocket server.

The script then establishes a websocket connection, sends a subscription request for "NSE_INDEX|Nifty Bank" and "NSE_INDEX|Nifty 50". When it receives data from the server, it decodes the protobuf data and then logs the decoded data.

## Support

If you encounter any problems or have any questions about this project, feel free to open an issue in this repository.

## Disclaimer

This is a sample script meant for educational purposes. It may require modifications to work with your specific requirements.

Please replace `'ACCESS_TOKEN'` with your actual access token and `websocket_client.js` with the name of your JavaScript file. Modify any other details as needed to fit your project.


