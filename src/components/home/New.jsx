import React from "react";
import NewBlock from "./NewBlock";

function New() {
  return (
    <div className="sm:px-28 space-y-16 bg-[#eef0f3] px-4 py-8 sm:py-16">
      <div className="grid sm:grid-cols-2  grid-cols-1 gap-32">
        <div>
          <h1 className="text-6xl">New to crypto? Learn some crypto basics</h1>
        </div>
        <div className="space-y-6">
          <p className="text-[18px] text-black/60">
            Beginner guides, practical tips, and market updates for
            first-timers, experienced investors, and everyone in between
          </p>
          <button className="btn-primary-l  bg-[#0a0b0d] hover:bg-[#383839]">
            Read more
          </button>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-3">
        <NewBlock
          image="/assets/Home/learn1.png"
          title="USDC: The digital dollar for the global crypto economy..."
          description="Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more equitable. We co-founded the Centre Consortium in 2018 to invest in the build of USDC, and since then it has become the second largest stablecoin by market capitalization."
        />
        <NewBlock
          image="/assets/Home/learn2.png"
          title="Can crypto really replace your bank account?"
          description="If you’re a big enough fan of crypto, you’ve probably heard the phrase “be your own bank” or the term “bankless” — the idea being that crypto can offer more control over your financial future than traditional finance. But how much of your financial life really can be accomplished via crypto?"
        />
        <NewBlock
          image="/assets/Home/learn3.png"
          title="When is the best time to invest in crypto?"
          description="Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty, fear of missing out, or fear of participating at all. When prices are fluctuating, how do you know when to buy?"
        />
      </div>
    </div>
  );
}

export default New;
