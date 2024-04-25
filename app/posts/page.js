import React from "react";
import style from "./page.module.css";
import LeftSide from "@/components/l_sidebar/LeftSide";
import Sidebar from "@/components/sidebar/Sidebar";
import Post from "@/components/post/Post";

const page = () => {
  return (
    <div className={style.layout_container}>
      <div className={style.layout_wrap}>
        <div className={style.left}>
          <LeftSide />
        </div>
        <div className={style.layout_main}>
          <Post />
        </div>
        <div className={style.layout_sidebar}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default page;
