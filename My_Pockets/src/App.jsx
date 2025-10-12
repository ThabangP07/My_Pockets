import Analytics from "./components/Analytics";
import Exchange from "./components/Exchange";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions"
import NavBar from "./components/NavBar";
import Greetings from "./components/Greetings";
import Budget from "./pages/Budget";;

function App() {

  return (
    <div>
      <NavBar />
      <main>
        <header>
          <Greetings />
        </header>
        <section>
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
