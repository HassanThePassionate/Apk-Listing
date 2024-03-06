"use client";
import style from "../style/Postdeatail.module.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Tags from "../Components/PostComponents/Tags";
import Gamedetail from "../Components/PostComponents/Gamedetail";
import Postdetail from "../Components/PostComponents/Postdetail";
import Similar from "../Components/PostComponents/Similar";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="sticky-wrapper">
          <main className="main">
            <div className="container">
              <Tags />
              <div className={style.mainWrapper}>
                <Gamedetail />

                <Postdetail />
                <Similar />
              </div>
            </div>
          </main>

          <aside className={style.Sidebar}></aside>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
