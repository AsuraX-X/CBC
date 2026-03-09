import { ArrowDownRight, ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import MarketStatsCard from "./MarketStatsCard";

const stats = [
  {
    title: "Total Market Cap",
    value: "GHS 24.08T",
    change: -1.2,
    image: "src/assets/explore/graph1.svg",
  },
  {
    title: "Total Volume",
    value: "GHS 1.25T",
    change: -3.46,
    image: "src/assets/explore/graph2.svg",
  },
  {
    title: "Buy-sell Ratio",
    value: "GHS 0.76",
    change: -3.36,
    image: "src/assets/explore/graph3.svg",
  },
  {
    title: "BTC Dominance",
    value: "60.17%",
    change: 0.01,
    image: "src/assets/explore/graph4.svg",
  },
];

function MarketStats() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth,
      );
    }
  };

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  React.useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      return () => container.removeEventListener("scroll", checkScroll);
    }
  }, []);

  return (
    <div className="py-8 border-b border-b-black/20">
      <div className="sm:px-8 px-4 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-[28px] font-medium">Market stats</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full transition-colors ${
                canScrollLeft
                  ? "hover:bg-[#f7f7f7] cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full transition-colors ${
                canScrollRight
                  ? "hover:bg-[#f7f7f7] cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <p className="text-black/60 text-sm">
          The overall crypto market is shrinking this week. As of today, the
          total crypto market capitalization is 24.08 trillion, representing a
          0.09% decrease from last week.
        </p>
        <p className="text-[#135fff] text-sm">Read more</p>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar px-8 py-8 gap-6"
      >
        {stats.map((stat) => (
          <MarketStatsCard {...stat} key={stat.title} />
        ))}
      </div>
    </div>
  );
}

export default MarketStats;
