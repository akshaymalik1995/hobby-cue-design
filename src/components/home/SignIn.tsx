import React from "react";
import Google from "./icons/Google";
import Facebook from "./icons/Facebook";
import Lock from "./icons/Lock";

export default function SignIn() {
  return (
    <div className="flex flex-col gap-6">
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

      <div className="flex items-center gap-2">
        <div className="h-[2px] text-[12px] font-semibold grow bg-lightGray"></div>
        <div>Or connect with</div>
        <div className="h-[2px] text-[12px] font-semibold grow bg-lightGray"></div>
      </div>
      <div>
        <form className="flex flex-col gap-4" action="">
          <input
            type="text"
            className="h-[40px] outline-0 text-[12px] focus:border-purple border-[1px] border-lighterGray rounded-md p-3"
            placeholder="Email"
          />
          <input
            type="password"
            className="h-[40px] outline-0 text-[12px] focus:border-purple border-[1px] border-lighterGray rounded-md p-3"
            placeholder="Password"
          />

          <div className="flex justify-between">
            <label className="flex items-center gap-2">
              <input type="checkbox" name="remember" id="remember" />
              <span className="text-[12px]">Remember me</span>
            </label>
            <div className="flex gap-2">
              <Lock />
              <a href="#" className="text-[12px] ">
                Forgot Password?
              </a>
            </div>
          </div>

          <button className=" text-center text-[14px] font-semibold p-3 border-[1px] border-black outline-0 rounded-md">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
