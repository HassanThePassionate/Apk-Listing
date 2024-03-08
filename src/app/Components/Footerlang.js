import React from "react";

const Footerlang = () => {
  return (
    <>
      <ul class="global-links">
        <li class="glue-item">
          <a
            href="https://support.google.com/?hl=en"
            class="glue-footer-link"
            target="_blank"
          >
            <svg
              role="presentation"
              aria-hidden="true"
              class="glue-icon glue-icon--24px glue-icon--footer-help"
            >
              <svg id="help" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path>
              </svg>
              <use href="#help"></use>
            </svg>{" "}
            Help
          </a>
        </li>
        <li class="glue-item">
          <select
            aria-label="Change language or region"
            name="lang-selector"
            id="lang-selector"
            class="glue-form-dropdown "
          >
            <option value="/intl/af/docs/about/">Afrikaans</option>
            <option value="/intl/en/docs/about/" selected="">
              English
            </option>
            <option value="/intl/am/docs/about/">አማርኛ</option>
            <option value="/intl/ar/docs/about/">العربية</option>
            <option value="/intl/az/docs/about/">azərbaycan</option>
            <option value="/intl/bg/docs/about/">български</option>
            <option value="/intl/bn/docs/about/">বাংলা</option>
            <option value="/intl/ca/docs/about/">català</option>
            <option value="/intl/cs/docs/about/">čeština</option>
            <option value="/intl/da/docs/about/">dansk</option>
            <option value="/intl/de/docs/about/">Deutsch</option>
            <option value="/intl/el/docs/about/">Ελληνικά</option>
            <option value="/intl/en-GB/docs/about/">
              English (United Kingdom)
            </option>
            <option value="/intl/es-419/docs/about/">
              español (Latinoamérica)
            </option>
            <option value="/intl/es/docs/about/">español</option>
            <option value="/intl/et/docs/about/">eesti</option>
            <option value="/intl/eu/docs/about/">euskara</option>
            <option value="/intl/fa/docs/about/">فارسی</option>
            <option value="/intl/fi/docs/about/">suomi</option>
            <option value="/intl/fil/docs/about/">Filipino</option>
            <option value="/intl/fr-CA/docs/about/">français (Canada)</option>
            <option value="/intl/fr/docs/about/">français</option>
            <option value="/intl/gl/docs/about/">galego</option>
            <option value="/intl/gu/docs/about/">ગુજરાતી</option>
            <option value="/intl/hi/docs/about/">हिन्दी</option>
            <option value="/intl/hr/docs/about/">hrvatski</option>
            <option value="/intl/hu/docs/about/">magyar</option>
            <option value="/intl/hy/docs/about/">հայերեն</option>
            <option value="/intl/id/docs/about/">Indonesia</option>
            <option value="/intl/is/docs/about/">íslenska</option>
            <option value="/intl/it/docs/about/">italiano</option>
            <option value="/intl/iw/docs/about/">עברית (ישראל)</option>
            <option value="/intl/ja/docs/about/">日本語</option>
            <option value="/intl/ka/docs/about/">ქართული</option>
            <option value="/intl/km/docs/about/">ខ្មែរ</option>
            <option value="/intl/kn/docs/about/">ಕನ್ನಡ</option>
            <option value="/intl/ko/docs/about/">한국어</option>
            <option value="/intl/lo/docs/about/">ລາວ</option>
            <option value="/intl/lt/docs/about/">lietuvių</option>
            <option value="/intl/lv/docs/about/">latviešu</option>
            <option value="/intl/ml/docs/about/">മലയാളം</option>
            <option value="/intl/mn/docs/about/">монгол</option>
            <option value="/intl/mr/docs/about/">मराठी</option>
            <option value="/intl/ms/docs/about/">Melayu</option>
            <option value="/intl/ne/docs/about/">नेपाली</option>
            <option value="/intl/nl/docs/about/">Nederlands</option>
            <option value="/intl/no/docs/about/">norsk bokmål (Norge)</option>
            <option value="/intl/pl/docs/about/">polski</option>
            <option value="/intl/pt-BR/docs/about/">português (Brasil)</option>
            <option value="/intl/pt-PT/docs/about/">
              português (Portugal)
            </option>
            <option value="/intl/ro/docs/about/">română</option>
            <option value="/intl/ru/docs/about/">русский</option>
            <option value="/intl/si/docs/about/">සිංහල</option>
            <option value="/intl/sk/docs/about/">slovenčina</option>
            <option value="/intl/sl/docs/about/">slovenščina</option>
            <option value="/intl/sr/docs/about/">српски</option>
            <option value="/intl/sv/docs/about/">svenska</option>
            <option value="/intl/sw/docs/about/">Kiswahili</option>
            <option value="/intl/ta/docs/about/">தமிழ்</option>
            <option value="/intl/te/docs/about/">తెలుగు</option>
            <option value="/intl/th/docs/about/">ไทย</option>
            <option value="/intl/tr/docs/about/">Türkçe</option>
            <option value="/intl/uk/docs/about/">українська</option>
            <option value="/intl/ur/docs/about/">اردو</option>
            <option value="/intl/vi/docs/about/">Tiếng Việt</option>
            <option value="/intl/zh-CN/docs/about/">中文 (简体)</option>
            <option value="/intl/zh-HK/docs/about/">中文</option>
            <option value="/intl/zh-TW/docs/about/">中文 (繁體)</option>
            <option value="/intl/zu/docs/about/">isiZulu</option>
          </select>
        </li>
      </ul>
    </>
  );
};

export default Footerlang;
