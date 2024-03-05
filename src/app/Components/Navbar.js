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
  const open = () => {
    setClear(!clears);
  };
  const [showmenu, setShowMenu] = useState(true);
  const menuhandle = () => {
    setShowMenu(false);
  };

  return (
    <>
      <MobileNav />
      {clears === true ? (
        <MobileSearch open={open} />
      ) : showmenu === true ? (
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
      ) : (
        <MobileNav showmenu={showmenu} setShowMenu={setShowMenu} />
      )}
    </>
  );
};

export default Navbar;
