import React from "react";
import LinkSection from "./LinkSection";
import { Globe } from "lucide-react";

const links = [
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Affiliates",
      "Blog",
      "Press",
      "Security",
      "Investors",
      "Vendors",
      "Legal & privacy",
      "Cookie policy",
      "Cookie preferences",
      "Digital Asset Disclosures",
    ],
  },
  {
    title: "Learn",
    links: [
      "Market statistics",
      "Coinbase Bytes newsletter",
      "Crypto basics",
      "Tips & tutorials",
      "Crypto glossary",
      "Market updates",
      "What is Bitcoin?",
      "What is crypto?",
      "What is a blockchain?",
      "How to set up a crypto wallet?",
      "How to send crypto?",
      "Taxes",
    ],
  },
  {
    title: "Individuals",
    links: [
      "Buy & sell",
      "Earn free crypto",
      "Base App",
      "Coinbase One",
      "Debit Card",
    ],
  },
  {
    title: "Businesses",
    links: [
      "Asset Listings",
      "Coinbase Business",
      "Payments",
      "Commerce",
      "Token Manager",
    ],
  },
  {
    title: "Institutions",
    links: [
      "Prime",
      "Staking",
      "Exchange",
      "International Exchange",
      "Derivatives Exchange",
      "Verified Pools",
    ],
  },
  {
    title: "Developers",
    links: [
      "Developer Platform",
      "Base",
      "Server Wallets",
      "Embedded Wallets",
      "Base Accounts (Smart Wallets)",
      "Onramp & Offramp",
      "x402",
      "Trade API",
      "Paymaster",
      "OnchainKit",
      "Data API",
      "Verifications",
      "Node",
      "AgentKit",
      "Staking",
      "Faucet",
      "Exchange API",
      "International Exchange API",
      "Prime API",
      "Derivatives API",
    ],
  },
  {
    title: "Support",
    links: [
      "Help center",
      "Contact us",
      "Create account",
      "ID verification",
      "Account information",
      "Payment methods",
      "Account access",
      "Supported crypto",
      "Status",
    ],
  },
  {
    title: "Asset prices",
    links: ["Bitcoin price", "Ethereum price", "Solana price", "XRP price"],
  },
  {
    title: "Stock prices",
    links: ["NVIDIA price", "Apple price", "Microsoft price", "Amazon price"],
  },
];

function Footer() {
  return (
    <div className="px-4 sm:px-8 py-8 sm:py-12 lg:py-18 space-y-8 bg-[#eef0f3]">
      <div className="grid gap-6 sm:gap-8 lg:gap-16 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
        <div>
          <div className="size-12">
            <img src="/assets/common/logo.svg" alt="logo" />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {links.map(
            (link, i) =>
              i < 2 && (
                <LinkSection
                  key={link.title}
                  title={link.title}
                  links={link.links}
                />
              ),
          )}
        </div>
        <div className="space-y-4 sm:space-y-6">
          {links.map(
            (link, i) =>
              i > 1 &&
              i < 5 && (
                <LinkSection
                  key={link.title}
                  title={link.title}
                  links={link.links}
                />
              ),
          )}
        </div>
        <div className="space-y-4 sm:space-y-6">
          {links.map(
            (link, i) =>
              i > 4 &&
              i < 6 && (
                <LinkSection
                  key={link.title}
                  title={link.title}
                  links={link.links}
                />
              ),
          )}
        </div>
        <div className="space-y-4 sm:space-y-6">
          {links.map(
            (link, i) =>
              i > 5 && (
                <LinkSection
                  key={link.title}
                  title={link.title}
                  links={link.links}
                />
              ),
          )}
        </div>
      </div>
      <div className="flex gap-12">
        <img
          loading="lazy"
          src="https://static-assets.coinbase.com/marketing/cdx/x-light.svg"
          alt="X logo"
          width="16"
          height="16"
        />
        <img
          loading="lazy"
          src="https://static-assets.coinbase.com/marketing/cdx/linkedin-light.svg"
          alt="LinkedIn logo"
          width="16"
          height="16"
        />
        <img
          loading="lazy"
          src="https://static-assets.coinbase.com/marketing/cdx/instagram-light.svg"
          alt="Instagram logo"
          width="16"
          height="16"
        />
        <img
          loading="lazy"
          src="https://static-assets.coinbase.com/marketing/cdx/tiktok-light.svg"
          alt="Tiktok logo"
          width="16"
          height="16"
        />
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-6 sm:pt-8 border-t border-t-black/10 text-sm sm:text-base">
        <p>
          © 2026 Coinbase{" "}
          <span className="text-black/60">• Privacy • Terms & Conditions</span>
        </p>
        <p className="text-black/60 flex items-center gap-1">
          <Globe size={16} /> Global • English
        </p>
      </div>
    </div>
  );
}

export default Footer;
