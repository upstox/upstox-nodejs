import OrderDataFeed from "./socket/OrderDataFeed";
import MarketDataFeed from "./socket/MarketDataFeed";
import "./App.css";

function App() {
  const auth_token = "ACCESS_TOKEN";

  return (
    <div className="app-container">
      <MarketDataFeed token={auth_token} />
      <OrderDataFeed token={auth_token} />
    </div>
  );
}

export default App;
