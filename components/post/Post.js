import React from "react";
// import { data } from "@/constant/data";
import style from "./post.module.css";
import Image from "next/image";
import Link from "next/link";
import Slider from "./slider/Slider";
import Arrowbtn from "./arrowBtn/Arrowbtn";

const Post = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className='pagena text-[16px] ml-[15px] my-[10px]'>
          <Link href='#' className={style.page}>
            Welcome
          </Link>
          <Link href='#' className={style.page}>
            Download
          </Link>
          <Link href='#' className={style.page}>
            Internet
          </Link>
          <Link href='#' className={style.page}>
            Instant messaging
          </Link>
        </div>

        <Link href={"/posts"} className={style.cards}>
          <div className={style.card}>
            <div className='img_text'>
              <div className={style.img}>
                <Image
                  src='https://play-lh.googleusercontent.com/c15fVxquhZ_LO5jPc-f2nYpz-EHvphyniI4JCKG8hYd-yXkhq5k4WpSJMu-M9S3vIA=s464-rw'
                  width={120}
                  height={120}
                />
              </div>
              <p className={style.img_text}>Updated : 04/22/2024</p>
            </div>

            <div className={style.card_content}>
              <div className={style.title}>Asphalt 9: Legends</div>
              <p className={style.para}>The New Trending Games in 2024</p>
              <div
                className=' flex items-center gap-[80px]'
                id={style.downloads_r}
              >
                <div className={style.rating}>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 48 48'
                    width='20'
                    height='20'
                  >
                    <path
                      d='m11.65 44 4.65-15.2L4 20h15.2L24 4l4.8 16H44l-12.3 8.8L36.35 44 24 34.6Z'
                      fill='#FFC700'
                    ></path>
                  </svg>
                  <strong className={style.strong}>3.5</strong>
                  <span>( 115139 ratings )</span>
                </div>
                <div className='mt-[10px] flex items-center gap-4'>
                  <span>
                    <svg
                      width='13'
                      height='14'
                      viewBox='0 0 12 13'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.25 4.75H8.25V0.25H3.75V4.75H0.75L6 10L11.25 4.75ZM0.75 11.5V13H11.25V11.5H0.75Z'
                        fill='#3F547E'
                      ></path>
                    </svg>
                  </span>
                  <span
                    className=' text-[16px] leading-[19px]   font-bold '
                    id={style.sp}
                  >
                    24880 <span className=' font-normal'>( 30 days )</span>
                  </span>
                </div>
              </div>
              <div className={style.btns}>
                <div className='button'>
                  <button className={style.btn}>
                    <span>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                        height={20}
                        width={20}
                        fill='#fff'
                      >
                        <path d='M0 80v160h224V52zm256-32v192h256V16zm0 224v192l256 32V272zM0 272v160l224 28V272z'></path>
                      </svg>
                    </span>
                    Install on Windows
                  </button>
                </div>
                <div className={style.icons}>
                  <div className={style.share}>
                    <span>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        class='f70z8e'
                      >
                        <path d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'></path>
                      </svg>
                    </span>
                    <span>Share</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Slider />
        <div className={style.article}>
          <div className={style.titles}>
            <h6>About this game</h6>
            <Arrowbtn />
          </div>
          <div className={style.paras}>
            <p>
              In Asphalt 9: Legends, take the wheel of real cars from high-end
              renowned legendary car manufacturers, such as Ferrari, Porsche,
              Lamborghini, and W Motors, among many other international brands.
              Drive, boost and perform stunts across dynamic real-life locations
              in single or multiplayer play. Racing adrenaline, brought to you
              by the creators of Asphalt 8: Airborne.
            </p>
            <br />
            Customise high-end hypercars
            <br />
            ...
          </div>
          <div className={style.date}>
            <span className={style.update}>Updated On</span>
            <br />
            <span className={style.da}>Apr 25, 2024</span>
          </div>
          <div className={style.tags}>
            <div className={style.tag}>top grossing racing</div>
            <div className={style.tag}>Racing</div>
            <div className={style.tag}>Racing Simultor</div>
            <div className={style.tag}>MultiPlayer</div>
            <div className={style.tag}>Single Player</div>
          </div>
          <div className={style.titles}>
            <h6>Data Safety</h6>
            <Arrowbtn />
          </div>
          <div className={style.paras}>
            <p>
              Safety starts with understanding how developers collect and share
              your data. Data privacy and security practices may vary based on
              your use, region, and age. The developer provided this information
              and may update it over time.
            </p>
          </div>
          <div className={style.safety}>
            <div className={style.iteam}>
              <div className='img'>
                <Image
                  src='https://play-lh.googleusercontent.com/iFstqoxDElUVv4T3KxkxP3OTcuFvWF5ZQQjT7aIxy4n2uaVigCCykxeG6EZV9FQ10X1itPj1oORm=s20-rw'
                  alt='img'
                  height={20}
                  width={20}
                />
              </div>
              <div>
                <div>
                  This app may share these data types with third parties
                </div>
                <div>Location, Personal info and 2 others</div>
              </div>
            </div>
            <div className={style.iteam}>
              <div className='img'>
                <Image
                  src='https://play-lh.googleusercontent.com/12USW7aflgz466ifDehKTnMoAep_VHxDmKJ6jEBoDZWCSefOC-ThRX14Mqe0r8KF9XCzrpMqJts=s20-rw'
                  alt='img'
                  height={20}
                  width={20}
                />
              </div>
              <div>
                <div>
                  This app may share these data types with third parties
                </div>
                <div>Location, Personal info and 2 others</div>
              </div>
            </div>
            <div className={style.iteam}>
              <div className='img'>
                <Image
                  src='https://play-lh.googleusercontent.com/W5DPtvB8Fhmkn5LbFZki_OHL3ZI1Rdc-AFul19UK4f7np2NMjLE5QquD6H0HAeEJ977u3WH4yaQ=s20-rw'
                  alt='img'
                  height={20}
                  width={20}
                />
              </div>
              <div>This app may share these data types with third parties</div>
            </div>
            <div className={style.iteam}>
              <div className='img'>
                <Image
                  src='https://play-lh.googleusercontent.com/ohRyQRA9rNfhp7xLW0MtW1soD8SEX45Oec7MyH3FaxtukWUG_6GKVpvh3JiugzryLi7Bia02HPw=s20-rw'
                  alt='img'
                  height={20}
                  width={20}
                />
              </div>
              This app may share these data types with third parties
            </div>
            <Link
              href='#'
              className='text-[#056449] font-medium mb-[10px] text-[16px]'
            >
              See Detail
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
