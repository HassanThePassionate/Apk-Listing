"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Logo from "./logo/Logo";
import Searchbar from "./Search/Searchbar";
import Menu from "./Menu/Menu";
import Buttons from "./NavButtons/Buttons";
import Search from "./MobileNav/MobileSearch/Searchbar";
import Header from "./MobileNav/Header/Header";
import style from "./Navbar.module.css";
const Navbar = () => {
  const [clears, setClear] = useState(false);
  const [showmenu, setShowMenu] = useState(true);

  const open = () => setClear(!clears);
  const menuhandle = () => setShowMenu(false);
  return (
    <>
      <Header showmenu={showmenu} setShowMenu={setShowMenu} />
      {clears ? (
        <Search open={open} />
      ) : (
        showmenu && (
          <header className={style.header}>
            <div className={style.container}>
              <nav className={style.navbar}>
                <Logo />
                <Searchbar />
                <Menu />
                <Buttons menuhandle={menuhandle} open={open} />
              </nav>
            </div>
          </header>
        )
      )}
    </>
  );
};

export default Navbar;
