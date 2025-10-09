import Exchange from "./components/Exchange";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions"
import Budget from "./pages/Budget";

function App() {

  return (
    <>
      <h1>My Pockets</h1>
      <p>Personal Finance Tracker</p>
      <Overview
        heading1={"Balance"}
        heading2={"Income"}
        heading3={"Expenses"}
        amount1={"R 1200"}
        amount2={"R 2000"}
        amount3={"R 800"}
      />
    </>
  );
}

export default App
