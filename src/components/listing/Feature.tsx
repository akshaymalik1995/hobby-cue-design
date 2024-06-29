"use client";
import React from "react";
import { useState } from "react";

// Tailwind classes for all colors
// hover:bg-[#8064A2]
// hover:bg-[#C0504D]
// hover:bg-[#77933C]
// hover:bg-[#0096C8]

// border-[#8064A2]
// border-[#C0504D]
// border-[#77933C]
// border-[#0096C8]

// text-[#8064A2]
// text-[#C0504D]
// text-[#77933C]
// text-[#0096C8]

// hover:text-[#8064A2]
// hover:text-[#C0504D]
// hover:text-[#77933C]
// hover:text-[#0096C8]

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  color: "#8064A2" | "#C0504D" | "#77933C" | "#0096C8";
}

export default function ListingFeature(props: FeatureProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`flex hover:bg-[${props.color}] hover:text-white  md:h-52 cursor-pointer flex-col  border-2 border-[${props.color}] rounded-md px-10 py-8 gap-6`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`text-3xl ${
            hover ? "text-white" : `text-[${props.color}]`
          }`}
        >
          {props.icon}
        </div>
        <div className="text-[20px] font-semibold">{props.title}</div>
      </div>
      <div className="text-[18px] leading-[27px] font-light">
        {props.description}
      </div>
    </div>
  );
}
