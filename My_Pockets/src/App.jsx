import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";
import History from "./components/History";
import Tips from "./components/Tips";
import Home from "./components/Home";
import Investment from "./components/Investment"; 
import AnalyticsCom from "./components/AnalyticsCom";
import Budget from "./pages/Budget";
import { BudgetProvider } from "./pages/BudgetContext";

function App() {
  return (
    <BrowserRouter>
      <div className="grid grid-cols-4 bg-blue-200 min-h-screen">
        <NavBar />
        <div className="col-span-3 flex flex-col justify-between ">
          <main className="col-span-3">
            <Greetings />
            <Routes>
              {/* Home route */}
              <Route path="/" element={<Home />} />
              {/* Investment route */}
              <Route path="/investments" element={<Investment />} />

              {/* Analytics route */}
              <Route path="/analytics" element={<AnalyticsCom />} />

              {/* History route */}
              <Route path="/history" element={<History />} />

              {/* Tips route */}
              <Route path="/tips" element={<Tips />} />

              {/* Budget route */}
              <Route
                path="/budget"
                element={
                  <BudgetProvider>
                    <Budget />
                  </BudgetProvider>
                }
              />
            </Routes>
          </main>
          <footer className="bottom-0 p-4">
            <Footer className="mt-2 p-4 text-center" />
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
