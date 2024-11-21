"use client";
import React from "react";
import Card from "../hero/card/Card";
import StarIcon from "../StarIcon";
import { Button } from "../ui/button";
import style from "./post.module.css";
import BreadCrumb from "./BreadCrumb";
import Slider from "./slider/Slider";
import GameDetail from "./gameDetail/GameDetail";
import { cn } from "@/lib/utils";
import PostCardSkelton from "./PostCardSkelton";
const ele = {
  img: "https://apk-listing.netlify.app/_next/image?url=https%3A%2F%2Fplay-lh.googleusercontent.com%2Fc15fVxquhZ_LO5jPc-f2nYpz-EHvphyniI4JCKG8hYd-yXkhq5k4WpSJMu-M9S3vIA%3Ds464-rw&w=128&q=75",
  title: "Asphalt 9: Legends",
};

const Post = () => {
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className='min-[500px]:pr-[30px]'>
      <BreadCrumb />
      {Loading ? (
        <PostCardSkelton />
      ) : (
        <Card ele={ele} postCard className='hover:!bg-transparent !w-full '>
          <p className='para max-[500px]:text-sm'>
            The New Trending Games in 2024
          </p>
          <div className='flex items-center gap-[80px] rate '>
            <div className='rating max-[500px]:hidden'>
              {[0, 1, 2, 3, 4].map((index) => (
                <StarIcon key={index} />
              ))}
              <strong>3.5</strong>
              <span>( 115139 ratings )</span>
            </div>
            <div className=' flex items-center gap-4 '>
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
              <span className=' text-[16px] leading-[19px] font-bold max-[500px]:text-sm '>
                24880 <span className=' font-normal'>( 30 days )</span>
              </span>
            </div>
          </div>
          <div className='mt-[10px] flex items-center gap-[3rem]'>
            <Button
              className={cn(
                "max-md:w-full max-[500px]:text-sm max-[500px]:w-auto",
                style.btn
              )}
            >
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
            </Button>
            <Button variant='ghost' className={style.share}>
              <span>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  className='f70z8e'
                >
                  <path d='M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z'></path>
                </svg>
              </span>
              <span>Share</span>
            </Button>
          </div>
        </Card>
      )}

      <Slider />
      <GameDetail />
    </div>
  );
};

export default Post;
