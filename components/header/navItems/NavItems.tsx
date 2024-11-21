import Link from "next/link";
import React from "react";
import style from "./navItems.module.css";
import { menuData } from "@/constant/NavItems";
const NavItems = () => {
  return (
    <ul className={style.menu}>
      {menuData.map((item, index) => (
        <li key={index} className={style.menu_item}>
          <Link href={item.href} className={style.menu_text}>
            <i className={style.icon}>{item.icon}</i>
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
