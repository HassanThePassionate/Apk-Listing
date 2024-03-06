import Image from "next/image";
import React from "react";
import style from "../style/Contentbar.module.css";
import { data } from "@constant/SocialCardData";
const Contentbar = () => {
  return (
    <>
      <div className={style.contentbar}>
        <div className={style.content}>
          <aside className={style.firstside}>
            <h4 className={style.title}>Trending</h4>
            <div className={style.textwidget}>
              <div className={style.gitrendingGame}>
                <div className={style.row}>
                  {data.map((e, index) => {
                    return (
                      <div className={style.giItem} key={index}>
                        <a href="https://gamein.wiki/game/godzilla-x-kong"></a>
                        <div className={style.itemImg}>
                          <Image src={e.img} height={54} width={54} />
                        </div>
                        <div className={style.itemContent}>
                          <h3 className={style.itemTitle}>{e.title}</h3>
                          <div className={style.itemMeta}>
                            <a href="https://gamein.wiki/p-style/idle-rpg">
                              {e.description}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>
          <aside className={style.sideNav}>
            <div className={style.menuContainer}>
              <ul className={style.sidemenu}>
                <li className={style.sideList}>
                  <a href="https://gamein.wiki/quang-cao-gamein-wiki">
                    Quảng cáo
                  </a>
                </li>
                <li className={style.sideList}>
                  <a href="https://gamein.wiki/gioi-thieu-gamein-wiki">
                    Giới Thiệu
                  </a>
                </li>
                <li className={style.sideList}>
                  <a href="https://gamein.wiki/lien-he-gamein-wiki">Liên Hệ</a>
                </li>
                <li className={style.sideList}>
                  <a href="https://gamein.wiki/chinh-sach-quyen-rieng-tu-gamein-wiki">
                    Chính sách quyền riêng tư
                  </a>
                </li>
                <li className={style.sideList}>
                  <a href="https://gamein.wiki/dieu-khoan-dich-vu-gamein-wiki">
                    Điều khoản dịch vụ
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Contentbar;
