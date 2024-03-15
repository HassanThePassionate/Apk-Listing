import React from "react";

import SimilarCard from "../../Cards/SimilarCard/SimilarCard";
import style from "./Similar.module.css";
import Arrowbtn from "@/components/PostComponents/Postdetail/Arrowbtn/Arrowbtn";

const Similar = () => {
  return (
    <div className={style.similar_game}>
      <div className={style.title1}>
        <h2>Similar Games</h2>
        <Arrowbtn />
      </div>
      <SimilarCard />
    </div>
  );
};

export default Similar;
