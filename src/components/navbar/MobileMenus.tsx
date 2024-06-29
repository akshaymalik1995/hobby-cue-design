import React from "react";
import SearchIcon from "../icons/SearchIcon";
import NotificationIcon from "../icons/NotificationIcon";
import MenuIcon from "../icons/MenuIcon";

export default function MobileMenus() {
  return (
    <div className="flex items-center gap-6">
      <SearchIcon />
      <NotificationIcon />
      <MenuIcon />
    </div>
  );
}
