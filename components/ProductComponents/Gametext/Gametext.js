import style from "@/components/ProductComponents/Gametext/Gametext.module.css";

const Gametext = () => {
  return (
    <div className={style.text}>
      <div>
        <div className={style.title}>RAID: Shadow Legends</div>
        <div className={style.description}>Plarium Global Ltd</div>
        <div className={style.sub_des}>
          <span>In-app purchases</span>
        </div>
      </div>
    </div>
  );
};

export default Gametext;
