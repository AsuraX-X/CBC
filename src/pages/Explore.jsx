import React from "react";
import Search from "../components/explore/Search";
import MarketStats from "../components/explore/MarketStats";
import MarketPrices from "../components/explore/MarketPrices";
import Create from "../components/explore/Create";
import GetStarted from "../components/explore/GetStarted";
import TopMovers from "../components/explore/TopMovers";
import New from "../components/explore/New";
import MainHeader from "../components/common/Header";
import Footer from "../components/common/Footer";

function Explore() {
  return (
    <div>
      <MainHeader />
      <div className="flex divide-x divide-black/20 sm:flex-row flex-col">
        <div className="flex-1 min-w-0">
          <Search />
          <MarketStats />
          <MarketPrices />
          <Create />
        </div>
        <div className="w-97.75 shrink-0">
          <div className=" p-8 border-b border-b-black/20">
            <GetStarted />
          </div>
          <div>
            <TopMovers />
          </div>
          <div>
            <New />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
