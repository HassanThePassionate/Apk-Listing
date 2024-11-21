import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CardSkelton = () => {
  return (
    <div className='flex max-[570px]:h-[300px] min-[570px]:h-[200px] gap-[30px] min-[570px]:mb-0 mt-4 mb-12  max-[570px]:flex-col '>
      <Skeleton className='h-[117px] w-[120px] rounded-xl' />
      <div className='flex gap-[60px] max-[940px]:flex-col'>
        <div className='space-y-3'>
          <Skeleton className='h-4 min-[415px]:!w-[250px] w-[180px] ' />
          <Skeleton className='h-4  min-[415px]:w-[250px] w-[180px] ' />
          <Skeleton className='h-10  min-[415px]:w-[250px] w-[180px] ' />
          <Skeleton className='h-4  min-[415px]:w-[110px] w-[80px]' />
        </div>
        <div className='max-[940px]:hidden mt-[30px]'>
          <Skeleton className='h-[50px] w-[100px]' />
        </div>
      </div>
    </div>
  );
};

export default CardSkelton;
