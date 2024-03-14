import React from "react";
import SimilarCard from "../Cards/SimilarCard/SimilarCard";
import Arrowbtn from "../PostComponents/Postdetail/Arrowbtn/Arrowbtn";
import style from "./List.module.css";
const List = () => {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>Similar Games</h2>
          <Arrowbtn />
        </div>
        <SimilarCard />
      </div>

      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>More by OppanaGames FZC LLC</h2>
          <Arrowbtn />
        </div>
        <SimilarCard />
      </div>

      <div className={style.wrapper}>
        <div className={style.title}>
          <h2>More by OppanaGames FZC LLC</h2>
          <Arrowbtn />
        </div>
        <SimilarCard />
      </div>
    </>
  );
};

export default List;
