import React from "react";

import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="h-[40px] flex w-[300px]">
      <input
        className="outline-0 text-xs  p-[12px] border-[1px] border-[#EBEDF0] border-r-0 rounded-l-lg "
        type="text"
        placeholder="Search here..."
      />
      <button className="flex rounded-r-lg bg-[#8064A2] justify-center items-center w-[40px] h-full ">
        <Image
          alt="search-icon"
          height={12}
          width={12}
          src={"/searchIcon.svg"}
        />
      </button>
    </div>
  );
}
