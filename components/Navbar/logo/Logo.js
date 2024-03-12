import React from "react";
import Link from "next/link";
import style from "./logo.module.css";
const Logo = () => {
  return (
    <div>
      <Link href="/" className={style.logo}></Link>
    </div>
  );
};

export default Logo;
