import {
  ArrowDownRight,
  ArrowUpDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import React, { useMemo, useState } from "react";
import { cryptocurrencies } from "../../data/cryptocurrencies";

function SparklineChart({ change }) {
  const isPositive = change >= 0;
  const color = isPositive ? "#16a34a" : "#dc2626";

  const points = useMemo(() => {
    const count = 14;
    const pts = [];
    let y = isPositive ? 48 : 12;
    const magnitude = Math.min(Math.abs(change) / 2, 1);
    const bias = isPositive
      ? 0.5 - 0.2 - magnitude * 0.15
      : 0.5 + 0.2 + magnitude * 0.15;
    for (let i = 0; i < count; i++) {
      y += (Math.random() - bias) * 22;
      y = Math.max(4, Math.min(56, y));
      pts.push({ x: (i / (count - 1)) * 100, y });
    }
    return pts;
  }, []);

  const pathD = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  const areaD =
    pathD + ` L ${points[points.length - 1].x} 60 L ${points[0].x} 60 Z`;

  return (
    <svg viewBox="0 0 100 60" width={80} height={40} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`grad-${change}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#grad-${change})`} />
      <path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const columns = [
  { label: "" },
  { label: "Asset" },
  { label: "Market Price" },
  { label: "Chart" },
  { label: "Change" },
  { label: "Mkt Cap" },
  { label: "Volume" },
  { label: "Actions" },
];

const TOTAL_ASSETS = 18562;

function getPageNumbers(currentPage, totalPages) {
  // Always show 4 numbers: up to 3 early pages + last page (with ellipsis before last if needed)
  if (totalPages <= 4) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages = [];

  // Build the first 3 page slots around the current page
  let start = Math.max(1, currentPage - 1);
  let end = start + 2;

  if (end >= totalPages) {
    end = totalPages - 1;
    start = end - 2;
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Add ellipsis + last page
  if (end < totalPages - 1) {
    pages.push("...");
  }
  pages.push(totalPages);

  return pages;
}

function MarketTable({ rowCount = 10 }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(cryptocurrencies.length / rowCount);

  // Reset to page 1 when rowCount changes via a key or effect isn't needed —
  // slicing handles overflow gracefully, but let's clamp just in case.
  const safePage = Math.min(currentPage, totalPages);

  const startIndex = (safePage - 1) * rowCount;
  const endIndex = startIndex + rowCount;
  const visibleCoins = cryptocurrencies.slice(startIndex, endIndex);

  const rangeStart = startIndex + 1;
  const rangeEnd = Math.min(endIndex, cryptocurrencies.length);

  const pageNumbers = getPageNumbers(safePage, totalPages);

  function handlePageChange(page) {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-black/10 text-black/50 text-left">
              {columns.map((col, i) => (
                <th key={i} className="px-4 py-3 font-medium whitespace-nowrap">
                  <span className="flex items-center gap-1">
                    {col.label}
                    {i > 0 && <ArrowUpDown size={16} />}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleCoins.map((coin) => (
              <tr
                key={coin.name}
                className="border-b border-black/5 hover:bg-[#f7f8f9] transition-colors"
              >
                {/* Star */}
                <td className="px-4 py-3">
                  <button className="text-black/30 hover:text-yellow-400 transition-colors">
                    <Star size={16} />
                  </button>
                </td>
                {/* Asset */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-[#eef0f3] shrink-0" />
                    <div>
                      <p className="font-semibold text-sm whitespace-nowrap">
                        {coin.name}
                      </p>
                      <p className="text-xs text-black/40">
                        {coin.name.slice(0, 3).toUpperCase()}
                      </p>
                    </div>
                  </div>
                </td>
                {/* Market Price */}
                <td className="px-4 py-3 font-medium whitespace-nowrap">
                  {coin.value}
                </td>
                {/* Chart */}
                <td className="px-4 py-3">
                  <SparklineChart change={coin.change} />
                </td>
                {/* Change */}
                <td className="px-4 py-3">
                  <span
                    className={`font-semibold flex items-center gap-1 ${coin.change >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {coin.change >= 0 ? (
                      <ArrowUpRight size={16} />
                    ) : (
                      <ArrowDownRight size={16} />
                    )}
                    {Math.abs(coin.change).toFixed(2)}%
                  </span>
                </td>
                {/* Mkt Cap */}
                <td className="px-4 py-3 text-black/70 whitespace-nowrap">
                  {coin.value.replace("GHS ", "GHS ")}
                </td>
                <td className="px-4 py-3 text-black/70 whitespace-nowrap">
                  GHS{" "}
                  {(
                    parseFloat(coin.value.replace(/[^0-9.]/g, "")) *
                    Math.floor(Math.random() * 900 + 100)
                  ).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-3">
                  <button className="btn-primary-c text-sm">Trade</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col items-center gap-1 py-5 sm:px-8 px-4">
        <div className="flex items-center gap-1">
          {/* Prev */}
          <button
            onClick={() => handlePageChange(safePage - 1)}
            disabled={safePage === 1}
            className="p-2 rounded-lg text-black/50 hover:bg-[#f7f8f9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={16} />
          </button>

          {pageNumbers.map((page, i) =>
            page === "..." ? (
              <span
                key={`ellipsis-${i}`}
                className="px-3 py-1.5 text-sm text-black/40 select-none"
              >
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`min-w-9 h-9 px-3 rounded-full text-sm font-medium transition-colors ${
                  page === safePage
                    ? "bg-[#135fff] text-white"
                    : "text-black/60 hover:bg-[#f7f8f9]"
                }`}
              >
                {page}
              </button>
            ),
          )}

          {/* Next */}
          <button
            onClick={() => handlePageChange(safePage + 1)}
            disabled={safePage === totalPages}
            className="p-2 rounded-lg text-black/50 hover:bg-[#f7f8f9] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Row range */}
        <p className="text-xs text-black/40">
          {rangeStart}–{rangeEnd} of {TOTAL_ASSETS.toLocaleString()} assets
        </p>
      </div>
    </div>
  );
}

export default MarketTable;
