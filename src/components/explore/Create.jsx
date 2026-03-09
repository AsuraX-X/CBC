import { ArrowRight } from "lucide-react";
import React from "react";

function Create() {
  return (
    <div className="bg-[#0052ff] sm:px-8 px-4 py-8 sm:grid hidden grid-cols-2 w-full">
      <div className="space-y-8 text-white">
        <h1 className="text-[28px] leading-9">
          Create a Coinbase account to trade crypto. It’s quick, easy, and
          secure.
        </h1>
        <button className="btn-secondary text-black flex items-center justify-between w-full py-4 max-w-81.25">
          Start Trading <ArrowRight />
        </button>
      </div>
      <div className="place-content-center">
        <img
          src="src/assets/explore/create.svg"
          width={240}
          height={120}
          className="mx-auto"
          alt="Create Account"
        />
      </div>
    </div>
  );
}

export default Create;
