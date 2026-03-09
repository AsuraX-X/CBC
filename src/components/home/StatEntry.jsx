import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import React from "react";

function StatEntry({ name, value, change }) {
  return (
    <div className="flex p-3 md:p-4 rounded-2xl md:rounded-3xl hover:bg-white/8 text-white justify-between items-center gap-2 md:gap-4">
      <div className="flex items-center gap-2 md:gap-3 min-w-0">
        <div className="size-6 md:size-8 bg-white rounded-full shrink-0" />
        <h1 className="text-sm md:text-2xl lg:text-[32px] font-semibold truncate">
          {name}
        </h1>
      </div>
      <div className="flex flex-col items-end shrink-0">
        <p className="text-xs md:text-lg lg:text-2xl font-semibold">{value}</p>
        <p
          className={`flex items-center gap-0.5 md:gap-1 text-xs md:text-base ${change > 0 ? "text-green-400" : "text-red-400"}`}
        >
          {change > 0 ? (
            <ArrowUpRight size={14} className="md:w-5 md:h-5" color="#05df72" />
          ) : (
            <ArrowDownLeft
              size={14}
              className="md:w-5 md:h-5"
              color="oklch(70.4% 0.191 22.216)"
            />
          )}
          <span>{Math.abs(change).toFixed(2)}%</span>
        </p>
      </div>
    </div>
  );
}

export default StatEntry;
