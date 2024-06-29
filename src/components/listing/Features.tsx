import React from "react";
import Feature from "./Feature";
import GroupIcon from "../icons/GroupIcon";
import LocationIcon from "../icons/LocationIcon";
import BagIcon from "../icons/BagIcon";
import CalendarIcon from "../icons/CalendarIcon";
import { Fa42Group, FaLocationDot } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { GiBeachBag } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa";

export default function ListingFeatures() {
  return (
    <div className="">
      <div className="py-6 h-full  flex justify-center items-center mx-auto">
        <div className="max-w-[1240px] px-4 grid items-center justify-center grid-cols-1 xl:grid-cols-2 gap-6">
          <div className="flex gap-6 flex-col">
            <Feature
              icon={<HiUserGroup />}
              buttonText="Connect"
              description="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
              title="People"
              color="#8064A2"
            />

            <Feature
              icon={<GiBeachBag />}
              buttonText="Get it"
              description="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
              title="Product"
              color="#C0504D"
            />
          </div>
          <div className="flex gap-6 flex-col">
            <Feature
              icon={<FaLocationDot />}
              buttonText="Meet up"
              description="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
              title="Place"
              color="#77933C"
            />
            <Feature
              icon={<FaCalendarCheck />}
              buttonText="Attend"
              description="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
              title="Program"
              color="#0096C8"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
