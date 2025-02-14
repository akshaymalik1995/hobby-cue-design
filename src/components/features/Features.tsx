import React from "react";
import Feature from "./Feature";
import GroupIcon from "../icons/GroupIcon";
import LocationIcon from "../icons/LocationIcon";
import BagIcon from "../icons/BagIcon";
import CalendarIcon from "../icons/CalendarIcon";

export default function Features() {
  return (
    <div className="">
      <div className="py-24 h-full flex justify-center items-center mx-auto">
        <div className="max-w-[1240px] px-4 grid items-center justify-center grid-cols-1 xl:grid-cols-2 gap-6">
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
              description="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
              title="Product"
            />
          </div>
          <div className="flex gap-6 flex-col">
            <Feature
              icon={<LocationIcon />}
              buttonText="Meet up"
              description="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
              title="Place"
            />
            <Feature
              icon={<CalendarIcon />}
              buttonText="Attend"
              description="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
              title="Program"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
