import React, { useState } from "react";
import styles from "./Header.module.css";
import Crossbtn from "../CrossBtn/Crossbtn";
import Tabs from "../Tabs/Tabs";
import Generes from "../Genre/Generes";

const Header = ({ setShowMenu, showmenu }) => {
  const [card, setCard] = useState(true);

  return (
    <>
      {showmenu === false ? (
        <header className={styles.header}>
          <div className={styles.wrapper}>
            <Crossbtn setShowMenu={setShowMenu} />
            <Tabs card={card} setCard={setCard} />
            <Generes card={card} />
          </div>
        </header>
      ) : null}
    </>
  );
};

export default Header;
