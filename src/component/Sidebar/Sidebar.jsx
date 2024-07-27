import React from "react";
import { FolderIcon, HomeIcon, UsersIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";

const navigation = [
  { name: "หน้าหลัก", href: "#", icon: HomeIcon, current: true },
  { name: "ขึ้นทะเบียนสำเร็จ", href: "#", icon: UsersIcon, current: false },
  { name: "User Management", href: "#", icon: FolderIcon, current: false },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  return (
    <>
      <SidebarMobile navigation={navigation} classNames={classNames} />
      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <SidebarDesktop navigation={navigation} classNames={classNames} />
      </div>
    </>
  );
};

export default Sidebar;
