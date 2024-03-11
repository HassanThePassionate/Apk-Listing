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
              <Link
                href="https://about.google/"
                className={style.glue_footer_link}
                target="_blank"
              >
                About Google
              </Link>
            </li>
            <li className={style.iteam}>
              <Link
                href="https://about.google/products/"
                className={style.glue_footer_link}
                target="_blank"
              >
                Google products
              </Link>
            </li>
            <li className={style.iteam}>
              <Link
                href="https://policies.google.com/privacy?hl=en"
                className={style.glue_footer_link}
                target="_blank"
              >
                Privacy
              </Link>
            </li>
            <li className={style.iteam}>
              <Link
                href="https://policies.google.com/terms?hl=en"
                className={style.glue_footer_link}
                target="_blank"
              >
                Terms
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
