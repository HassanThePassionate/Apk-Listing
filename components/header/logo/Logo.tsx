import Link from "next/link";
import React from "react";
import styles from "./logo.module.css";
import { cn } from "@/lib/utils";
const Logo = ({ footerLogo }: { footerLogo?: boolean }) => {
  return (
    <Link
      className={cn(footerLogo ? styles.footer_logo : styles.logo)}
      href='/'
    ></Link>
  );
};

export default Logo;
