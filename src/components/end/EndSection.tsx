import React from "react";
import Vector1 from "./Vector1";
import Vector2 from "./Vector2";

export default function EndSection() {
  return (
    <div className="h-[662px]">
      <div className="container flex justify-center items-center h-full bg-[#F7FDFF] mx-auto ">
        <div className="w-[1240px]  py-6 px-12 flex-col flex gap-28 ">
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
            <Vector1 />
            <Vector2 />
          </div>
        </div>
      </div>
    </div>
  );
}
