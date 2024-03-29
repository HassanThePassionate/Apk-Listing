import React from "react";
import Logo from "../../logo/Logo";
import styles from "./Crossbtn.module.css";
const Crossbtn = ({ setShowMenu }) => {
  const hidemenu = () => {
    setShowMenu(true);
  };
  return (
    <div className={styles.cross_button}>
      <Logo />
      <span className={styles.cross_btn} onClick={hidemenu}>
        <i className={styles.Icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="329pt"
            height="329pt"
            viewBox="0 0 329.269 329"
            className="clears"
          >
            <path d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"></path>
          </svg>
        </i>
      </span>
    </div>
  );
};

export default Crossbtn;
