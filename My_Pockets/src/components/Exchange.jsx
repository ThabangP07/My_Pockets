import React, { useEffect, useState } from "react";
import ExchangeHeadings from "./ExchangeHeadings";

function Exchange() {
  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/ZAR");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        //console.log(data);

        if (!data || !data.rates) {
          throw new Error("Rates not found in API response");
        }

        const majorCurrencies = [
          "USD", // US Dollar
          "EUR", // Euro
          "GBP", // British Pound
          "CHF", // Swiss Franc
          "JPY", // Japanese Yen
          "CAD", // Canadian Dollar
          "AUD", // Australian Dollar
          "NZD", // New Zealand Dollar
          "CNY", // Chinese Yuan
          "HKD", // Hong Kong Dollar
        ];


        const filteredEntries = Object.entries(data.rates)
          .filter(([currency]) => majorCurrencies.includes(currency))
          .map(([currency, rate]) => ({
            header: `${currency}/ZAR`,
            exchange: `R ${(1 / rate).toFixed(2)}`,
          }));

        const sorted = filteredEntries.sort((a, b) => {
          const numA = parseFloat(a.exchange.replace("R ", ""));
          const numB = parseFloat(b.exchange.replace("R ", ""));
          return numB - numA;
        });

        setRates(sorted);
      } catch (err) {
        console.error("Error fetching exchange rates:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  if (loading) return <p>Loading exchange rates…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="border-2 rounded-2xl p-2 space-y-3">
      <h2 className="font-bold text-2xl">Forex Exchange (To ZAR)</h2>
      <div>
        {rates.map((data, index) => (
          <ExchangeHeadings
            key={index}
            header={data.header}
            exchange={data.exchange}
          />
        ))}
      </div>
    </section>
  );
}

export default Exchange;
