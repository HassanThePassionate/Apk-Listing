import React from "react";
import style from "./GlobalFooter.module.css";
import Link from "next/link";
const GlobalFooter = () => {
  return (
    <>
      <ul className={style.global_links}>
        <li className={style.footer_iteam}>
          <Link
            href='https://support.google.com/?hl=en'
            className={style.footer_link}
            target='_blank'
          >
            <svg
              role='presentation'
              aria-hidden='true'
              className='glue-icon glue-icon--24px glue-icon--footer-help'
              style={{ marginBottom: "4px", marginRight: "4px" }}
            >
              <svg id='help' viewBox='0 0 24 24'>
                <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z'></path>
              </svg>
              <use href='#help'></use>
            </svg>
          </Link>
        </li>
        <li className={style.footer_iteam}>
          <select
            aria-label='Change language or region'
            name='lang-selector'
            id='lang-selector'
            className={style.dropdown}
          >
            <option defaultValue='/intl/af/docs/about/'>Afrikaans</option>
            <option defaultValue='/intl/en/docs/about/' selected=''>
              English
            </option>
            <option defaultValue='/intl/am/docs/about/'>አማርኛ</option>
            <option defaultValue='/intl/ar/docs/about/'>العربية</option>
            <option defaultValue='/intl/az/docs/about/'>azərbaycan</option>
            <option defaultValue='/intl/bg/docs/about/'>български</option>
            <option defaultValue='/intl/bn/docs/about/'>বাংলা</option>
            <option defaultValue='/intl/ca/docs/about/'>català</option>
            <option defaultValue='/intl/cs/docs/about/'>čeština</option>
            <option defaultValue='/intl/da/docs/about/'>dansk</option>
            <option defaultValue='/intl/de/docs/about/'>Deutsch</option>
            <option defaultValue='/intl/el/docs/about/'>Ελληνικά</option>
            <option defaultValue='/intl/en-GB/docs/about/'>
              English (United Kingdom)
            </option>
            <option defaultValue='/intl/es-419/docs/about/'>
              español (Latinoamérica)
            </option>
            <option defaultValue='/intl/es/docs/about/'>español</option>
            <option defaultValue='/intl/et/docs/about/'>eesti</option>
            <option defaultValue='/intl/eu/docs/about/'>euskara</option>
            <option defaultValue='/intl/fa/docs/about/'>فارسی</option>
            <option defaultValue='/intl/fi/docs/about/'>suomi</option>
            <option defaultValue='/intl/fil/docs/about/'>Filipino</option>
            <option defaultValue='/intl/fr-CA/docs/about/'>
              français (Canada)
            </option>
            <option defaultValue='/intl/fr/docs/about/'>français</option>
            <option defaultValue='/intl/gl/docs/about/'>galego</option>
            <option defaultValue='/intl/gu/docs/about/'>ગુજરાતી</option>
            <option defaultValue='/intl/hi/docs/about/'>हिन्दी</option>
            <option defaultValue='/intl/hr/docs/about/'>hrvatski</option>
            <option defaultValue='/intl/hu/docs/about/'>magyar</option>
            <option defaultValue='/intl/hy/docs/about/'>հայերեն</option>
            <option defaultValue='/intl/id/docs/about/'>Indonesia</option>
            <option defaultValue='/intl/is/docs/about/'>íslenska</option>
            <option defaultValue='/intl/it/docs/about/'>italiano</option>
            <option defaultValue='/intl/iw/docs/about/'>עברית (ישראל)</option>
            <option defaultValue='/intl/ja/docs/about/'>日本語</option>
            <option defaultValue='/intl/ka/docs/about/'>ქართული</option>
            <option defaultValue='/intl/km/docs/about/'>ខ្មែរ</option>
            <option defaultValue='/intl/kn/docs/about/'>ಕನ್ನಡ</option>
            <option defaultValue='/intl/ko/docs/about/'>한국어</option>
            <option defaultValue='/intl/lo/docs/about/'>ລາວ</option>
            <option defaultValue='/intl/lt/docs/about/'>lietuvių</option>
            <option defaultValue='/intl/lv/docs/about/'>latviešu</option>
            <option defaultValue='/intl/ml/docs/about/'>മലയാളം</option>
            <option defaultValue='/intl/mn/docs/about/'>монгол</option>
            <option defaultValue='/intl/mr/docs/about/'>मराठी</option>
            <option defaultValue='/intl/ms/docs/about/'>Melayu</option>
            <option defaultValue='/intl/ne/docs/about/'>नेपाली</option>
            <option defaultValue='/intl/nl/docs/about/'>Nederlands</option>
            <option defaultValue='/intl/no/docs/about/'>
              norsk bokmål (Norge)
            </option>
            <option defaultValue='/intl/pl/docs/about/'>polski</option>
            <option defaultValue='/intl/pt-BR/docs/about/'>
              português (Brasil)
            </option>
            <option defaultValue='/intl/pt-PT/docs/about/'>
              português (Portugal)
            </option>
            <option defaultValue='/intl/ro/docs/about/'>română</option>
            <option defaultValue='/intl/ru/docs/about/'>русский</option>
            <option defaultValue='/intl/si/docs/about/'>සිංහල</option>
            <option defaultValue='/intl/sk/docs/about/'>slovenčina</option>
            <option defaultValue='/intl/sl/docs/about/'>slovenščina</option>
            <option defaultValue='/intl/sr/docs/about/'>српски</option>
            <option defaultValue='/intl/sv/docs/about/'>svenska</option>
            <option defaultValue='/intl/sw/docs/about/'>Kiswahili</option>
            <option defaultValue='/intl/ta/docs/about/'>தமிழ்</option>
            <option defaultValue='/intl/te/docs/about/'>తెలుగు</option>
            <option defaultValue='/intl/th/docs/about/'>ไทย</option>
            <option defaultValue='/intl/tr/docs/about/'>Türkçe</option>
            <option defaultValue='/intl/uk/docs/about/'>українська</option>
            <option defaultValue='/intl/ur/docs/about/'>اردو</option>
            <option defaultValue='/intl/vi/docs/about/'>Tiếng Việt</option>
            <option defaultValue='/intl/zh-CN/docs/about/'>中文 (简体)</option>
            <option defaultValue='/intl/zh-HK/docs/about/'>中文</option>
            <option defaultValue='/intl/zh-TW/docs/about/'>中文 (繁體)</option>
            <option defaultValue='/intl/zu/docs/about/'>isiZulu</option>
          </select>
        </li>
      </ul>
    </>
  );
};

export default GlobalFooter;
