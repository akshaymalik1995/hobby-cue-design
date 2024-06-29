import React from "react";
import PurpleButton from "./PurpleButton";
import PlusIcon from "./icons/PlusIcon";

export default function AddSection() {
  return (
    <div className="bg-[#F7FDFF]">
      <div className="py-24 px-4 container  mx-auto flex justify-center items-center ">
        <div className="gap-8 max-w-[1240px] flex rounded-md flex-col border-[1px] border-lightGray px-10 py-8 bg-white ">
          <div className="flex gap-6">
            <div>
              <PlusIcon />
            </div>
            <div className="font-semibold text-[24px] leading-[36px] ">
              Add your own
            </div>
          </div>
          <div className="font-light text-[18px] leading-[30px] tracking-[2%] ">
            Are you a teacher or expert? Do you sell or rent out equipment,
            venue or event tickets? Or, you know someone who should be on
            hobbycue? Go ahead and Add your Own page
          </div>
          <div>
            <PurpleButton text="Add new" />
          </div>
        </div>
      </div>
    </div>
  );
}
