import React from "react";
import Image from "next/image";

export default function EndSection() {
  return (
    <div className=" bg-[#F7FDFF]">
      <div className="container py-24 flex justify-center items-center h-full  mx-auto ">
        <div className="w-[1240px] px-4  py-6  flex-col flex gap-28 ">
          <div className=" space-y-6">
            <div className="italic text-4xl leading-[54px] ">
              Your <span className="text-purple">Hobby</span>, Your
              <span className="text-[#0096C8]"> Community...</span>
            </div>
            <button className="px-4 inline bg-purple rounded-md font-semibold text-xl text-white py-2">
              Get Started
            </button>
          </div>
          <div className="flex justify-between">
            <Image
              alt="Group vector"
              src="/vector-2.png"
              width={1240}
              height={302}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
