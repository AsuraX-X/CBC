import React from "react";

function Hero() {
  return (
    <div className="grid px-4 sm:px-8 sm:grid-cols-2 gap-12 py-8 sm:py-16 grid-cols-1">
      <div className="h-full w-full space-y-2 sm:order-1 order-2">
        <img
          src="src/assets/Home/Hero.avif"
          alt="Hero Image"
          className="object-cover rounded-[60px] h-full w-full"
        />
        <p className="text-black/60 text-sm">
          Stocks and prediction markets not available in your jurisdiction.
        </p>
      </div>
      <div className="place-content-center order-1">
        <div className="flex flex-col max-w-xl gap-y-6">
          <h1 className="sm:text-7xl text-[52px] leading-18">
            The future of finance is here.
          </h1>
          <p className="text-[18px]">
            Trade crypto and more on a platform you can trust.
          </p>
          <div className="flex sm:flex-row flex-col gap-6">
            <input
              placeholder="satoshi@nakamoto.com"
              className="p-4 border-black/20 border rounded-lg w-full hover:bg-[#f7f7f7]"
            />
            <button className="btn-primary">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
