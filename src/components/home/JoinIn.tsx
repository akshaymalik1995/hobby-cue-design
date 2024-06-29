import React from "react";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";
import Lock from "../icons/Lock";
import CrossedEyeIcon from "../icons/CrossedEyeIcon";
import OpenEye from "../icons/OpenEye";

export default function JoinIn() {
  return (
    <div className="flex flex-col">
      <div className="space-y-4">
        <button className="flex  w-full px-6 py-3 border-[1px] border-purple rounded-md ">
          <div>
            <Google />
          </div>
          <div className="grow text-center text-[14px] font-semibold ">
            Continue with Google
          </div>
        </button>
        <button className="flex w-full px-6 py-3 border-[1px] border-purple rounded-md">
          <div>
            <Facebook />
          </div>
          <div className="grow text-center  text-[14px] font-semibold">
            Continue with Google
          </div>
        </button>
      </div>

      <div className="flex my-3 items-center gap-2">
        <div className="h-[2px]  text-[12px] font-semibold grow bg-lightGray"></div>
        <div>Or connect with</div>
        <div className="h-[2px] text-[12px] font-semibold grow bg-lightGray"></div>
      </div>
      <div>
        <form className="flex flex-col" action="">
          <input
            type="text"
            className="h-[40px] mb-2 outline-0 text-[12px] focus:border-purple border-[1px] border-lighterGray rounded-md p-3"
            placeholder="Email"
          />
          <div className="h-[40px] my-2 bg-white flex border-[1px] border-lighterGray rounded-md p-3 text-[12px]">
            <input
              type="password"
              className=" outline-0 grow  "
              placeholder="Password"
            />
            <OpenEye />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <div className="h-1 w-16 bg-white"></div>
              <div className="h-1 w-16 bg-white"></div>
              <div className="h-1 w-16 bg-white"></div>
            </div>
            <div className="font-semibold text-darkGray text-[10px]">
              Password Strength
            </div>
          </div>

          <div className="text-[12px] my-2 text-darkerGray font-normal leading-[18px]  ">
            By continuing, you agree to our{" "}
            <span className="text-black">Terms of Service</span> and
            <span className="text-black"> Privacy Policy</span> .
          </div>

          <button className=" my-2 text-center bg-purple text-white text-[14px] font-semibold p-3   outline-0 rounded-md">
            Agree and Continue
          </button>
        </form>
      </div>
    </div>
  );
}
