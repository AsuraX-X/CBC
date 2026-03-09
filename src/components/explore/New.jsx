import { ArrowLeft, ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";
import NewCard from "./NewCard";
import { newCryptocurrencies } from "../../data";

function New() {
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
      <div className="sm:px-8 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-medium">New on Coinbase</h1>
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
      </div>
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto no-scrollbar px-8 py-4 gap-6"
      >
        {newCryptocurrencies.map((n) => (
          <NewCard {...n} key={n.name} />
        ))}
      </div>
    </div>
  );
}

export default New;
