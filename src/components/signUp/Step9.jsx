import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Step9({ onDone }) {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown <= 0) {
      onDone();
      return;
    }
    const id = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown, onDone]);

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
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-28 h-28 rounded-full bg-[#0052FF] flex items-center justify-center mb-8 animate-pulse">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <rect
              x="12"
              y="6"
              width="24"
              height="32"
              rx="2"
              fill="white"
              fillOpacity="0.9"
            />
            <line
              x1="16"
              y1="14"
              x2="32"
              y2="14"
              stroke="#0052FF"
              strokeWidth="1.5"
            />
            <line
              x1="16"
              y1="18"
              x2="32"
              y2="18"
              stroke="#0052FF"
              strokeWidth="1.5"
            />
            <line
              x1="16"
              y1="22"
              x2="32"
              y2="22"
              stroke="#0052FF"
              strokeWidth="1.5"
            />
            <line
              x1="16"
              y1="26"
              x2="28"
              y2="26"
              stroke="#0052FF"
              strokeWidth="1.5"
            />
            <circle cx="18" cy="32" r="1.5" fill="#0052FF" />
            <circle cx="22" cy="32" r="1.5" fill="#0052FF" />
            <circle cx="26" cy="32" r="1.5" fill="#0052FF" />
          </svg>
        </div>

        <h1 className="text-[1.75rem] font-bold text-white mb-3">
          Verifying your identity
        </h1>
        <p className="text-[0.9375rem] text-[#8A919E] mb-8">
          This should only take a minute.
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-xs h-1 bg-[#1E2025] rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[#0052FF] rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${((3 - countdown) / 3) * 100}%` }}
          />
        </div>

        <p className="text-[0.8125rem] text-[#5B616E]">
          Redirecting in {countdown}…
        </p>
      </div>
    </div>
  );
}

export default Step9;
