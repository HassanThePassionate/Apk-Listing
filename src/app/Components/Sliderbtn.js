import Image from "next/image";
import React, { useState } from "react";
import nextbtn from "../Svg/nextbtn.svg";
import prevbtn from "../Svg/prevbtn.svg";
const Sliderbtn = ({ Instance }) => {
  const goNexts = () => {
    if (Instance) {
      Instance.slideNext();
    }
  };

  const goPrevs = () => {
    if (Instance) {
      Instance.slidePrev();
    }
  };
  return (
    <>
      <div className="buttonss">
        <button onClick={goPrevs}>
          <Image src={prevbtn} alt="btn" width={12} height={12} />
        </button>
        <button onClick={goNexts}>
          <Image src={nextbtn} alt="btn" width={12} height={12} />
        </button>
      </div>
    </>
  );
};

export default Sliderbtn;
