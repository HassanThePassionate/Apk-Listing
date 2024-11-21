import { socialLinks } from "@/constant/SocialLinks";
import Link from "next/link";
import React from "react";

const SocialIcons = () => {
  return (
    <ul className='flex-1 flex flex-wrap m-0 max-w-full self-center'>
      {socialLinks.map((social) => (
        <li
          key={social.name}
          className=' flex-[0,0,auto] items-center self-center inline-flex h-12 w-12 mr-2 ml-0 '
        >
          <Link
            href={social.href}
            className='flex items-center h-full justify-center w-full transition-all duration-300 rounded-full p-0.5 hover:bg-[var(--hover-color)] '
          >
            <svg
              role='presentation'
              aria-hidden='true'
              height={24}
              width={24}
              className='text-[var(--star-color)] align-middle'
              fill='currentColor'
              viewBox={social.icon.viewBox}
            >
              <path d={social.icon.path}></path>
            </svg>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialIcons;
