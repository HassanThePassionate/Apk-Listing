"use client";
import style from "../style/Postdeatail.module.css";

import Gamedetail from "../Components/PostComponents/Gamedetail";
import Postdetail from "../Components/PostComponents/Postdetail";
import Similar from "../Components/PostComponents/Similar";

const page = () => {
  return (
    <>
      <div className="container">
        <div className="sticky-wrapper">
          <main className="main">
            <div className={style.mainWrapper}>
              <Gamedetail />

              <Postdetail />
              <Similar />
            </div>
          </main>

          <aside className={style.Sidebar}></aside>
        </div>
      </div>
    </>
  );
};

export default page;
