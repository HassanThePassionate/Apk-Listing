import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from "@/constant/languages";

const Languages = () => {
  return (
    <Select>
      <SelectTrigger className='w-[215px] border-none text-base font-medium bg-transparent focus:outline-none text-[#5f6368] py-0 pb-[6px]'>
        <SelectValue placeholder='Afrikaans' />
      </SelectTrigger>
      <SelectContent className='text-base '>
        {languages.map((lang, i) => (
          <SelectItem key={i} value={lang.value}>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default Languages;
