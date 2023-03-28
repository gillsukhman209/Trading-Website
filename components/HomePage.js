import HomeTop from "./HomeTop";
import HomeMiddle from "./HomeMiddle";
import InfoCard from "./InfoCard";
import HomeBottom from "./HomeBottom";
function HomePage() {
  return (
    <div className="w-full h-screen mt-16 lg:mt-52">
      <div className="max-w-[95%] lg:max-w-[70%] h-screen m-auto">
        <HomeTop />
        <HomeMiddle />
        <InfoCard
          side={"left"}
          title={"Get the tools you need to become a better trader"}
          desc={
            "Our pre-market Zoom's, daily watchlists, and private chat will ensure you're equipped with the information you need to trade your best! "
          }
          imageSrc={"/../public/assets/info1.png"}
        />
        <InfoCard
          className=""
          side={"right"}
          title={"Risk management is an imperative."}
          desc={
            "The most important part of trading is protecting your capital. We emphasize the importance of implementing risk management and teach strategies to limit your downside. We also encourage Paper Trading for beginners, so they don't risk real capital."
          }
          imageSrc={"/../public/assets/info2.png"}
        />

        <InfoCard
          side={"left"}
          title={"Connect and network with a community of traders."}
          desc={
            "At RakeTrades we have the fastest growing trading community of 2022. Our group is an excellent place to meet and learn from experienced successful traders."
          }
          imageSrc={"/../public/assets/info3.png"}
        />

        <HomeBottom />
      </div>
    </div>
  );
}

export default HomePage;
