"use client";
import React from "react";
import SignIn from "./SignIn";
import Image from "next/image";
import JoinIn from "./JoinIn";

export default function HomeScreen() {
  const [signIn, setSignIn] = React.useState(true);
  return (
    <div className="flex   items-center w-full bg-[#F7F5F9] ">
      <div className="container relative px-4 pt-12 xl:py-36 gap-10 grid grid-cols-1  xl:grid-cols-2 mx-auto ">
        <div className=" flex  col-span-1   flex-col gap-8 ">
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
        </div>
        <div className=" col-span-1 flex gap-16 flex-col justify-center items-center">
          <div className="flex w-full  lg:max-w-[410px] flex-col gap-6">
            <div className="flex grow gap-8">
              <div
                onClick={() => setSignIn(true)}
                className={` cursor-pointer  ${
                  signIn
                    ? "underline text-purple underline-offset-8"
                    : "text-[#939CA3]"
                }  text-[20px] `}
              >
                Sign In
              </div>
              <div
                onClick={() => setSignIn(false)}
                className={`text-[20px] cursor-pointer ${
                  !signIn
                    ? "text-purple underline underline-offset-8"
                    : "text-[#939CA3] "
                } `}
              >
                Join In
              </div>
            </div>
            {signIn ? <SignIn /> : <JoinIn />}
          </div>
          <div className="xl:absolute left-0 bottom-0">
            <Image src="/vector-1.png" alt="vector" width={700} height={216} />
          </div>
        </div>
      </div>
    </div>
  );
}
