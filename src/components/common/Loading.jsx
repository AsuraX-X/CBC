import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A0B0D] flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="animate-[coinbase-pulse_1.6s_ease-in-out_infinite]">
          <img
            alt="Coinbase"
            height="36"
            style={{ height: "36px", width: "auto", display: "block" }}
            className="brightness-0 invert"
            src="https://static-assets.coinbase.com/ui-infra/illustration/v1/pictogram/svg/light/coinbaseLogoNavigation-4.svg"
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
