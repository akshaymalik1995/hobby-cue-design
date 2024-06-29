import React from "react";
import PurpleButton from "../PurpleButton";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
}

export default function Feature(props: FeatureProps) {
  return (
    <div className="flex flex-col w-[608px] border-[1px] border-lightGray rounded-md px-10 py-8 gap-6">
      <div className="flex items-center gap-4">
        <div className="w-[40px] h-[40px] ">{props.icon}</div>
        <div className="text-[20px] font-semibold">{props.title}</div>
      </div>
      <div className="text-[18px] leading-[27px] font-light">
        {props.description}
      </div>
      <div>
        <PurpleButton text={props.buttonText} />
      </div>
    </div>
  );
}
