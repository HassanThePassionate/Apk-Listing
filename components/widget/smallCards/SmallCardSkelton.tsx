import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const SmallCardSkelton = () => {
  return (
    <>
      <div className='flex items-center  gap-4 p-[10px]  mb-10 '>
        <Skeleton className='h-[50px] w-[50px] rounded-xl' />
        <Skeleton className='h-4 w-[150px]' />
        <Skeleton className='h-[40px] w-[80px]' />
      </div>
    </>
  );
};

export default SmallCardSkelton;
