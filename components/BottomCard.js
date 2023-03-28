import { BsSearch } from "react-icons/bs";

function BottomCard({ icon, title, desc }) {
  return (
    <div className="w-full ">
      <div className="flex  gap-28  rounded-lg h-80 items-center mt-28">
        <div className="flex flex-col items-center gap-7 w-full ">
          <div className="bg-purple-500 rounded-full h-14 w-14 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <p className="text-[#282871] font-semibold text-2xl ">{title}</p>
          </div>
          <div className="">
            <p className="text-[#8281A9]  font-semibold text-md text-center p-4 ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomCard;
