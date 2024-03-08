import React from "react";
import Image from "next/image";
import style from "@/app/style/Postdeatail.module.css";
const Rating = () => {
  return (
    <>
      <div className={style.gamerating}>
        <span className={style.ratingtitle}>4.5</span>
        <span className={style.ratingicon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </span>
        <p>1.29M reviews</p>
      </div>
      <div className={style.line}></div>
      <div className={style.downloads}>
        <span className={style.ratingtitle}>50M+</span>
        <p>Downloads</p>
      </div>
      <div className={style.line}></div>
      <div className={style.rated}>
        <Image
          src="data:image/webp;base64,UklGRlYBAABXRUJQVlA4TEoBAAAvIcAHENVAsbZtmfJjM3tCG0twpznJPc6huib35O7u7iRP7g6/vrMGpj+ZDfiLQ1bQto1k/hCHYBzuyQQwjiSpTRIU+UcELxeJR+oJcBhBfyQBxLorW6+oPwqiEI/4IHx5hNXTBXYArkEcBoFPYPiDKhwCx2imMAul03ECbaB8DUawDiNYBTMfYgfbUtOJXkn2owUAHMXMbBCgRj5RALYkSoZmQwCQCaYBgDNIpEKrUgDIA3MfmmHqjCAAHWiRqR6nUHMOADgAs1NA4S7UVAJAopjZVQQAMAdmrkJ+FKAEngCK9f+fq2OoGISIZdMAsLSiUAHIgty9JicBALOg6YGI5ZOgiQEA/KRgUyuxBA0AoDAUKFWwA9GQaCYg2gLNu+gKNGOoQg0eqoJpCI3jLwBU4fGtuwqiEI/4IHyJBqye7jCC7kog1l3ZekU="
          alt="Rated For 7+"
          width={16}
          height={16}
        />
        <p>Rated For 7+</p>
      </div>
    </>
  );
};

export default Rating;
