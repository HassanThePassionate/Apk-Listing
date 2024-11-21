import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";
const MobileSearch = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <FiSearch className='h-[1.4rem] w-[1.4rem]' />
      </SheetTrigger>
      <SheetContent className='flex flex-col  dark:bg-black ' side='left'>
        <SheetHeader>
          <SheetTitle className='flex items-center gap-4 '>
            <Input
              placeholder='Search'
              className='dark:border-[#4b5563] w-full border border-[#05856e] min-h-[48px] font-normal focus:outline-none'
            />
            <SheetClose>
              <X className='h-6 w-6' />
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSearch;
