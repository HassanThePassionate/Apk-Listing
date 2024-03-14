import React from "react";
import Link from "next/link";
import style from "./menu.module.css";
const Menu = () => {
  return (
    <>
      <ul className={style.menu}>
        <li className={style.menu_iteam}>
          <Link href="/lists" className={style.menu_text}>
            <i className={style.icon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M0 80v160h224V52zm256-32v192h256V16zm0 224v192l256 32V272zM0 272v160l224 28V272z"></path>
              </svg>
            </i>
            PC Games
          </Link>
        </li>
        <li className={style.menu_iteam}>
          <Link href="/products" className={style.menu_text}>
            <i className={style.icon}>
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
        <li className={style.menu_iteam}>
          <Link href="/products" className={style.menu_text}>
            <i className={style.icon}>
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
    </>
  );
};

export default Menu;
