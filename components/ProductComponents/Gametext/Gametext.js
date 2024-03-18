import style from "@/components/ProductComponents/Gametext/Gametext.module.css";
import Link from "next/link";

const Gametext = () => {
  return (
    <div className={style.text}>
      <div>
        <div className={style.title}>RAID: Shadow Legends</div>
        <Link href="/version-history" className={style.description}>
          Plarium Global Ltd
        </Link>
        <div className={style.sub_des}>
          <span>In-app purchases</span>
        </div>
      </div>
    </div>
  );
};

export default Gametext;
