import React from "react";
import Image from "next/image";
import style from "@/app/style/Postdeatail.module.css";
const QrCode = () => {
  return (
    <>
      <div className={style.qrcode}>
        <Image
          src="https://clipground.com/images/codes-clipart-7.jpg"
          width={200}
          height={200}
          alt="qrcode"
        />
      </div>
    </>
  );
};

export default QrCode;
