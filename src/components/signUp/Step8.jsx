import React from "react";
import { NavLink } from "react-router-dom";

function Step8({ onNext, onBack }) {
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
          <div className="text-center">
            <h1 className="text-[1.75rem] font-bold text-white mb-2">
              Upload images
            </h1>
            <p className="text-[0.9375rem] text-[#8A919E] mb-6 leading-6">
              Upload pictures of your photo id (JPEG or PNG).
            </p>
          </div>
          <div className="flex gap-4 mb-2">
            <label className="flex-1 flex flex-col items-center justify-center gap-2 py-8 rounded-xl border border-dashed border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors cursor-pointer">
              <img
                alt="ID front"
                className="w-12 h-12 opacity-60"
                src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/dark/identityCard-3.svg"
              />
              <span className="text-[0.8125rem] text-[#5B616E]">
                Drag &amp; drop or click to upload
              </span>
              <input
                accept="image/jpeg,image/png"
                className="hidden"
                type="file"
              />
            </label>
            <label className="flex-1 flex flex-col items-center justify-center gap-2 py-8 rounded-xl border border-dashed border-[#2C2F36] bg-[#1E2025] hover:bg-[#2C2F36] transition-colors cursor-pointer">
              <img
                alt="ID back"
                className="w-12 h-12 opacity-60"
                src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/dark/identityCard-3.svg"
              />
              <span className="text-[0.8125rem] text-[#5B616E]">
                Drag &amp; drop or click to upload
              </span>
              <input
                accept="image/jpeg,image/png"
                className="hidden"
                type="file"
              />
            </label>
          </div>
          <div className="flex gap-4 mb-6">
            <p className="flex-1 text-center text-[0.875rem] text-white font-medium">
              Front
            </p>
            <p className="flex-1 text-center text-[0.875rem] text-white font-medium">
              Back
            </p>
          </div>
          <p className="text-[0.8125rem] text-[#8A919E] text-center leading-5 mb-6">
            Please do not redact, watermark or otherwise obscure any part of
            your ID. This will help ensure we can verify your identity document
            as quickly and accurately as possible.
          </p>
          <button
            type="button"
            onClick={onNext}
            className="w-full h-14 rounded-full font-semibold text-[0.9375rem] transition-colors bg-[#0052FF] hover:bg-[#1a5cff] active:bg-[#0041cc] text-white cursor-pointer"
          >
            Upload
          </button>
          <button
            type="button"
            onClick={onBack}
            className="w-full mt-4 text-center text-[0.875rem] text-[#0052FF] hover:underline font-medium"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Step8;
