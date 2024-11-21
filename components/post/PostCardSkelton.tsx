import React from "react";
import { Skeleton } from "../ui/skeleton";

const PostCardSkelton = () => {
  return (
    <div className='flex max-[768px]:h-[380px] h-[200px] gap-[30px] min-[570px]:mb-0 mt-4 mb-12  max-[768px]:flex-col px-4 '>
      <Skeleton className='h-[150px] w-[150px] rounded-xl max-[940px]:w-[100px] max-[940px]:h-[100px] max-[768px]:h-[150px] max-[768px]:w-[150px]' />
      <div className='flex flex-col'>
        <div className='space-y-3'>
          <Skeleton className='h-6 w-[250px] max-[940px]:w-[200px] max-[768px]:w-full ' />
          <Skeleton className='h-10  w-[250px] max-[940px]:w-[200px] max-[768px]:w-full ' />
          <div className='flex items-center gap-[80px] max-[1450px]:flex-col max-[1450px]:gap-4 max-[1450px]:items-start  mt-2'>
            <Skeleton className='h-5  w-[110px] max-[1450px]:w-[150px] max-[768px]:w-full ' />
            <Skeleton className='h-5  w-[110px] max-[1450px]:w-[150px] max-[768px]:w-full ' />
          </div>
        </div>
        <div className=' mt-[30px] flex gap-[60px] items-center'>
          <Skeleton className='h-[44px] w-[200px] max-[768px]:w-full ' />
          <Skeleton className='h-[40px] w-[80px] max-[940px]:hidden' />
        </div>
      </div>
    </div>
  );
};

export default PostCardSkelton;
