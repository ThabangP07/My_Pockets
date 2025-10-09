import Exchange from "./components/Exchange";
import Transactions from "./components/Transactions"

function App() {

  // hardcoded the data, to be replaced with data from an api
  const rates = [
    { header: "USD/ZAR", exchange: "R 17.36" },
    { header: "EUR/ZAR", exchange: "R 20.07" },
    { header: "EUR/ZAR", exchange: "R 20.07" },
    { header: "EUR/ZAR", exchange: "R 20.07" },

  ];

  return (
    <>
      <h1>My Pockets</h1>
      <p>Personal Finance Tracker</p>
      {rates.map((rate) => 
        <Exchange header={rate.header} exchange={rate.exchange} />)}
    </>
  )
}

export default App
