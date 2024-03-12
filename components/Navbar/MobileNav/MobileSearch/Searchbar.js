import React from "react";
import style from "./Searchbar.module.css";
const Searchbar = ({ open }) => {
  return (
    <div className={style.f_screen}>
      <div className={style.search_bar}>
        <form className={style.search}>
          <input type="text" placeholder="Search" className={style.input} />
        </form>
        <span className={style.cross_icon} onClick={open}>
          <i className={style.icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="329pt"
              height="329pt"
              viewBox="0 0 329.269 329"
              className="cross_btn"
            >
              <path d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"></path>
            </svg>
          </i>
        </span>
      </div>
    </div>
  );
};

export default Searchbar;
