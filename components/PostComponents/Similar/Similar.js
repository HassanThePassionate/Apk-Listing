import React from "react";
import Arrowbtn from "../Postdetail/Arrowbtn/Arrowbtn";
import SimilarCard from "../../Cards/SimilarCard/SimilarCard";
import style from "./Similar.module.css";
const Similar = () => {
  return (
    <div className={style.similar_game}>
      <div className={style.title}>
        <h2>Similar Games</h2>
        <Arrowbtn />
      </div>
      <SimilarCard />
    </div>
  );
};

export default Similar;
