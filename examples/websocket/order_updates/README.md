# Portfolio Stream Feed WebSocket Client

This Node.js project illustrates how to connect to the Upstox WebSocket API for streaming live order updates. It fetches the order updates and prints them to the console.

## Getting Started

Follow these instructions to run the websocket client.

### Prerequisites

Before you can run this script, you need to have Node.js and npm installed on your system. If you haven't installed Node.js and npm yet, you can download it from the official website:

[Download Node.js](https://nodejs.org/en/download)

You will also need to install several npm packages:

- `upstox-js-sdk`
- `ws`

You can install these packages using npm, a package manager for Node.js. Open a terminal and enter the following command:

```sh
npm install upstox-js-sdk ws
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

The script then establishes a websocket connection where it continually receives order update messages from the server and prints them to the console..

## Support

If you encounter any problems or have any questions about this project, feel free to open an issue in this repository.

## Disclaimer

This is a sample script meant for educational purposes. It may require modifications to work with your specific requirements.

Please replace `'ACCESS_TOKEN'` with your actual access token and `websocket_client.js` with the name of your JavaScript file. Modify any other details as needed to fit your project.


