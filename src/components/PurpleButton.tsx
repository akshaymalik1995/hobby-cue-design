import React from "react";

export default function PurpleButton({ text }: { text: string }) {
  return (
    <button className="h-[40px] w-[112px] rounded-lg border-[1px] border-purple flex justify-center items-center ">
      <span className="text-purple text-[14px] font-semibold ">{text}</span>
    </button>
  );
}
