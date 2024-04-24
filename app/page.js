import "../style/Reset.css";
import "../style/button.css";
import "../style/Variable.css";
import "../style/utility.css";
import style from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Home from "@/components/HomeComponents/Home";
import ThumbCard from "@/components/Cards/ThumbCard/ThumbCard";
import LeftSide from "@/components/l_sidebar/LeftSide";

const Page = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
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
      </div>
      <ThumbCard />
      <Footer />
    </>
  );
};

export default Page;
