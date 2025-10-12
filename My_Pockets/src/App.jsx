import Analytics from "./components/Analytics";
import Exchange from "./components/Exchange";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions"
import NavBar from "./components/NavBar";
import Greetings from "./components/Greetings";
import Budget from "./pages/Budget";

function App() {

  return (
    <div className="grid grid-cols-4 h-dvh bg-blue-200">
      <NavBar />
      <main className="col-span-3">
        <header>
          <Greetings />
        </header>
        <section className="grid grid-cols-2">
          <Overview />
          <Analytics />
          <Transactions />
          <Exchange />
        </section>
      </main>
    </div>
  );
}

export default App
