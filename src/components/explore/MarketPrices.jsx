import {
  ArrowDownLeft,
  ArrowUpRight,
  ChartColumn,
  Gem,
  Globe2,
} from "lucide-react";
import React, { useState } from "react";
import FilterButton from "./FilterButton";
import MarketTable from "./MarketTable";
import Create from "./Create";

const options1 = [
  { label: "All Assets", icon: <Globe2 size={18} /> },
  { label: "Tradable", icon: <ChartColumn size={18} /> },
  { label: "New", icon: <Gem size={18} /> },
  { label: "Gainers", icon: <ArrowUpRight size={18} /> },
  { label: "Losers", icon: <ArrowDownLeft size={18} /> },
];

const options2 = [
  { label: "1H" },
  { label: "1D" },
  { label: "1W" },
  { label: "1M" },
  { label: "1Y" },
];
const options3 = [{ label: "GHS" }, { label: "USD" }, { label: "EUR" }];
const options4 = [
  { label: "10 rows" },
  { label: "30 rows" },
  { label: "50 rows" },
];

function MarketPrices() {
  const [rowCount, setRowCount] = useState(10);

  return (
    <div className="pt-8">
      <div className="sm:px-8 space-y-4 px-4">
        <h1 className="text-[28px] font-medium">
          Crypto market prices
          <span className="text-base font-normal ml-2 text-black/60">
            18,562 assets
          </span>
        </h1>
        <p className="text-sm text-black/60">
          The overall crypto market is growing this week. As of today, the total
          crypto market capitalization is 24.01 trillion, representing a 0.57%
          increase from last week.
        </p>
        <p className="text-[#135fff] text-sm">Read more</p>
      </div>
      <div className="py-4 sm:px-8 px-4 gap-2 flex-wrap flex items-center">
        <FilterButton options={options1} />
        <FilterButton options={options2} />
        <FilterButton options={options3} />
        <FilterButton
          options={options4}
          onSelect={(option) => setRowCount(parseInt(option.label))}
        />
      </div>
      <div className="px-4">
        <MarketTable rowCount={rowCount} />
      </div>
    </div>
  );
}

export default MarketPrices;
