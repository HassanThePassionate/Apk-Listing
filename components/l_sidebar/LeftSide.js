import React from "react";
import style from "./l_sidebar.module.css";
const LeftSide = () => {
  return (
    <div>
      <ul
        className='flex flex-col  space-y-3 md:px-11 font-bold w-full'
        id={style.list}
      >
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Home</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Explore</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Notifications</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Messages</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            {" "}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M80-160v-160h160v160H80Zm240 0v-160h560v160H320ZM80-400v-160h160v160H80Zm240 0v-160h560v160H320ZM80-640v-160h160v160H80Zm240 0v-160h560v160H320Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Lists</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M120-40v-640q0-33 23.5-56.5T200-760h400q33 0 56.5 23.5T680-680v640L400-160 120-40Zm80-122 200-86 200 86v-518H200v518Zm560 2v-680H240v-80h520q33 0 56.5 23.5T840-840v680h-80ZM200-680h400-400Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Bookmarks</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Communities</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='m400-570 80-40 80 40v-190H400v190ZM280-280v-80h200v80H280Zm-80 160q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560-560Zm0 560h560v-560H640v320l-160-80-160 80v-320H200v560Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Premium</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit  hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z' />
            </svg>
          </span>
          <span className='hidden md:block'>Profile</span>
        </li>
        <li className='flex md:justify-start items-center gap-3 justify-center mr-4 md:w-fit   hover:cursor-pointer px-5 py-3 hover:rounded-full'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='36'
              viewBox='0 -960 960 960'
              width='30'
            >
              <path d='M280-420q25 0 42.5-17.5T340-480q0-25-17.5-42.5T280-540q-25 0-42.5 17.5T220-480q0 25 17.5 42.5T280-420Zm200 0q25 0 42.5-17.5T540-480q0-25-17.5-42.5T480-540q-25 0-42.5 17.5T420-480q0 25 17.5 42.5T480-420Zm200 0q25 0 42.5-17.5T740-480q0-25-17.5-42.5T680-540q-25 0-42.5 17.5T620-480q0 25 17.5 42.5T680-420ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z' />
            </svg>
          </span>
          <span className='hidden md:block'>More</span>
        </li>
        <li></li>
      </ul>
    </div>
  );
};

export default LeftSide;
