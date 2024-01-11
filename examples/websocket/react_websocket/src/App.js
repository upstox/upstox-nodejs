import OrderDataFeed from "./socket/OrderDataFeed";
import MarketDataFeed from "./socket/MarketDataFeed";
import "./App.css";

function App() {
  const auth_token = "eyJ0eXAiOiJKV1QiLCJrZXlfaWQiOiJza192MS4wIiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiI2UEJFU0wiLCJqdGkiOiI2NTlmYWU3ZWExYWI0ODViNDM3N2ZkYmUiLCJpc011bHRpQ2xpZW50Ijp0cnVlLCJpc0FjdGl2ZSI6dHJ1ZSwic2NvcGUiOltdLCJpYXQiOjE3MDQ5NjM3MTAsImlzcyI6InVkYXBpLWdhdGV3YXktc2VydmljZSIsImV4cCI6MTcwNTAxMDQwMH0.fbJDiceJsx3IzP0k0SC5obvAZWwYLoGGtPM1ljh0hi4";

  return (
    <div className="app-container">
      <MarketDataFeed token={auth_token} />
      <OrderDataFeed token={auth_token} />
    </div>
  );
}

export default App;
