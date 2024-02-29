import React, { useRef, useState } from "react";
import style from "../style/Navbar.module.css";
import Link from "next/link";
import MobileNav from "./MobileNav";
import MobileSearch from "./MobileSearch";

const Navbar = ({ mode, toggle }) => {
  const [clears, setClear] = useState(false);
  const open = () => {
    setClear(!clears);
  };
  const [showmenu, setShowMenu] = useState(true);
  const [input, setInput] = useState("");
  const clear = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
    clear.current.style.transform = "scale(1)";
  };

  const handleClear = () => {
    setInput("");
    clear.current.style.transform = "scale(0)";
  };

  const menuhandle = () => {
    setShowMenu(false);
  };

  return (
    <>
      <MobileNav />
      {clears === true ? (
        <MobileSearch open={open} />
      ) : showmenu === true ? (
        <header
          className={`${style.header} ${
            mode === "dark" ? style.headerDark : style.header
          }`}
        >
          <div className={style.container}>
            <nav className={style.navbar}>
              <Link href="/" className={style.logo}></Link>
              <form className={style.search}>
                <i className={style.searchIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75T120-585t75-181 181.5-75 181 75T632-584.85Q632-542 618-502t-42 75l264 262zM377-389q81.25 0 138.125-57.5T572-585t-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389"></path>
                  </svg>
                </i>
                <input
                  type="text"
                  name="text"
                  id="text"
                  placeholder="Search"
                  className={style.searchInput}
                  value={input}
                  onChange={handleChange}
                />
                <span className={style.clear}>
                  <i className={style.icon} onClick={handleClear}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="329pt"
                      height="329pt"
                      viewBox="0 0 329.269 329"
                      className="clears"
                      ref={clear}
                    >
                      <path d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"></path>
                    </svg>
                  </i>
                </span>
              </form>
              <ul className={style.menu}>
                <li className={style.listIteam}>
                  <Link href="/" className={style.listText}>
                    <i className={style.listIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M0 80v160h224V52zm256-32v192h256V16zm0 224v192l256 32V272zM0 272v160l224 28V272z"></path>
                      </svg>
                    </i>
                    PC Games
                  </Link>
                </li>
                <li className={style.listIteam}>
                  <Link href="/" className={style.listText}>
                    <i className={style.listIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.007 512.007"
                      >
                        <path d="M64.004 192.007c-17.664 0-32 14.336-32 32v128c0 17.664 14.336 32 32 32s32-14.336 32-32v-128c0-17.664-14.336-32-32-32m384 0c-17.664 0-32 14.336-32 32v128c0 17.664 14.336 32 32 32s32-14.336 32-32v-128c0-17.664-14.336-32-32-32m-320 1.856v192c0 17.664 14.336 32 32 32v62.144c0 17.664 14.336 32 32 32s32-14.336 32-32v-62.144h64v62.144c0 17.664 14.336 32 32 32s32-14.336 32-32v-62.144c17.664 0 32-14.336 32-32v-192zm0-33.856h256c0-40.32-19.008-75.84-48.128-99.296l28.48-34.528c5.632-6.816 4.672-16.896-2.144-22.528-6.848-5.6-16.896-4.672-22.528 2.144l-31.136 37.728c-16.064-7.264-33.76-11.52-52.544-11.52-19.04 0-36.96 4.416-53.184 11.904L172.516 6.023c-5.536-6.88-15.584-8.032-22.496-2.496-6.88 5.536-8 15.584-2.496 22.496l28.096 35.136c-28.832 23.456-47.616 58.784-47.616 98.848m160-80c8.832 0 16 7.168 16 16s-7.168 16-16 16-16-7.168-16-16 7.168-16 16-16m-64 0c8.832 0 16 7.168 16 16s-7.168 16-16 16-16-7.168-16-16 7.168-16 16-16"></path>
                      </svg>
                    </i>
                    Android Games
                  </Link>
                </li>
                <li className={style.listIteam}>
                  <Link href="/" className={style.listText}>
                    <i className={style.listIcon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 -960 960 960"
                      >
                        <path d="m127-223-68-67 317-315 167 167 199-200H623v-94h278v277h-93v-115L542-304 375-471z"></path>
                      </svg>
                    </i>
                    Top Charts
                  </Link>
                </li>
              </ul>
              <div className={style.btns}>
                <button className={style.iconSearch} onClick={open}>
                  <i className="icon ">
                    <svg viewBox="0 0 24 24">
                      <path d="M11 2a9 9 0 0 1 9 9 8.96 8.96 0 0 1-1.968 5.617l3.675 3.676a1 1 0 0 1-1.32 1.497l-.094-.083-3.676-3.675A8.96 8.96 0 0 1 11 20a9 9 0 1 1 0-18m0 2a7 7 0 1 0 0 14c1.89 0 3.606-.749 4.865-1.967a1 1 0 0 1 .077-.09l.09-.077A6.98 6.98 0 0 0 18 11a7 7 0 0 0-7-7"></path>
                    </svg>
                  </i>
                </button>

                <button className={style.modeIcon} onClick={toggle}>
                  {mode === "dark" ? (
                    <svg fill="none" viewBox="0 0 24 24">
                      <path
                        d="M12 20v2m0-20v2m8 8h2M2 12h2m14 6 1.5 1.5m-15-15L6 6m12 0 1.5-1.5m-15 15L6 18m11-6a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                        stroke="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <svg fill="none" viewBox="0 0 24 24">
                      <path
                        d="M3 11.449C3 16.724 7.169 21 12.312 21c3.959 0 7.34-2.534 8.688-6.107a8.074 8.074 0 0 1-3.515.8c-4.571 0-8.277-3.8-8.277-8.489 0-1.961.648-3.767 1.737-5.204C6.45 2.678 3 6.65 3 11.449Z"
                        stroke="stroke-current"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </button>
                <button className={style.menuBtn} onClick={menuhandle}>
                  <i className="icon ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-text-primary"
                    >
                      <line x1="4" x2="20" y1="12" y2="12"></line>
                      <line x1="4" x2="20" y1="6" y2="6"></line>
                      <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                  </i>
                </button>
              </div>
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
