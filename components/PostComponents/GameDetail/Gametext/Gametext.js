import React from "react";
import Image from "next/image";
import style from "./Gametext.module.css";
const Gametext = () => {
  return (
    <div className={style.iteam}>
      <div className={style.image}>
        <Image
          src="https://play-lh.googleusercontent.com/r_CaT5Gub5pQbgGoJ1PdtqqgNQvff_KSCaS4bCKl14IrUxsya7Mo00y8As-BQnmIDQ=s800-rw"
          alt="Car Simulator 2"
          width={96}
          height={96}
        />
      </div>
      <div className={style.text}>
        <h2>Car Simulator 2</h2>
        <h5>OppanaGames FZC LLC</h5>
        <p>Contains adsIn-app purchases</p>
      </div>
    </div>
  );
};

export default Gametext;
