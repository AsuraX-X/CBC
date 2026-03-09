import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

function Step3({ onNext, email }) {
  const [digits, setDigits] = useState(Array(6).fill(""));
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef([]);

  // Countdown timer for resend
  useEffect(() => {
    if (countdown <= 0) return;
    const id = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(id);
  }, [countdown]);

  // Auto-advance when all 6 digits are filled
  useEffect(() => {
    if (digits.every((d) => d !== "")) {
      onNext();
    }
  }, [digits, onNext]);

  function handleChange(e, index) {
    const val = e.target.value.replace(/\D/g, "").slice(-1);
    const next = [...digits];
    next[index] = val;
    setDigits(next);
    if (val && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace") {
      if (digits[index]) {
        const next = [...digits];
        next[index] = "";
        setDigits(next);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  }

  function handlePaste(e) {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;
    const next = Array(6).fill("");
    pasted.split("").forEach((char, i) => (next[i] = char));
    setDigits(next);
    const focusIndex = Math.min(pasted.length, 5);
    inputRefs.current[focusIndex]?.focus();
  }

  function handleResend() {
    if (countdown > 0) return;
    setCountdown(30);
    setDigits(Array(6).fill(""));
    inputRefs.current[0]?.focus();
  }

  const allFilled = digits.every((d) => d !== "");

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
          <h1 className="text-[1.75rem] font-bold text-white mb-2">
            Enter the code we emailed you
          </h1>
          <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
            Check your email{" "}
            <span className="font-semibold text-white">{email}</span>. This
            helps us keep your account secure by verifying that it's really you.
          </p>
          <p className="text-[0.875rem] font-semibold text-white mb-3">
            Enter 6-digit code
          </p>
          <div
            className="flex items-center justify-center gap-3 mb-6"
            onPaste={handlePaste}
          >
            {digits.map((digit, i) => (
              <input
                key={i}
                ref={(el) => (inputRefs.current[i] = el)}
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className="w-12 h-14 text-center text-xl font-semibold rounded-xl border bg-[#1E2025] text-white outline-none transition-colors border-[#2C2F36] focus:border-[#0052FF]"
                type="text"
              />
            ))}
          </div>

          <button
            disabled={countdown > 0}
            onClick={handleResend}
            className={`w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors mb-6 ${
              countdown > 0
                ? "bg-[#1E2025] text-[#5B616E] cursor-not-allowed"
                : "bg-[#1E2025] hover:bg-[#2C2F36] text-white cursor-pointer"
            }`}
          >
            {countdown > 0 ? `Resend code in ${countdown}` : "Resend code"}
          </button>

          <button
            onClick={onNext}
            disabled={!allFilled}
            className={`w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors mb-4 ${
              allFilled
                ? "bg-[#0052FF] hover:bg-[#1a5cff] active:bg-[#0041cc] text-white cursor-pointer"
                : "bg-[#1E2025] text-[#5B616E] cursor-not-allowed"
            }`}
          >
            Verify
          </button>

          <p className="text-center text-[0.875rem] text-white">
            Can't access?{" "}
            <a href="#" className="text-[#0052FF] hover:underline font-medium">
              Update your 2FA
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step3;
