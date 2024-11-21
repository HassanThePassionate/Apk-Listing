import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import style from "./mobileMenu.module.css";
import { FiMenu } from "react-icons/fi";
import Logo from "../../logo/Logo";
import { X } from "lucide-react";
const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu className='h-[1.4rem] w-[1.4rem]' />
      </SheetTrigger>
      <SheetContent className='flex flex-col pt-0 dark:bg-black ' side='left'>
        <SheetHeader>
          <SheetTitle className='px-[30px] flex items-center justify-between border-b border-[var(--border-color)] h-[var(--header-height)] sticky top-0 z-40 bg-white dark:bg-black w-full'>
            <Logo />
            <SheetClose>
              <X className='h-8 w-8' />
            </SheetClose>
          </SheetTitle>
          <ul className={style.list}>
            <Link href='/' className={style.item}>
              <span>Wishlist</span>
            </Link>
            <Link href='/' className={style.item}>
              <span>Clips</span>
            </Link>
            <Link href='/' className={style.item}>
              <span>TV Shows</span>
            </Link>
            <Link href='/' className={style.item}>
              <span>Trailer</span>
            </Link>
            <Link href='/' className={style.item}>
              <span>Movies</span>
            </Link>
          </ul>
          <span className={style.line}></span>
          <ul className={style.list}>
            <h3>Setting</h3>
            <Link href='#' className={style.item}>
              Sign In{" "}
            </Link>
            <Link href='#' className={style.item}>
              Create Account
            </Link>
          </ul>
          <span className={style.line}></span>
          <ul className={style.list}>
            <h3>Support</h3>
            <Link href='#' className={style.item}>
              Help
            </Link>
            <Link href='#' className={style.item}>
              Contact Us
            </Link>
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
