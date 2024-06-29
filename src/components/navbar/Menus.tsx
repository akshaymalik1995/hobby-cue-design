import Image from "next/image";
import { BiSolidCart } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import PurpleButton from "../PurpleButton";
import { FaCompass } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Polygon from "../icons/Polygon";
import { GoStarFill } from "react-icons/go";

export default function Menus() {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex items-center gap-2">
        <FaCompass className="text-2xl text-purple " />
        <div>Explore</div>
        <IoIosArrowDown className="text-2xl text-[#939CA3] " />
      </div>
      <div className="flex relative items-center gap-2">
        <Polygon className=" text-purple " />
        <GoStarFill className="text-xs absolute top-[6px] left-[4px] text-white " />
        <div>Hobbies</div>
        <IoIosArrowDown className="text-2xl text-[#939CA3] " />
      </div>
      <div className="h-[24px] flex justify-center items-center w-[24px]">
        <FaBookmark className="text-lg text-purple " />
      </div>
      <div className="h-[24px] flex justify-center items-center w-[24px]">
        <IoIosNotifications className="text-2xl text-purple " />
      </div>
      <div className="h-[24px] flex justify-center items-center w-[24px]">
        <BiSolidCart className="text-2xl text-purple " />
      </div>
      <PurpleButton text="Sign In" />
    </div>
  );
}
