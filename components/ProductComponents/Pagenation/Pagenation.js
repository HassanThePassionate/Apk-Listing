import Buttons from "./Buttons/Buttons";
import style from "./Pagenation.module.css";
const Pagenation = () => {
  return (
    <div className={style.pagination}>
      <Buttons />
    </div>
  );
};

export default Pagenation;
