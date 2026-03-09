import React from "react";
import { NavLink } from "react-router-dom";

function Step6({ onNext, onBack }) {
  function handleSubmit(e) {
    e.preventDefault();
    onNext();
  }

  return (
    <div className="bg-[#0a0b0d] flex flex-col h-screen">
      <div className="sm:px-8 px-4 py-4">
        <NavLink to={"/"}>
          <img
            className="size-8 brightness-0 invert"
            src="src/assets/common/logo.svg"
            alt=""
          />
        </NavLink>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-110">
          <form onSubmit={handleSubmit}>
            <h1 className="text-[1.75rem] font-bold text-white mb-2">
              Enter your place of birth
            </h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
              Coinbase is legally required to collect this info.
            </p>
            <div className="mb-4">
              <label className="block text-[0.875rem] font-semibold text-white mb-1.5">
                City of birth
              </label>
              <input
                placeholder="Accra"
                required
                className="w-full h-14 px-4 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white placeholder:text-[#5B616E] text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[0.875rem] font-semibold text-white mb-1.5">
                Country of birth
              </label>
              <div className="relative">
                <select className="w-full h-14 px-4 pr-10 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors appearance-none cursor-pointer">
                  <option value="GH">🇬🇭 Ghana</option>
                  <option value="US">🇺🇸 United States</option>
                  <option value="GB">🇬🇧 United Kingdom</option>
                  <option value="NG">🇳🇬 Nigeria</option>
                  <option value="KE">🇰🇪 Kenya</option>
                  <option value="ZA">🇿🇦 South Africa</option>
                  <option value="CA">🇨🇦 Canada</option>
                  <option value="DE">🇩🇪 Germany</option>
                  <option value="FR">🇫🇷 France</option>
                  <option value="IN">🇮🇳 India</option>
                </select>
                <svg
                  className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#5B616E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="submit"
                className="w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors bg-[#0052FF] hover:bg-[#1a5cff] active:bg-[#0041cc] text-white cursor-pointer"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={onBack}
                className="w-full text-center text-[0.875rem] text-[#0052FF] hover:underline font-medium py-2"
              >
                Go back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step6;
