import Image from "next/image";
function HomeTop() {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="">
            <div className="">
              <p className="flex lg:hidden text-5xl lg:text-7xl font-bold text-[#282871]">
                Join the fastest <br />
                growing trading community.
              </p>
              <p className="hidden lg:flex text-5xl lg:text-7xl font-bold text-[#282871]">
                Join the fastest growing <br />
                trading community.
              </p>
            </div>
            <div className="mt-4 font-light">
              <p className="text-[#8281A9] text-lg">
                Becoming a consistently profitable trader is not an easy task.
                At RakeTrades, we provide all the education and information
                needed for you to find high quality trade setups both intraday
                and long term.
              </p>
            </div>

            <div className="flex flex-col gap-5 text-white text-md font-semibold mt-14 justify-center">
              <div className="bg-blue-700 w-[60%] lg:w-[200px] h-20 rounded-full flex items-center justify-center ">
                Membership Details
              </div>
              <div className="bg-blue-700 w-[60%]  lg:w-[200px] h-20 rounded-full flex items-center justify-center ">
                Upcoming Mastermind
              </div>
            </div>
          </div>

          <div className="mt-20 lg:mt-0 w-full flex items-center justify-start ">
            <Image src="/../public/assets/hometop.png" width={500} height={0} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTop;
