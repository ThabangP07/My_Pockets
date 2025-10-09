import Exchange from "./components/Exchange";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions"
import Budget from "./pages/Budget";

function App() {

  return (
    <>
      <h1>My Pockets</h1>
      <p>Personal Finance Tracker</p>
      <Transactions />
    </>
  );
}

export default App
