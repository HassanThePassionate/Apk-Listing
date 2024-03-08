import Image from "next/image";
import React from "react";
import style from "@/app/style/Postdeatail.module.css";
const Popup = () => {
  return (
    <div className={style.popup}>
      <div className={style.overlay}></div>
      <Image
        src="https://play-lh.googleusercontent.com/wq8j0eajviPxSZHa51zj2VtkDhT2Tovdm6ByVQY99offUKmhJGVmbX-uSzlhIt2Ffg=w2560-h1440-rw"
        alt="img"
        width={736}
        height={414}
      />
    </div>
  );
};

export default Popup;
