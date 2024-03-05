// import React, { useState } from "react";
import style from "../style/Navbar.module.css";
const MobileSearch = ({ open }) => {
  return (
    <>
      <div className={style.fullH}>
        <div className={style.mobile}>
          <form className={style.mobileSearch}>
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search"
              className={style.searchbarIn}
            />
          </form>
          <span className={style.clearss} onClick={open}>
            <i className={style.icon}>
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
      </div>
    </>
  );
};

export default MobileSearch;
