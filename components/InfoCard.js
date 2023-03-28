import Image from "next/image";
function InfoCard({ side, title, desc, imageSrc }) {
  return (
    <div className="w-full h-[100%] lg:h-[60%] ">
      <div>
        {side == "left" ? (
          <div className="flex flex-col  md:flex-row items-center  lg:mt-0 ">
            <div>
              <Image src={`${imageSrc}`} width={500} height={0} />
            </div>
            <div className="max-w-[80%] md:max-w-[40%]  mx-auto mt-28 md:mt-0">
              <p className=" text-4xl  font-bold text-[#282871] ">{title}</p>
              <p className=" text-lg  font-bold text-[#8281A9] mt-10 ">
                {desc}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center ">
            <div className="lg:hidden">
              <div className="mt-20 lg:mt-0">
                <Image src={`${imageSrc}`} width={500} height={0} />
              </div>
              <div className="max-w-[80%] md:max-w-[40%] mx-auto mt-20 md:mt-0">
                <p className=" text-4xl  font-bold text-[#282871] ">{title}</p>
                <p className=" text-lg  font-bold text-[#8281A9] mt-10 ">
                  {desc}
                </p>
              </div>
            </div>
            <div className="hidden lg:flex">
              <div className="max-w-[80%] md:max-w-[40%] mx-auto mt-20 md:mt-0">
                <p className=" text-4xl  font-bold text-[#282871] ">{title}</p>
                <p className=" text-lg  font-bold text-[#8281A9] mt-10 ">
                  {desc}
                </p>
              </div>
              <div className="">
                <Image src={`${imageSrc}`} width={500} height={0} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default InfoCard;
