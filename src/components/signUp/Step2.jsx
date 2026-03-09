import { useState } from "react";
import { NavLink } from "react-router-dom";

function Step2({ onNext, initialEmail = "" }) {
  const [email, setEmail] = useState(initialEmail);

  function handleSubmit(e) {
    e.preventDefault();
    onNext(email);
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
      <div className="flex-1 flex items-center h-full justify-center px-4 py-10">
        <div className="w-full max-w-110">
          <form onSubmit={handleSubmit}>
            <h1 className="text-[1.75rem] font-bold text-white mb-2">
              Create your account
            </h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
              Access all that Coinbase has to offer with a single account.
            </p>
            <div className="mb-4">
              <label className="block text-[0.875rem] font-semibold text-white mb-1.5">
                Email
              </label>
              <input
                placeholder="Your email address"
                className="w-full h-14 px-4 rounded-xl bg-[#1E2025] border border-[#2C2F36] text-white placeholder:text-[#5B616E] text-[0.9375rem] outline-none focus:border-[#0052FF] transition-colors"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors bg-[#0052FF] hover:bg-[#1a5cff] active:bg-[#0041cc] text-white cursor-pointer"
            >
              Continue
            </button>
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-[#2C2F36]"></div>
              <span className="text-[0.75rem] font-semibold text-[#5B616E] tracking-wider">
                OR
              </span>
              <div className="flex-1 h-px bg-[#2C2F36]"></div>
            </div>
            <div className="flex flex-col gap-3 mb-6">
              <button
                type="button"
                onClick={onNext}
                className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="shrink-0"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign up with Google
              </button>
              <button
                type="button"
                onClick={onNext}
                className="w-full h-14 rounded-full bg-[#1E2025] hover:bg-[#2C2F36] border border-[#2C2F36] text-white font-semibold text-[0.9375rem] flex items-center justify-center gap-3 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Sign up with Apple
              </button>
            </div>
            <p className="text-center text-[0.875rem] text-[#5B616E] mb-4">
              Already have an account?{" "}
              <a
                className="text-[#0052FF] hover:underline font-medium"
                href="/signin"
              >
                Sign in
              </a>
            </p>
            <p className="text-center text-[0.75rem] text-[#5B616E] leading-5">
              By creating an account you certify that you are over the age of 18
              and agree to our{" "}
              <a
                href="#"
                className="underline hover:text-white transition-colors"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="underline hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Step2;
