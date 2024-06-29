import React from "react";
import Facebook from "../icons/Facebook";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";
import {
  FaGooglePlusG,
  FaPinterestP,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="">
      <div className="container py-12 max-w-[1280px] md:py-24 px-4 mx-auto">
        <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-14 justify-between">
          <div>
            <div className="font-bold text-[#08090A] mb-4 text-sm">
              Hobbycue
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                About Us
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Our Service
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Work with Us
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">FAQ</div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Contact Us
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-[#08090A] mb-4 text-sm">
              How Do I
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                About Us
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Our Service
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Work with Us
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">FAQ</div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Contact Us
              </div>
            </div>
          </div>
          <div>
            <div className="font-bold text-[#08090A] mb-4 text-sm">
              Quick Links
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                About Us
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Our Service
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Work with Us
              </div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">FAQ</div>
              <div className="text-sm text-[#08090A] tracking-[0.5%]">
                Contact Us
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <div className="font-bold text-[#08090A] mb-4 text-sm">
                Social Media
              </div>
              <div className="flex flex-wrap gap-4">
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FiFacebook />
                </div>
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FiTwitter />
                </div>
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FiInstagram />
                </div>
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FaPinterestP />
                </div>
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FaGooglePlusG />
                </div>
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FaYoutube />
                </div>
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FaTelegram />
                </div>
                <div className="w-6 h-6 text-sm text-[#6D747A] flex justify-center items-center bg-lighterGray rounded-full">
                  <FaMessage />
                </div>
              </div>
            </div>

            <div>
              <div className="font-bold text-[#08090A] mb-4 text-sm">
                Invite Friends
              </div>
              <div className="h-[40px] flex w-full">
                <input
                  className="outline-0 text-xs grow  p-[12px] border-[1px] border-[#EBEDF0] border-r-0 rounded-l-lg "
                  type="text"
                  placeholder="Email ID"
                />
                <button className="flex rounded-r-lg text-xs w-[59px] tracking-[0.5%] justify-center items-center text-white bg-purple h-full ">
                  Invite
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F5F9] text-sm font-medium flex justify-center items-center h-[78px]">
        © Purple Cues Private Limited
      </div>
    </div>
  );
}
