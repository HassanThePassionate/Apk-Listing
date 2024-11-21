"use client";
import menu from "@/constant/SidebarItems";
import style from "./sidebar.module.css";
export default function SidebarNav() {
  return (
    <ul className='flex flex-col  space-y-3 font-bold w-full' id={style.list}>
      {menu.map((item) => (
        <li
          key={item.id}
          className='flex md:justify-start items-center gap-2 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'
        >
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
              className='text-primary'
              fill='currentColor'
            >
              {item.iconPath}
            </svg>
          </span>
          <span className='hidden md:block'>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
