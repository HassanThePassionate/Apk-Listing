import Link from "next/link";
import React from "react";
import style from "./footer.module.css";
import SocialIcons from "../SocialIcons";
import Logo from "../header/logo/Logo";
import { footerItem } from "@/constant/FooterItem";
import Languages from "../Languages";
const Footer = () => {
  return (
    <footer className='px-[30px] bg-white dark:bg-black border-t border-[var(--border-color)]'>
      <div className='py-6'>
        <div className={style.socials}>
          <div className={style.socials_group}>
            <h4 className={style.title}>
              <div className={style.text}>
                Follow our &nbsp;
                <Link href='#'>Blog</Link>
              </div>
            </h4>
            <SocialIcons />
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-between py-[40px]'>
        <Logo footerLogo />
        <ul className='flex flex-wrap gap-6 max-w-full pb-6'>
          {footerItem.map((item, i) => (
            <li key={i} className={style.item}>
              <Link href={item.url} className={style.footer_link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ul className='flex flex-wrap items-center gap-4 max-w-full pb-6'>
          <li className={style.footer_item}>
            <Link
              href='https://support.google.com/?hl=en'
              className={style.footer_link}
              target='_blank'
            >
              <svg
                role='presentation'
                aria-hidden='true'
                height={24}
                width={24}
                fill='currentColor'
                className='text-[#5f6368]'
              >
                <svg id='help' viewBox='0 0 24 24'>
                  <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z'></path>
                </svg>
                <use href='#help'></use>
              </svg>
            </Link>
          </li>
          <li className={style.footer_item}>
            <Languages />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
