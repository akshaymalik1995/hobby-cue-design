import React from "react";
import QuotesIcon from "../icons/QuotesIcon";
import Image from "next/image";
import Player from "./Player";

export default function Testimonial() {
  return (
    <div className="">
      <div className="container py-24 px-4 flex justify-center items-center mx-auto">
        <div className="rounded-md max-w-[1240px] mx-auto flex flex-col gap-8 px-10 py-8 bg-[#F7F5F9] ">
          <div className="flex gap-6">
            <div>
              <QuotesIcon />
            </div>
            <div className="font-semibold text-[24px] leading-[36px]">
              Testimonials
            </div>
          </div>
          <div className="font-light tracking-[2%] text-darkerGray leading-[30px] text-[18px] ">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className="flex flex-col-reverse gap-10 xl:flex-row justify-between">
            <Player />
            <div className="flex gap-5 items-center">
              <Image
                className="rounded-full"
                width={100}
                height={100}
                alt="dancer"
                src="/dancer.png"
              />
              <div className="flex flex-col">
                <div className="font-semibold text-purple tracking-[2%] text-[18px] leading-[27px] ">
                  Shubha Nagarajan
                </div>
                <div className="font-normal tracking-[2%] text-[14px] leading-[21px] ">
                  Classical Dancer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
