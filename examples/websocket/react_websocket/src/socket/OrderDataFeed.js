import React, { useEffect, useState } from "react";

export default function OrderDataFeed({ token }) {
  const [isConnected, setIsConnected] = useState(false);
  const [feedData, setFeedData] = useState([]);

  // Establishing WebSocket connection
  useEffect(() => {
    const url =
      "https://api.upstox.com/v2/feed/portfolio-stream-feed/authorize";
    const headers = {
      "Api-Version": "2.0",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    };

    // Fetching WebSocket URL
    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        // Initialize WebSocket with URL obtained from API
        const ws = new WebSocket(data.data.authorized_redirect_uri);

        ws.onopen = () => {
          setIsConnected(true);
          console.log("WebSocket connection established");
        };

        ws.onmessage = (event) => {
          console.log("Received message:", event.data);
          setFeedData((currentData) => [...currentData, event.data]);
        };

        ws.onclose = () => {
          setIsConnected(false);
          console.log("Disconnected");
        };

        ws.onerror = (error) => {
          setIsConnected(false);
          console.log("WebSocket error:", error);
        };

        // Cleanup function to close WebSocket connection when component unmounts
        return () => {
          ws.close();
        };
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [token]);

  return (
    <div className="feed-container">
      <div className="header-section">
        <h1>Order Feed</h1>
        <h3 className={`status ${isConnected ? "connected" : "not-connected"}`}>
          Status: <span>{isConnected ? "Connected" : "Not Connected"}</span>
        </h3>
      </div>
      {isConnected && (
        <div className="feed-section">
          <div className="title">Feed</div>
          <div>
            {feedData.map((data, index) => (
              <div key={index} className="feed-item">
                {JSON.stringify(data)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
