import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import BottomCard from "./BottomCard";
import { TiHeadphones } from "react-icons/ti";
import { TbDeviceNintendo } from "react-icons/tb";
function HomeBottom() {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="text-center">
        <p className="text-5xl  font-bold text-[#282871]">
          Trading tools we provide
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 ">
        <BottomCard
          icon={<BsSearch color="white" size={20} />}
          title={"Private Discord"}
          desc={
            "Gain access to our private Discord server where we give daily alerts"
          }
        />
        <BottomCard
          icon={<TiHeadphones color="white" size={20} />}
          title={"Daily Watchlists"}
          desc={
            "Every morning we send a pre-market watchlist of the stocks we're eying up for the day"
          }
        />
        <BottomCard
          icon={<TbDeviceNintendo color="white" size={20} />}
          title={"Pre-Market Zoom"}
          desc={
            "Join our weekly pre-market Zoom to see how Jake accesses the market and finds his targets for the day."
          }
        />
      </div>
    </div>
  );
}

export default HomeBottom;
