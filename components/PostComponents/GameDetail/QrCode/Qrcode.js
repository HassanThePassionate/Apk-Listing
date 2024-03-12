import React from "react";
import Image from "next/image";
import style from "./Qrcode.module.css";
const Qrcode = () => {
  return (
    <div className={style.qr_code}>
      <Image
        src="https://clipground.com/images/codes-clipart-7.jpg"
        width={200}
        height={200}
        alt="qrcode"
      />
    </div>
  );
};

export default Qrcode;
