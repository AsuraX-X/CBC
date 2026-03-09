import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Control() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();
    navigate("/signUp", { state: { email } });
  }

  return (
    <div>
      <div className="grid px-4 sm:px-8 sm:grid-cols-2 gap-12 py-8 sm:py-16 grid-cols-1">
        <div className="place-content-center ">
          <div className="flex flex-col max-w-xl gap-y-6">
            <h1 className="sm:text-7xl text-[54px] leading-18">
              Take control of your money{" "}
            </h1>
            <p className="text-[18px]">
              Start your portfolio today and discover crypto
            </p>
            <form
              onSubmit={handleSignUp}
              className="flex sm:flex-row flex-col gap-6"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="satoshi@nakamoto.com"
                className="p-4 border-black/20 border rounded-lg w-full hover:bg-[#f7f7f7]"
              />
              <button type="submit" className="btn-primary">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        <div className="h-full w-full space-y-2 ">
          <img
            src="/assets/Home/cryptos.png"
            className="object-cover rounded-[60px] h-full w-full"
          />
        </div>
      </div>
      <div className="text-center text-xs px-4 text-black/60 space-y-6 pt-14 sm:pt-28 sm:pb-24 pb-12 max-w-3xl mx-auto">
        <p>DEX trading is offered by Coinbase Bermuda Technologies Ltd.</p>
        <p>
          Products and features may not be available in all regions. Information
          is for or informational purposes only, and is not (i) an offer, or
          solicitation of an offer, to invest in, or to buy or sell, any
          interests or shares, or to participate in any investment or trading
          strategy or (ii) intended to provide accounting, legal, or tax advice,
          or investment recommendations. Trading cryptocurrency comes with risk.
        </p>
      </div>
    </div>
  );
}

export default Control;
