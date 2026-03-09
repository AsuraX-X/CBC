import React from "react";

function Step1({ onNext, onBack }) {
  return (
    <div className="min-h-screen bg-[#0A0B0D] flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md mx-auto">
        <button
          onClick={onBack}
          className="absolute top-6 right-6 text-3xl text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        <h1 className="text-3xl font-bold text-white mb-10 mt-8 text-center">
          What kind of account are you creating?
        </h1>
        <div className="flex flex-col gap-6">
          <button
            onClick={onNext}
            className="flex items-center gap-4 w-full p-6 rounded-xl border border-[#23262B] bg-[#16181C] hover:border-[#0052FF] transition-colors text-left"
          >
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect
                  x="6"
                  y="24"
                  width="28"
                  height="10"
                  rx="2"
                  fill="#23262B"
                />
                <circle cx="20" cy="16" r="8" fill="#0052FF" />
                <rect
                  x="14"
                  y="28"
                  width="12"
                  height="6"
                  rx="3"
                  fill="#23262B"
                />
                <rect
                  x="10"
                  y="34"
                  width="20"
                  height="2"
                  rx="1"
                  fill="#23262B"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-lg mb-1">Personal</div>
              <div className="text-[#8A919E] text-base">
                Trade crypto as an individual.
              </div>
            </div>
          </button>

          <button
            onClick={onNext}
            className="flex items-center gap-4 w-full p-6 rounded-xl border border-[#23262B] bg-[#16181C] hover:border-[#0052FF] transition-colors text-left"
          >
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="14" cy="18" r="6" fill="#5B616E" />
                <circle cx="26" cy="18" r="6" fill="#0052FF" />
                <rect
                  x="10"
                  y="28"
                  width="20"
                  height="8"
                  rx="4"
                  fill="#23262B"
                />
                <circle cx="26" cy="18" r="3" fill="#FFD600" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-lg mb-1">Business</div>
              <div className="text-[#8A919E] text-base">
                Manage teams and portfolios, accept crypto payments, access
                APIs, and more
              </div>
            </div>
          </button>

          <button
            onClick={onNext}
            className="flex items-center gap-4 w-full p-6 rounded-xl border border-[#23262B] bg-[#16181C] hover:border-[#0052FF] transition-colors text-left"
          >
            <div>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect
                  x="8"
                  y="28"
                  width="24"
                  height="6"
                  rx="3"
                  fill="#23262B"
                />
                <rect
                  x="12"
                  y="12"
                  width="16"
                  height="12"
                  rx="2"
                  fill="#0052FF"
                />
                <rect x="16" y="16" width="8" height="4" rx="1" fill="#fff" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-white text-lg mb-1">Developer</div>
              <div className="text-[#8A919E] text-base">
                Build onchain using developer tooling.
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step1;
