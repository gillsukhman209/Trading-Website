import Image from "next/image";
import { FcMenu } from "react-icons/fc";
function Nav() {
  return (
    <div className="w-full h-20 shadow-lg">
      <div className="max-w-[95%] lg:max-w-[70%] h-20 m-auto flex justify-between items-center">
        <div>
          <Image
            src="/../public/assets/logo.png"
            width={200}
            height={20}
            className="p-5"
          />
        </div>
        <div>
          <ul className="text-black  gap-14 hidden md:flex">
            <li>Home</li>
            <li>Mastermind</li>
            <li>Membership</li>
            <li>Testimonials</li>
            <li>Cart (0)</li>
          </ul>

          <div className="flex md:hidden">
            <FcMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}
90;

export default Nav;
