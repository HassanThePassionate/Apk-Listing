import "../style/Reset.css";

import "../style/Variable.css";
import "../style/utility.css";
import style from "./page.module.css";
import Home from "@/components/HomeComponents/Home";
import LeftSide from "@/components/l_sidebar/LeftSide";

const Page = () => {
  return (
    <>
      <div className={style.layout_container}>
        <div className={style.layout_wrap}>
          <div className={style.left}>
            <LeftSide />
          </div>
          <div className={style.layout_main}>
            <Home />
          </div>
          <div className={style.layout_sidebar}></div>
        </div>
      </div>
    </>
  );
};

export default Page;
