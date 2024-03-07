"use client";
import React, { useState } from "react";
import style from "../style/Navbar.module.css";
import Link from "next/link";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";
import Searchbar from "./Searchbar";
import NavCatagory from "./NavCatagory";
import Navbtns from "./Navbtns";

const Navbar = () => {
  const [clears, setClear] = useState(false);
  const [showmenu, setShowMenu] = useState(true);

  const open = () => setClear(!clears);
  const menuhandle = () => setShowMenu(false);

  return (
    <>
      <MobileNav showmenu={showmenu} setShowMenu={setShowMenu} />
      {clears ? (
        <MobileSearch open={open} />
      ) : (
        showmenu && (
          <header className={style.header}>
            <div className={style.container}>
              <nav className={style.navbar}>
                <Link href="/" className={style.logo}></Link>
                <Searchbar />
                <NavCatagory />
                <Navbtns menuhandle={menuhandle} open={open} />
              </nav>
            </div>
          </header>
        )
      )}
    </>
  );
};

export default Navbar;
