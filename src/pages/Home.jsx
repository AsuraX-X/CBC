import Footer from "../components/common/Footer";
import MainHeader from "../components/common/Header";
import Control from "../components/home/Control";
import Hero from "../components/home/Hero";
import New from "../components/home/New";
import Stats from "../components/home/Stats";
import HomeGrid from "../components/layout/HomeGrid";

function Home() {
  return (
    <div>
      <MainHeader />
      <div className="space-y-8">
        <Hero />
        <HomeGrid
          title={"Explore crypto like Bitcoin, Ethereum, and Dogecoin."}
          subtitle={
            "Simply and securely buy, sell, and manage hundreds of cryptocurrencies."
          }
          background="bg-[#eef0f3]"
          button={"See more assets"}
          component={<Stats />}
        />
        <HomeGrid
          title={"Powerful tools, designed for the advanced trader."}
          subtitle={
            "Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets."
          }
          button={"Start trading"}
          image={"src/assets/Home/Advanced.png"}
          alternate
          compact
        />
        <HomeGrid
          title={"Zero trading fees, more rewards."}
          subtitle={
            "Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more."
          }
          button={"Claim free trial"}
          image={"src/assets/Home/zero_fees_us.png"}
          compact
        />
        <HomeGrid
          title={"Countless ways to earn crypto with the Base App."}
          subtitle={
            "An everything app to trade, create, discover, and chat, all in one place."
          }
          button={"Learn more"}
          image={"src/assets/Home/CB_LOLP__1_.png"}
          alternate
          compact
        />
        <New />
        <Control />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
