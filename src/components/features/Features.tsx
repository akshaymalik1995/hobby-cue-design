import React from "react";
import Feature from "./Feature";
import GroupIcon from "../icons/GroupIcon";
import LocationIcon from "../icons/LocationIcon";
import BagIcon from "../icons/BagIcon";
import CalendarIcon from "../icons/CalendarIcon";

export default function Features() {
  return (
    <div className="h-[818px] w-full">
      <div className="container h-full flex justify-center items-center mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex gap-6 flex-col">
            <Feature
              icon={<GroupIcon />}
              buttonText="Connect"
              description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
              title="People"
            />

            <Feature
              icon={<BagIcon />}
              buttonText="Get it"
              description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
              title="Product"
            />
          </div>
          <div className="flex gap-6 flex-col">
            <Feature
              icon={<LocationIcon />}
              buttonText="Meet up"
              description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
              title="Place"
            />
            <Feature
              icon={<CalendarIcon />}
              buttonText="Attend"
              description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
              title="Program"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
