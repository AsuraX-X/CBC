import React from "react";
import { NavLink } from "react-router-dom";

function Step7({ onNext, onBack }) {
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
          <h1 className="text-[1.75rem] font-bold text-white mb-6">
            Select your ID type
          </h1>
          <div className="flex flex-col gap-3 mb-6">
            <button
              onClick={onNext}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors text-left"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="#0052FF"
                  strokeWidth="2"
                />
                <circle cx="9" cy="10" r="2" fill="#0052FF" />
                <path
                  d="M5 16c0-2 1.8-3 4-3s4 1 4 3"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="9"
                  x2="19"
                  y2="9"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="12"
                  x2="19"
                  y2="12"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="15"
                  x2="17"
                  y2="15"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-[0.9375rem] font-semibold text-white">
                  Driver's license
                </p>
                <p className="text-[0.8125rem] text-[#5B616E]">Recommended</p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B616E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button
              onClick={onNext}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors text-left"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="#0052FF"
                  strokeWidth="2"
                />
                <circle cx="9" cy="10" r="2" fill="#0052FF" />
                <path
                  d="M5 16c0-2 1.8-3 4-3s4 1 4 3"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="9"
                  x2="19"
                  y2="9"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="12"
                  x2="19"
                  y2="12"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="15"
                  x2="17"
                  y2="15"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-[0.9375rem] font-semibold text-white">
                  Identity card
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B616E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button
              onClick={onNext}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-xl border border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors text-left"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="shrink-0"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="16"
                  rx="2"
                  stroke="#0052FF"
                  strokeWidth="2"
                />
                <circle cx="9" cy="10" r="2" fill="#0052FF" />
                <path
                  d="M5 16c0-2 1.8-3 4-3s4 1 4 3"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="9"
                  x2="19"
                  y2="9"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="12"
                  x2="19"
                  y2="12"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="15"
                  y1="15"
                  x2="17"
                  y2="15"
                  stroke="#0052FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex-1 min-w-0">
                <p className="text-[0.9375rem] font-semibold text-white">
                  Passport
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5B616E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          <div className="rounded-xl border border-[#2C2F36] bg-[#1E2025] p-4 mb-6">
            <p className="text-[0.8125rem] text-[#5B616E] leading-5">
              By selecting your ID type on this screen, you agree that our (and
              our service providers) collection, use, and storage of your
              biometric information for identity verification. Learn more in
              Section 5 of our{" "}
              <a href="#" className="text-[#0052FF] hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <button
            onClick={onBack}
            className="w-full h-14 rounded-full bg-[#2C2F36] hover:bg-[#3A3D44] text-white font-semibold text-[0.9375rem] transition-colors cursor-pointer"
          >
            I don't have any of these IDs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step7;
