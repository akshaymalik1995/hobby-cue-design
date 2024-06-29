import React from "react";
import Vector from "./Vector";
import SignIn from "./SignIn";

export default function HomeScreen() {
  return (
    <div className="h-[678px] flex relative  items-center w-full bg-[#F7F5F9] ">
      <div className="container grid   grid-cols-2 mx-auto ">
        <div className=" flex col-span-1   flex-col gap-8 ">
          <h2 className="font-semibold tracking-[2%] italic text-4xl">
            Explore your <span className="text-[#0096C8]"> hobby </span> or
            <span className="text-purple"> passion</span>
          </h2>
          <p className="font-light text-[14px] tracking-[2%] leading-[30px] ">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="font-light text-[14px] tracking-[2%] leading-[30px]">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <Vector className="absolute w-[640px]  -bottom-2" />
        </div>
        <div className=" col-span-1 flex justify-center items-center">
          <div className="flex  w-[410px] flex-col gap-6">
            <div className="flex gap-8">
              <div className="text-purple underline underline-offset-8 text-[20px] ">
                Sign In
              </div>
              <div className="text-[20px] text-[#939CA3] ">Join In</div>
            </div>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
}
