# React WebSocket Client

This sample project demonstrates how to connect to the Upstox WebSocket API using ReactJS to stream live market data and order updates. It includes implementations for both market data streaming and order updates. Users need to set up their Upstox API access token and can then start receiving live feeds of market data and order updates.

## Getting Started

Follow these instructions to run the React WebSocket client on your local machine.

### Prerequisites

Before you start, ensure you have Node.js and npm installed on your system. If you haven't installed Node.js and npm yet, you can download them from the official website:

[Download Node.js](https://nodejs.org/)

### Installation

This project requires several dependencies which can be installed using npm. These dependencies are listed in the `package.json` file. Run the following command in your terminal to install all required packages:

```bash
npm install
```

### Configuration

The application requires an Upstox API access token for authorization. You need to specify your Upstox API access token in the App.js file. Locate the following line in App.js and replace 'ACCESS_TOKEN' with your actual access token:

```bash
const auth_token = "ACCESS_TOKEN";
```

### Running the Application

After installing the prerequisites and configuring your access token, you can start the application. Navigate to the directory containing your project and run the following command:

```bash
npm start
```

### Understanding the Code

The project consists of a React application that establishes connections to the Upstox WebSocket API for market data and order updates. After successful authentication, the application connects to the WebSocket server and starts receiving data. The received data is then decoded, and the live feed is displayed on the screen.

### Support

If you encounter any problems or have any questions about this project, feel free to open an issue in this repository.

### Disclaimer

This is a sample application meant for educational purposes. It may require modifications to work with your specific requirements.