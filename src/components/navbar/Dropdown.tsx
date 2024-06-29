"use client";
import { useEffect, useRef, useState } from "react";

export default function Dropdown(props: {
  isDropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
}) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        console.log("clicked outside");
        props.setDropdownOpen(false);
      }
    };
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const menus = [
    {
      title: "People - Community",
    },
    {
      title: "Places - Venues",
    },
    {
      title: "Programs - Events",
    },
    {
      title: "Products - Store",
    },
    {
      title: "Blogs",
    },
  ];

  return (
    <div
      ref={dropdownRef}
      className={`absolute shadow-md w-[220px] ${
        !props.isDropdownOpen && "hidden"
      }  bg-white z-10 top-full`}
    >
      {menus.map((menu, index) => (
        <div
          onClick={(e) => e.stopPropagation()}
          key={index}
          className="p-3 border-b-[1px] last:border-b-0 text-darkerGray"
        >
          {menu.title}
        </div>
      ))}
    </div>
  );
}
