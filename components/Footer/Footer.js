import React from "react";
import UpperFooter from "./UpperFooter/UpperFooter";
import GlobalFooter from "./GlobalFooter/GlobalFooter";
import Logo from "./logo/Logo";
import style from "./Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className="container">
        <UpperFooter />
        <div className={style.footer_global}>
          <Logo />
          <ul className={style.global_links}>
            <li className={style.iteam}>
              <Link href="/" className={style.footer_link}>
                Home
              </Link>
            </li>
            <li className={style.iteam}>
              <Link href="/post" className={style.footer_link}>
                Posts
              </Link>
            </li>
            <li className={style.iteam}>
              <Link href="/download" className={style.footer_link}>
                Downloads
              </Link>
            </li>
            <li className={style.iteam}>
              <Link href="/version-history" className={style.footer_link}>
                Version-History
              </Link>
            </li>
            <li className={style.iteam}>
              <Link href="/products" className={style.footer_link}>
                Products
              </Link>
            </li>
            <li className={style.iteam}>
              <Link href="/cookies" className={style.footer_link}>
                Cookies
              </Link>
            </li>
          </ul>
          <GlobalFooter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
