import Transactions from "./components/Transactions"

function App() {

  // hardcoded transactions data, to be replaced with json data
  const transaction = [{ store: "Amazon", price: "R200.00" },
                        { store: "Walmart", price: "R150.00" },
                        { store: "Ebay", price: "R300.00" },
                        { store: "Target", price: "R400.00" },
                        { store: "Best Buy", price: "R250.00" }
  ];

  return (
    <>
      <h1>My Pockets</h1>
      <p>Personal Finance Tracker</p>
      {transaction.map((trans) => 
        <Transactions store={trans.store} price={trans.price} />)}
    </>
  )
}

export default App
