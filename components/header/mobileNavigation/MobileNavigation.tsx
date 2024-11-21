import React from "react";
import Logo from "../logo/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";
import MobileMenu from "./mobileMenu/MobileMenu";
import MobileSearch from "./mobileSearch/MobileSearch";

const MobileNavigation = () => {
  return (
    <>
      <div className='flex items-center justify-between w-full xl:hidden'>
        <Logo />
        <div className='flex items-center gap-1'>
          <MobileSearch />
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;
