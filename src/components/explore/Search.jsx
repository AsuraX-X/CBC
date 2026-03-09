import { ArrowDownRight, SearchIcon } from "lucide-react";
import React from "react";

function Search() {
  return (
    <div className="px-8 flex sm:flex-row flex-col sm:gap-16 gap-6 border-b border-b-black/20 justify-between w-full py-16">
      <div className="shrink-0">
        <h1 className="text-[28px] font-medium">Explore crypto</h1>
        <p className="flex items-center gap-0.5">
          Coinbase 50 Index is down{" "}
          <span className="text-red-800">
            <ArrowDownRight size={18} />
          </span>
          1.66% (24hrs)
        </p>
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center bg-[#eef0f3] w-full rounded-full px-4 hover:bg-[#e5e7ea] py-4">
          <SearchIcon size={16} />
          <input
            type="text"
            className="w-full"
            placeholder="Search for an asset"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
