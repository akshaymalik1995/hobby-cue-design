import Features from "@/components/features/Features";
import BluePlusIcon from "@/components/icons/BluePlusIcon";
import React from "react";
import Feature from "@/components/features/Feature";
import GroupIcon from "@/components/icons/GroupIcon";
import BagIcon from "@/components/icons/BagIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ListingFeatures from "@/components/listing/Features";

export default function page() {
  return (
    <div>
      <div className="container m-10 flex gap-10 flex-col max-w-[1280px] p-12  shadow bg-white mx-auto">
        <div className="flex justify-center font-semibold text-[#08090A] text-[24px] leading-[36px] gap-4 items-center">
          <div>
            <BluePlusIcon />
          </div>
          <div>Add Your Listing</div>
        </div>
        <ListingFeatures />
      </div>
    </div>
  );
}
