import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Step4({ onNext }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="bg-[#0a0b0d] flex flex-col h-screen">
      <div className="sm:px-8 px-4 py-4">
        <NavLink to={"/"}>
          <img
            className="size-8 brightness-0 invert"
            src="/assets/common/logo.svg"
            alt=""
          />
        </NavLink>
      </div>
      <div className="flex-1 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-110">
          <div className="relative w-14 h-14 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#F7931A] absolute top-0 left-1"></div>
            <svg
              className="absolute bottom-0 left-0"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="#5B616E"
            >
              <polygon points="12 2 2 22 22 22"></polygon>
            </svg>
            <div className="w-5 h-5 rounded-full bg-[#0052FF] absolute bottom-0 right-2 border-2 border-[#0A0B0D]"></div>
          </div>
          <h1 className="text-[1.75rem] font-bold text-white mb-2">
            Complete account setup
          </h1>
          <p className="text-[0.9375rem] text-[#8A919E] mb-8 leading-6">
            <a href="#" className="text-[#0052FF] underline">
              Regulations
            </a>{" "}
            requires us to collect and verify your information
          </p>
          <div className="flex flex-col gap-0 mb-8">
            {/* Step 1 — complete */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full bg-[#00A87A] flex items-center justify-center shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="w-px h-10 bg-[#2C2F36]"></div>
              </div>
              <div className="pb-6">
                <p className="text-[0.9375rem] text-[#5B616E] font-semibold leading-5">
                  Create your account
                </p>
                <p className="text-[0.8125rem] text-[#5B616E] mt-0.5">
                  Add a password and secure your account
                </p>
                <p className="text-[0.8125rem] text-[#00A87A] font-medium mt-1">
                  Complete
                </p>
              </div>
            </div>

            {/* Step 2 — active */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full border-2 border-[#0052FF] flex items-center justify-center shrink-0">
                  <span className="text-[0.75rem] font-bold text-[#0052FF]">
                    2
                  </span>
                </div>
                <div className="w-px h-10 bg-[#2C2F36]"></div>
              </div>
              <div className="pb-6">
                <p className="text-[0.9375rem] text-white font-semibold leading-5">
                  About you
                </p>
                <p className="text-[0.8125rem] text-[#8A919E] mt-0.5">
                  Add your personal information
                </p>
                <p className="text-[0.8125rem] text-[#F7931A] font-medium mt-1 flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Approx. 2 min
                </p>
              </div>
            </div>

            {/* Step 3 — pending */}
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="w-7 h-7 rounded-full border border-[#2C2F36] flex items-center justify-center shrink-0">
                  <span className="text-[0.75rem] font-semibold text-[#5B616E]">
                    3
                  </span>
                </div>
              </div>
              <div>
                <p className="text-[0.9375rem] text-[#5B616E] font-semibold leading-5">
                  Verify your identity
                </p>
                <p className="text-[0.8125rem] text-[#5B616E] mt-0.5">
                  Upload and verify your identity documents
                </p>
                <p className="text-[0.8125rem] text-[#F7931A] font-medium mt-1 flex items-center gap-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Approx. 5 min
                </p>
              </div>
            </div>
          </div>

          <label className="flex items-start gap-3 mb-6 cursor-pointer">
            <input
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-[#2C2F36] bg-[#1E2025] accent-[#0052FF] cursor-pointer"
              type="checkbox"
            />
            <span className="text-[0.8125rem] text-[#8A919E] leading-5">
              I certify that I am 18 years of age or older, I agree to the{" "}
              <a href="#" className="underline text-white hover:text-[#0052FF]">
                User Agreement
              </a>
              .
            </span>
          </label>

          <button
            onClick={onNext}
            disabled={!agreed}
            className={`w-full py-3 rounded-full font-semibold text-lg transition ${
              agreed
                ? "bg-[#0052FF] hover:bg-[#1a5cff] text-white cursor-pointer"
                : "bg-[#1E2025] text-[#5B616E] cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step4;
