import {
  ArrowRightLeft,
  BadgeDollarSign,
  BadgePercent,
  BarChart3,
  BookOpen,
  Briefcase,
  Building2,
  ChartCandlestick,
  CircleDollarSign,
  Code2,
  CreditCard,
  Crown,
  Globe2,
  GraduationCap,
  HeadphonesIcon,
  Landmark,
  LayoutGrid,
  Link,
  ListPlus,
  Lock,
  Menu,
  MessageSquare,
  Rocket,
  Search,
  Shield,
  Smartphone,
  Store,
  Timer,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MainHeader() {
  const navItems = [
    { name: "Cryptocurrencies", link: "/explore" },
    {
      name: "Individuals",
      upsell: {
        image: "src/assets/common/navigation-upsell.png",
        title: "System Update 2025",
        subtitle:
          "System Update 2025The next chapter of Coinbase. Live on X 12/17.",
        link: "Learn more",
      },
      entries: [
        {
          title: "Buy and sell",
          desc: "Buy, sell, and use crypto",
          icon: <ArrowRightLeft size={20} />,
        },
        {
          title: "Advanced",
          desc: "Professional-grade trading tools",
          icon: <ChartCandlestick size={20} />,
        },
        {
          title: "Base App",
          desc: "Post, earn, trade, and chat, all in one place",
          icon: <Smartphone size={20} />,
        },
        {
          title: "Earn",
          desc: "Stake your crypto and earn rewards",
          icon: <BadgePercent size={20} />,
        },
        {
          title: "Coinbase One",
          desc: "Get zero trading fees and more",
          icon: <Crown size={20} />,
        },
        {
          title: "Coinbase Wealth",
          desc: "Institutional-grade services for UHNW",
          icon: <TrendingUp size={20} />,
        },
        {
          title: "Private Client",
          desc: "For trusts, family offices, UHNWIs",
          icon: <Briefcase size={20} />,
        },
        {
          title: "Credit Card",
          desc: "Earn up to 4% bitcoin back",
          icon: <CreditCard size={20} />,
        },
        {
          title: "Onchain",
          desc: "Dive into the world of onchain apps",
          icon: <Link size={20} />,
        },
        {
          title: "Debit Card",
          desc: "Spend crypto, get crypto back",
          icon: <BadgeDollarSign size={20} />,
        },
        {
          title: "Learn",
          desc: "Crypto tips and guides",
          icon: <GraduationCap size={20} />,
          link: "/learn",
        },
      ],
    },

    {
      name: "Businesses",
      upsell: {
        image: "src/assets/common/onchain_payment_protocol.png",
        title: "Commerce Payments Protocol",
        subtitle: "A new standard for onchain payments.",
        link: "Go to Payments",
      },
      entries: [
        {
          title: "Businesses",
          desc: "Crypto trading and payments for startups and SMBs",
          icon: <Store size={20} />,
        },
        {
          title: "Payments",
          desc: "The stablecoin payments stack for commerce platforms",
          icon: <CircleDollarSign size={20} />,
        },
        {
          title: "Asset Listings",
          desc: "List your asset on Coinbase",
          icon: <ListPlus size={20} />,
        },
        {
          title: "Token Manager",
          desc: "The platform for token distributions, vesting, and lockups",
          icon: <Timer size={20} />,
        },
      ],
    },

    {
      name: "Institutions",
      upsell: {
        image: "src/assets/common/institutions_upsell.png",
        title: "Our clients",
        subtitle: "Trusted by institutions and government.",
        link: "Learn more",
      },
      entries: [
        {
          title: "Trading and Financing",
          desc: "Professional prime brokerage services",
          icon: <BarChart3 size={20} />,
        },
        {
          title: "Custody",
          desc: "Securely store all your digital assets",
          icon: <Lock size={20} />,
        },
        {
          title: "Staking",
          desc: "Explore staking across our products",
          icon: <Zap size={20} />,
        },
        {
          title: "Onchain Wallet",
          desc: "Institutional-grade wallet to get onchain",
          icon: <Wallet size={20} />,
        },
      ],
    },

    {
      name: "Developers",
      upsell: {
        image: "src/assets/common/developers_upsell.jpg",
        title: "World class crypto infrastructure.",
        subtitle: "Discover Coinbase's complete crypto-as-a-service platform.",
        link: "Learn more",
      },
      entries: [
        {
          title: "Payments",
          desc: "Fast and global stablecoin payments with a single integration",
          icon: <CircleDollarSign size={20} />,
        },
        {
          title: "Trading",
          desc: "Launch crypto trading and custody for your users",
          icon: <ArrowRightLeft size={20} />,
        },
        {
          title: "Wallets",
          desc: "Deploy customizable and scalable wallets for your business",
          icon: <Wallet size={20} />,
        },
        {
          title: "Stablecoins",
          desc: "Access USDC and Coinbase Custom Stablecoins",
          icon: <BadgeDollarSign size={20} />,
        },
        {
          title: "Banks & Brokerages",
          desc: "Secure, regulated offerings for retail, private banking, & institutional clients",
          icon: <Landmark size={20} />,
        },
        {
          title: "Payment Firms",
          desc: "Near-instant, low-cost, global payment rails for modern providers",
          icon: <Building2 size={20} />,
        },
        {
          title: "Startups",
          desc: "Launch your business with the world's leader in crypto",
          icon: <Rocket size={20} />,
        },
      ],
    },

    {
      name: "Company",
      upsell: {
        image: "src/assets/common/company_upsell.png",
        title: "Learn all about Coinbase:",
        subtitle: "We're building the open financial system.",
        link: "Create your account",
      },
      entries: [
        {
          title: "About",
          desc: "Powering the crypto economy",
          icon: <LayoutGrid size={20} />,
        },
        {
          title: "Careers",
          desc: "Work with us",
          icon: <Users size={20} />,
        },
        {
          title: "Affiliates",
          desc: "Help introduce the world to crypto",
          icon: <Globe2 size={20} />,
        },
        {
          title: "Support",
          desc: "Find answers to your questions",
          icon: <HeadphonesIcon size={20} />,
        },
        {
          title: "Blog",
          desc: "Read the latest from Coinbase",
          icon: <MessageSquare size={20} />,
        },
        {
          title: "Security",
          desc: "The most trusted & secure",
          icon: <Shield size={20} />,
        },
      ],
    },
  ];

  const [isOpen, setIsOpen] = useState(null);

  return (
    <header className="sticky top-0 bg-white z-10 border-b border-b-black/20">
      <div className="flex px-4 xl:px-8 py-3 items-center justify-between gap-4 relative">
        <div className="size-10">
          <img
            src="src/assets/common/logo.svg"
            alt="Logo"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="xl:flex hidden flex-1">
          <nav className="flex gap-1 font-bold">
            {navItems.map((item, i) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => i > 0 && setIsOpen(item)}
                onMouseLeave={() => setIsOpen(null)}
              >
                <NavLink to={item.link ?? "#"}>
                  <button className="btn-secondary-c text-base hover:bg-[#f8f8f8] bg-transparent">
                    {item.name}
                  </button>
                </NavLink>

                {isOpen?.name === item.name && item.entries && (
                  <>
                    {/* invisible bridge so the mouse can travel from button to panel */}
                    <div className="absolute left-0 top-full h-2 w-full" />
                    <div
                      className="fixed max-h-3/4 overflow-scroll left-0 w-screen border-t border-t-black/20 bg-white shadow-lg"
                      style={{ top: "calc(var(--header-h, 57px))" }}
                    >
                      <div className="w-full px-4 sm:px-8 pt-12 pb-8 grid grid-cols-2">
                        <div className="grid gap-4 grid-cols-2">
                          {item.entries.map((entry, j) => (
                            <NavLink key={j} to={entry.link ?? "#"}>
                              <div className="btn-secondary flex items-start gap-3 text-base bg-transparent cursor-pointer hover:bg-[#f7f8f9] rounded-xl">
                                <div className="p-2 rounded-xl bg-[#f7f8f9] text-black/70 shrink-0">
                                  {entry.icon}
                                </div>
                                <div>
                                  <h1 className="font-bold">{entry.title}</h1>
                                  <p className="text-black/60 font-normal">
                                    {entry.desc}
                                  </p>
                                </div>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                        <div className="flex group hover:bg-[#f8f8f8] h-fit py-6 rounded-3xl gap-6 items-start px-8 text-2xl">
                          <div>
                            <img
                              className="rounded-2xl w-full min-w-40 max-w-40 min-h-30 h-full object-cover"
                              src={item.upsell.image}
                              alt={item.upsell.title}
                            />
                          </div>
                          <div>
                            <p className="group-hover:underline">
                              {item.upsell.title}
                            </p>
                            <p className="text-black/60 group-hover:underline">
                              {item.upsell.subtitle}
                            </p>
                            <p className="text-xl font-medium underline">
                              {item.upsell.link}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex gap-2 items-center">
          <button className="btn-secondary p-2">
            <Search />
          </button>
          <button className="btn-secondary lg:block hidden p-2">
            <Globe2 />
          </button>
          <NavLink to={"/signIn"}>
            <button className="btn-secondary text-base lg:block hidden">
              Sign in
            </button>
          </NavLink>
          <NavLink to={"/signUp"}>
            <button className="btn-primary text-base">Sign Up</button>
          </NavLink>
          <button className="btn-secondary xl:hidden block p-2">
            <Menu />
          </button>
        </div>
      </div>
    </header>
  );
}
