import React from "react";
import Search from "./search/Search";
import Logo from "./logo/Logo";
import NavItems from "./navItems/NavItems";
import { ThemeToggle } from "../ThemeToggle";
import MobileNavigation from "./mobileNavigation/MobileNavigation";

const Header = () => {
  return (
    <header className='px-[30px] flex items-center border-b border-[var(--border-color)] h-[var(--header-height)] sticky top-0 z-40 bg-white dark:bg-black w-full '>
      <div className='flex items-center justify-between w-full max-xl:hidden'>
        <div className='flex items-center gap-[3.8rem]'>
          <Logo />
          <Search />
          <NavItems />
        </div>
        <ThemeToggle />
      </div>
      <MobileNavigation />
    </header>
  );
};

export default Header;
