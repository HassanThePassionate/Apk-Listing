import React, { useState } from "react";
import style from "../style/Slider.module.css";
import Heading from "./Heading";
import MiniCardbtn from "./MiniCardbtn";
import MiniCard from "./Cards/Card/MiniCard";

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <>
      <section className={style.slider}>
        <div className="container">
          <div className={style.mainText}>
            <Heading title="Recommended" />
            <MiniCardbtn Instance={swiperInstance} />
          </div>
          <main className={style.mainSlider}>
            <div className={style.sliderWrapper}>
              <MiniCard setSwiperInstance={setSwiperInstance} />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default Slider;
