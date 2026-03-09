import { useState } from "react";
import StatEntry from "./StatEntry";
import { cryptocurrencies, gainers, newCryptocurrencies } from "../../data";

function Stats() {
  const [activeTab, setActiveTab] = useState("Tradable");

  const data =
    activeTab === "Tradable"
      ? cryptocurrencies
      : activeTab === "Top Gainers"
        ? gainers.sort((a, b) => b.change - a.change)
        : newCryptocurrencies;

  const tabs = ["Tradable", "Top Gainers", "New on Coinbase"];

  return (
    <div className="bg-[#0a0b0d] space-y-4 md:space-y-8 rounded-4xl px-3 md:px-8 lg:px-12 py-4 md:py-8 lg:py-10">
      <div className="flex flex-wrap gap-2 md:gap-0 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`btn-primary bg-[#0a0b0d] text-xs md:text-base px-3 md:px-4 py-2 md:py-2 whitespace-nowrap transition-colors ${
              activeTab === tab ? "bg-white/15" : "hover:bg-white/5"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-2 md:space-y-3">
        {data.map((item, i) => i < 6 && <StatEntry key={item.id} {...item} />)}
      </div>
    </div>
  );
}

export default Stats;
