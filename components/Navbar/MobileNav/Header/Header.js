import React, { useState } from "react";
import styles from "./Header.module.css";
import Crossbtn from "../CrossBtn/Crossbtn";
import Nav from "../Nav/Nav";

const Header = ({ setShowMenu, showmenu }) => {
  return (
    <>
      {showmenu === false ? (
        <header className={styles.header}>
          <div className={styles.wrapper}>
            <Crossbtn setShowMenu={setShowMenu} />
            <Nav />
          </div>
        </header>
      ) : null}
    </>
  );
};

export default Header;
