import React from "react";
import style from "./Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        <Link href="/" className={style.iteam}>
          <span>Wishlist</span>
        </Link>
        <Link href="/" className={style.iteam}>
          <span>Clips</span>
        </Link>
        <Link href="/" className={style.iteam}>
          <span>TV Shows</span>
        </Link>
        <Link href="/" className={style.iteam}>
          <span>Trailer</span>
        </Link>
        <Link href="/" className={style.iteam}>
          <span>Movies</span>
        </Link>
      </ul>
      <span className={style.line}></span>
      <ul className={style.list}>
        <h3>Setting</h3>
        <li className={style.iteam}>Sign In </li>
        <li className={style.iteam}>Create Account</li>
      </ul>
      <span className={style.line}></span>
      <ul className={style.list}>
        <h3>Support</h3>
        <li className={style.iteam}>Help</li>
        <li className={style.iteam}>Contact Us</li>
      </ul>
      <span className={style.line}></span>
    </div>
  );
};

export default Nav;
