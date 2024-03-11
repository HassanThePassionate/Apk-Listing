import React from "react";
import Link from "next/link";
import styles from "./Genre.module.css";
const TabList = ({ card }) => {
  return (
    <>
      <h3 className={styles.title}>Genres</h3>
      {card === true ? (
        <ul className={styles.pc}>
          <Link className={styles.menu_iteam} href="/genre/action/">
            <i className={styles.genreAction}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M757.769-114.078 638.076-233.155l-88 88-19.537-19.538q-20.693-20.692-20.693-51.231 0-30.538 20.693-51.23l166.307-166.307q20.692-20.693 51.23-20.693 30.539 0 51.231 20.693l19.538 19.537-88 88 119.077 119.693q10.846 10.846 10.846 25.307 0 14.462-10.846 25.308l-41.538 41.538q-10.846 10.846-25.308 10.846t-25.307-10.846m102.23-618.384-447.846 448.23 17.308 16.693q20.693 20.693 20.693 51.231t-20.693 51.23l-19.537 19.538-88-88-119.693 119.077q-10.846 10.846-25.307 10.846-14.462 0-25.308-10.846l-41.538-41.538q-10.846-10.846-10.846-25.307 0-14.462 10.846-25.308l119.077-119.692-88-88 19.538-19.538q20.692-20.692 51.231-20.692 30.538 0 51.23 20.692l17.078 17.693 448.23-447.846h131.537zm-568.152 192.23-191.846-192.23v-131.537h131.537l191.461 191.846z"></path>
              </svg>
            </i>
            Action
          </Link>
          <Link className={styles.menu_iteam} href="/genre/adventure/">
            <i class={styles.genreAdventure}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="m78.08-260.001 203.843-272.305L441.152-320h101.385L414.231-489.998l147.692-196.923 319.997 426.92z"></path>
              </svg>
            </i>
            Adventure
          </Link>
          <Link className={styles.menu_iteam} href="/genre/casual/">
            <i class={styles.genreCasual}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M181.231-220.001q-40.734 0-63.097-28.769t-16.902-67.845l42.769-302.308q7.835-52.641 46.571-86.858T282-739.999h396q52.692 0 91.428 34.218 38.736 34.217 46.571 86.858l42.769 302.308q5.461 39.076-16.902 67.845t-63.097 28.769q-17.153 0-31.499-5.77t-26.654-18.076l-96.154-96.154H335.538l-96.154 96.154q-12.308 12.307-26.654 18.076t-31.499 5.77M680-443.846q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T680-516.154t-25.615 10.539Q643.846-495.077 643.846-480t10.539 25.615T680-443.846m-80-120q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T600-636.154t-25.615 10.539Q563.846-615.077 563.846-600t10.539 25.615T600-563.846M316.154-446.154h47.692v-70h70v-47.692h-70v-70h-47.692v70h-70v47.692h70z"></path>
              </svg>
            </i>
            Casual
          </Link>
          <Link className={styles.menu_iteam} href="/genre/indie/">
            <i className={styles.genreIndie}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M181.231-220.001q-40.734 0-63.097-28.769t-16.902-67.845l42.769-302.308q7.835-52.641 46.571-86.858T282-739.999h396q52.692 0 91.428 34.218 38.736 34.217 46.571 86.858l42.769 302.308q5.461 39.076-16.902 67.845t-63.097 28.769q-17.153 0-31.499-5.77t-26.654-18.076l-96.154-96.154H335.538l-96.154 96.154q-12.308 12.307-26.654 18.076t-31.499 5.77M680-443.846q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T680-516.154t-25.615 10.539Q643.846-495.077 643.846-480t10.539 25.615T680-443.846m-80-120q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T600-636.154t-25.615 10.539Q563.846-615.077 563.846-600t10.539 25.615T600-563.846M316.154-446.154h47.692v-70h70v-47.692h-70v-70h-47.692v70h-70v47.692h70z"></path>
              </svg>
            </i>
            Indie
          </Link>
          <Link className={styles.menu_iteam} href="/genre/racing/">
            <i className={styles.genreRacing}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M160-210.001q-62.154 0-106.076-43.923Q10-297.846 10-360q0-56.615 37.461-98.692 37.462-42.077 94.077-48.846h14.617l-45.694-38.616H10.001v-47.692h160.768l108.462 64.616 162.308-60.769h145.232l-78.155-100.002h-98.615v-59.998h127.383l79.385 101.845 126.307-55.691v94.614h-95.077l87.693 113.54q15-7.539 31.269-10.924 16.27-3.384 33.039-3.384 62.154 0 106.076 43.923Q949.999-422.154 949.999-360t-43.923 106.076Q862.154-210.001 800-210.001t-106.076-43.923T650.001-360q0-27.769 10.269-53.077t28.808-46.154l-33.847-42.463-139.847 211.693H403.846l-93.847-81.539v17.694q-3.077 60.307-46.384 102.076T160-210.001m0-59.998q37.616 0 63.808-26.193 26.193-26.192 26.193-63.808t-26.193-63.808Q197.616-450.001 160-450.001t-63.808 26.193T69.999-360t26.193 63.808q26.192 26.193 63.808 26.193m640 0q37.616 0 63.808-26.193 26.193-26.192 26.193-63.808t-26.193-63.808T800-450.001t-63.808 26.193Q709.999-397.616 709.999-360t26.193 63.808T800-269.999"></path>
              </svg>
            </i>
            Racing
          </Link>
          <Link className={styles.menu_iteam} href="/genre/rpg/">
            <i className={styles.genreRpg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M421.001-459.999q-22.447 0-36.877-16.961t-10.584-39.576l10.077-61.999q6.461-35.692 33.769-58.576 27.307-22.885 62.702-22.885 36.219 0 63.526 22.885 27.308 22.884 33.769 58.576l10.077 61.999q3.846 22.615-10.584 39.576t-36.877 16.961zm-283.877 33.231q-19.584 1-33.913-7.593T84.54-460.999q-2-7.846-.808-15.499 1.193-7.654 4.423-14.628 0 .871-1-3.488-1.615-2-8.461-20.538-1.615-10.461 2.637-19.769t11.055-16.076q.385 0 1.615-1.616 1.735-16.239 13.445-27.35 11.709-11.111 28.632-11.111 1.846 0 16.307 3.231l2.616-.615q4.23-4.424 11-6.635 6.769-2.212 14.384-2.212 9.489 0 16.821 2.923t11.611 9.25q.856 0 1.284.452t1.284.452q11.692 1 20.794 7.367t13.436 17.402q1.615 6.231 1.308 11.577-.308 5.346-2.308 10.577 0 .615 1 3.615 6.231 6.231 9.461 13.192t3.231 14.808q0 2.846-4.846 17.923-.615 1.23 0 3.615.385 1.154 1.615 13.692 0 17.991-15.031 30.841t-36.506 12.851zm653.43 2.154q-28.17 0-48.4-20.16-20.231-20.159-20.231-48.468 0-10.294 2.982-19.231T733-529.921l-24.032-21.212q-8.583-6.787-3.007-17.056t15.87-10.269h68.628q28.309 0 48.347 20.065 20.039 20.065 20.039 48.241v17.077q0 28-20.061 48.23-20.06 20.231-48.23 20.231M20.001-248.462v-48.768q0-40.539 41.83-65.885 41.828-25.346 108.565-25.346 12.22 0 23.451.693 11.231.692 21.461 2.692-11.307 17.692-17.153 37.657t-5.846 42.534v56.423zm240 0v-54.999q0-57.308 60.988-91.923t159.117-34.615q99.047 0 159.47 34.615t60.423 91.923v54.999zm529.998-139.999q67.5 0 108.75 25.346t41.25 65.885v48.768H767.691v-56.423q0-22.569-5.346-42.534t-16.038-37.657q10.231-2 21.225-2.692t22.467-.693"></path>
              </svg>
            </i>
            RPG
          </Link>
          <Link className={styles.menu_iteam} href="/genre/simulation-games/">
            <i className={styles.genreSimulationGames}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M22 13h-7.5a3.5 3.5 0 1 1 0-7H22a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2M9.023 9A5.51 5.51 0 0 1 14.5 4h4.971C17.022 1.027 13.319-.427 9.452.106 4.786.748 1.026 4.415.181 9zm5.477 6a5.51 5.51 0 0 1-5.292-4H0a10.97 10.97 0 0 0 2.26 6.674c.477.624.74 1.461.74 2.355V21c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3h.494a5.015 5.015 0 0 0 4.957-4.345L21.67 15h-7.169Z"></path>
              </svg>
            </i>
            Simulation
          </Link>
          <Link className={styles.menu_iteam} href="/genre/sports/">
            <i className={styles.genreSports}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M139.693-173.847 96.924-216l172.078-172.078q30.231-30.23 40.769-73.797t10.538-133.509q0-55.638 24.846-109.357t70.539-99.412q84.845-84.846 186.412-96.846t167.124 54.846q66.23 66.404 54.23 167.855t-96.23 185.682q-45.692 45.692-99.192 70.153t-109.577 24.462q-89.307 0-132.383 10.423t-74.308 41.653zM415.077-494q47 46 127 33.808t143-75.193q64-64 76.5-143.5t-34.5-124.5Q679.846-851 601.769-838.808q-78.076 12.193-142.692 76.193-63 62.615-76.5 142.115t32.5 126.5m308 433.998q-57.749 0-98.874-41.124T583.079-200t41.124-98.874q41.125-41.125 98.874-41.125 57.75 0 98.874 41.125 41.125 41.125 41.125 98.874t-41.125 98.874-98.874 41.125Z"></path>
              </svg>
            </i>
            Sports
          </Link>
          <Link className={styles.menu_iteam} href="/genre/strategy/">
            <i className={styles.genreStrategy}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M155.387-115.387v-126.536q0-29.923 21.192-51.115t51.115-21.192h47.385l24.692-175.771H195.387v-59.998h569.226v59.998H660.229l24.692 175.771h47.385q29.923 0 51.115 21.192t21.192 51.115v126.536zm131.846-482.304L232.31-844.613q30.692 21.538 60.5 37.576 29.807 16.038 65.653 16.038 36.538 0 66.768-15.691T480-844.997q24.538 22.615 54.769 38.307 30.23 15.691 66.384 15.691 34.692 0 64.114-15.845t62.808-37.769l-54.693 246.922z"></path>
              </svg>
            </i>
            Strategy
          </Link>
        </ul>
      ) : (
        <ul className={styles.android}>
          <a className={styles.menu_iteam} href="/genre/action-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M757.769-114.078 638.076-233.155l-88 88-19.537-19.538q-20.693-20.692-20.693-51.231 0-30.538 20.693-51.23l166.307-166.307q20.692-20.693 51.23-20.693 30.539 0 51.231 20.693l19.538 19.537-88 88 119.077 119.693q10.846 10.846 10.846 25.307 0 14.462-10.846 25.308l-41.538 41.538q-10.846 10.846-25.308 10.846t-25.307-10.846m102.23-618.384-447.846 448.23 17.308 16.693q20.693 20.693 20.693 51.231t-20.693 51.23l-19.537 19.538-88-88-119.693 119.077q-10.846 10.846-25.307 10.846-14.462 0-25.308-10.846l-41.538-41.538q-10.846-10.846-10.846-25.307 0-14.462 10.846-25.308l119.077-119.692-88-88 19.538-19.538q20.692-20.692 51.231-20.692 30.538 0 51.23 20.692l17.078 17.693 448.23-447.846h131.537zm-568.152 192.23-191.846-192.23v-131.537h131.537l191.461 191.846z"></path>
              </svg>
            </i>
            Action
          </a>
          <a className={styles.menu_iteam} href="/genre/adventure-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="m78.08-260.001 203.843-272.305L441.152-320h101.385L414.231-489.998l147.692-196.923 319.997 426.92z"></path>
              </svg>
            </i>
            Adventure
          </a>
          <a className={styles.menu_iteam} href="/genre/casual-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M181.231-220.001q-40.734 0-63.097-28.769t-16.902-67.845l42.769-302.308q7.835-52.641 46.571-86.858T282-739.999h396q52.692 0 91.428 34.218 38.736 34.217 46.571 86.858l42.769 302.308q5.461 39.076-16.902 67.845t-63.097 28.769q-17.153 0-31.499-5.77t-26.654-18.076l-96.154-96.154H335.538l-96.154 96.154q-12.308 12.307-26.654 18.076t-31.499 5.77M680-443.846q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T680-516.154t-25.615 10.539Q643.846-495.077 643.846-480t10.539 25.615T680-443.846m-80-120q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T600-636.154t-25.615 10.539Q563.846-615.077 563.846-600t10.539 25.615T600-563.846M316.154-446.154h47.692v-70h70v-47.692h-70v-70h-47.692v70h-70v47.692h70z"></path>
              </svg>
            </i>
            Casual
          </a>
          <a className={styles.menu_iteam} href="/genre/indie-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M181.231-220.001q-40.734 0-63.097-28.769t-16.902-67.845l42.769-302.308q7.835-52.641 46.571-86.858T282-739.999h396q52.692 0 91.428 34.218 38.736 34.217 46.571 86.858l42.769 302.308q5.461 39.076-16.902 67.845t-63.097 28.769q-17.153 0-31.499-5.77t-26.654-18.076l-96.154-96.154H335.538l-96.154 96.154q-12.308 12.307-26.654 18.076t-31.499 5.77M680-443.846q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T680-516.154t-25.615 10.539Q643.846-495.077 643.846-480t10.539 25.615T680-443.846m-80-120q15.077 0 25.615-10.539 10.539-10.538 10.539-25.615t-10.539-25.615T600-636.154t-25.615 10.539Q563.846-615.077 563.846-600t10.539 25.615T600-563.846M316.154-446.154h47.692v-70h70v-47.692h-70v-70h-47.692v70h-70v47.692h70z"></path>
              </svg>
            </i>
            Indie
          </a>
          <a className={styles.menu_iteam} href="/genre/racing-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M160-210.001q-62.154 0-106.076-43.923Q10-297.846 10-360q0-56.615 37.461-98.692 37.462-42.077 94.077-48.846h14.617l-45.694-38.616H10.001v-47.692h160.768l108.462 64.616 162.308-60.769h145.232l-78.155-100.002h-98.615v-59.998h127.383l79.385 101.845 126.307-55.691v94.614h-95.077l87.693 113.54q15-7.539 31.269-10.924 16.27-3.384 33.039-3.384 62.154 0 106.076 43.923Q949.999-422.154 949.999-360t-43.923 106.076Q862.154-210.001 800-210.001t-106.076-43.923T650.001-360q0-27.769 10.269-53.077t28.808-46.154l-33.847-42.463-139.847 211.693H403.846l-93.847-81.539v17.694q-3.077 60.307-46.384 102.076T160-210.001m0-59.998q37.616 0 63.808-26.193 26.193-26.192 26.193-63.808t-26.193-63.808Q197.616-450.001 160-450.001t-63.808 26.193T69.999-360t26.193 63.808q26.192 26.193 63.808 26.193m640 0q37.616 0 63.808-26.193 26.193-26.192 26.193-63.808t-26.193-63.808T800-450.001t-63.808 26.193Q709.999-397.616 709.999-360t26.193 63.808T800-269.999"></path>
              </svg>
            </i>
            Racing
          </a>
          <a className={styles.menu_iteam} href="/genre/role-playing/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M421.001-459.999q-22.447 0-36.877-16.961t-10.584-39.576l10.077-61.999q6.461-35.692 33.769-58.576 27.307-22.885 62.702-22.885 36.219 0 63.526 22.885 27.308 22.884 33.769 58.576l10.077 61.999q3.846 22.615-10.584 39.576t-36.877 16.961zm-283.877 33.231q-19.584 1-33.913-7.593T84.54-460.999q-2-7.846-.808-15.499 1.193-7.654 4.423-14.628 0 .871-1-3.488-1.615-2-8.461-20.538-1.615-10.461 2.637-19.769t11.055-16.076q.385 0 1.615-1.616 1.735-16.239 13.445-27.35 11.709-11.111 28.632-11.111 1.846 0 16.307 3.231l2.616-.615q4.23-4.424 11-6.635 6.769-2.212 14.384-2.212 9.489 0 16.821 2.923t11.611 9.25q.856 0 1.284.452t1.284.452q11.692 1 20.794 7.367t13.436 17.402q1.615 6.231 1.308 11.577-.308 5.346-2.308 10.577 0 .615 1 3.615 6.231 6.231 9.461 13.192t3.231 14.808q0 2.846-4.846 17.923-.615 1.23 0 3.615.385 1.154 1.615 13.692 0 17.991-15.031 30.841t-36.506 12.851zm653.43 2.154q-28.17 0-48.4-20.16-20.231-20.159-20.231-48.468 0-10.294 2.982-19.231T733-529.921l-24.032-21.212q-8.583-6.787-3.007-17.056t15.87-10.269h68.628q28.309 0 48.347 20.065 20.039 20.065 20.039 48.241v17.077q0 28-20.061 48.23-20.06 20.231-48.23 20.231M20.001-248.462v-48.768q0-40.539 41.83-65.885 41.828-25.346 108.565-25.346 12.22 0 23.451.693 11.231.692 21.461 2.692-11.307 17.692-17.153 37.657t-5.846 42.534v56.423zm240 0v-54.999q0-57.308 60.988-91.923t159.117-34.615q99.047 0 159.47 34.615t60.423 91.923v54.999zm529.998-139.999q67.5 0 108.75 25.346t41.25 65.885v48.768H767.691v-56.423q0-22.569-5.346-42.534t-16.038-37.657q10.231-2 21.225-2.692t22.467-.693"></path>
              </svg>
            </i>
            Role Playing
          </a>
          <a className={styles.menu_iteam} href="/genre/sports-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M139.693-173.847 96.924-216l172.078-172.078q30.231-30.23 40.769-73.797t10.538-133.509q0-55.638 24.846-109.357t70.539-99.412q84.845-84.846 186.412-96.846t167.124 54.846q66.23 66.404 54.23 167.855t-96.23 185.682q-45.692 45.692-99.192 70.153t-109.577 24.462q-89.307 0-132.383 10.423t-74.308 41.653zM415.077-494q47 46 127 33.808t143-75.193q64-64 76.5-143.5t-34.5-124.5Q679.846-851 601.769-838.808q-78.076 12.193-142.692 76.193-63 62.615-76.5 142.115t32.5 126.5m308 433.998q-57.749 0-98.874-41.124T583.079-200t41.124-98.874q41.125-41.125 98.874-41.125 57.75 0 98.874 41.125 41.125 41.125 41.125 98.874t-41.125 98.874-98.874 41.125Z"></path>
              </svg>
            </i>
            Sports
          </a>
          <a className={styles.menu_iteam} href="/genre/strategy-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M155.387-115.387v-126.536q0-29.923 21.192-51.115t51.115-21.192h47.385l24.692-175.771H195.387v-59.998h569.226v59.998H660.229l24.692 175.771h47.385q29.923 0 51.115 21.192t21.192 51.115v126.536zm131.846-482.304L232.31-844.613q30.692 21.538 60.5 37.576 29.807 16.038 65.653 16.038 36.538 0 66.768-15.691T480-844.997q24.538 22.615 54.769 38.307 30.23 15.691 66.384 15.691 34.692 0 64.114-15.845t62.808-37.769l-54.693 246.922z"></path>
              </svg>
            </i>
            Strategy
          </a>
          <a className={styles.menu_iteam} href="/genre/card-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M602.615-383.386 642.845-529l-124.691-86.076-40.23 145.614zM172.309-197.769l-24.923-11.768q-31.385-13.385-42.385-45.077-11-31.693 3-62.308l64.308-138.691zm167.692 73.153q-33 0-56.5-23.807-23.5-23.808-23.5-56.808v-213.998l97.769 268.613q3 7.385 5.385 13.693t7.384 12.307zm190.23-21.924q-28.307 10.231-55.846-2.231t-37.769-40.769L266.925-657q-10.231-28.307 2.423-55.538t40.961-37.461L589-851.921q28.307-10.231 55.538 2.423t37.461 40.961l170.307 467.46q10.231 28.307-2.231 55.538t-40.769 37.461z"></path>
              </svg>
            </i>
            Card
          </a>
          <a className={styles.menu_iteam} href="/genre/simulation-game/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M22 13h-7.5a3.5 3.5 0 1 1 0-7H22a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2M9.023 9A5.51 5.51 0 0 1 14.5 4h4.971C17.022 1.027 13.319-.427 9.452.106 4.786.748 1.026 4.415.181 9zm5.477 6a5.51 5.51 0 0 1-5.292-4H0a10.97 10.97 0 0 0 2.26 6.674c.477.624.74 1.461.74 2.355V21c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3h.494a5.015 5.015 0 0 0 4.957-4.345L21.67 15h-7.169Z"></path>
              </svg>
            </i>
            Simulation
          </a>
          <a className={styles.menu_iteam} href="/genre/arcade-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M450.001-611.691v-32.386q-39.385-9.923-64.692-41.807-25.308-31.884-25.308-74.115 0-49.922 35.038-84.96 35.039-35.038 84.961-35.038t84.961 35.038 35.038 84.96q0 42.231-25.308 74.115-25.307 31.884-64.692 41.807v32.386l273.846 157.538q17.077 9.846 26.615 26.615 9.539 16.769 9.539 36.462v62.152q0 19.693-9.539 36.462t-26.615 26.615L516.154-111.771q-17.077 9.846-36.154 9.846t-36.154-9.846L176.155-265.847q-17.077-9.846-26.615-26.615-9.539-16.769-9.539-36.462v-62.152q0-19.693 9.539-36.462t26.615-26.615zm0 201.69V-542.77L250.46-427.691l223.386 128.846q3.077 1.924 6.154 1.924t6.154-1.924l223.001-128.846L509.999-542.77v132.769z"></path>
              </svg>
            </i>
            Arcade
          </a>
          <a className={styles.menu_iteam} href="/genre/puzzle-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M355.077-140.001H200q-24.922 0-42.461-17.538-17.538-17.539-17.538-42.461v-155.077q41.077-5.001 70.538-34.154T240-460t-29.461-70.769-70.538-34.154V-720q0-24.922 17.538-42.461 17.539-17.538 42.461-17.538h160q5.385-38.153 33.423-62.922T460-867.69t66.577 24.769T560-779.999h160q24.922 0 42.461 17.538 17.538 17.539 17.538 42.461v160q38.153 5.385 62.922 33.423T867.69-460t-24.769 66.577T779.999-360v160q0 24.922-17.538 42.461-17.539 17.538-42.461 17.538H564.923q-5.385-43.077-35.154-71.538T460-240t-69.769 28.461-35.154 71.538"></path>
              </svg>
            </i>
            Puzzle
          </a>
          <a className={styles.menu_iteam} href="/genre/board-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M311.539-263.079q20.192 0 34.327-14.134T360-311.539t-14.134-34.327Q331.731-360 311.539-360t-34.326 14.134-14.134 34.327 14.134 34.326 34.326 14.134m0-336.921q20.192 0 34.327-14.134T360-648.461t-14.134-34.326q-14.135-14.134-34.327-14.134t-34.326 14.134-14.134 34.326 14.134 34.327T311.539-600M480-431.539q20.192 0 34.326-14.135T528.461-480t-14.135-34.326Q500.192-528.461 480-528.461t-34.326 14.135T431.539-480t14.135 34.326q14.134 14.135 34.326 14.135m168.461 168.46q20.192 0 34.326-14.134t14.134-34.326-14.134-34.327T648.461-360t-34.327 14.134Q600-331.731 600-311.539t14.134 34.326 34.327 14.134m0-336.921q20.192 0 34.326-14.134t14.134-34.327-14.134-34.326-34.326-14.134-34.327 14.134T600-648.461t14.134 34.327Q628.269-600 648.461-600M212.309-140.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h535.382q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21z"></path>
              </svg>
            </i>
            Board
          </a>
          <a className={styles.menu_iteam} href="/genre/music/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M401.154-143.848q-57.749 0-98.874-41.124t-41.125-98.874 41.125-98.874 98.874-41.125q23 0 43.077 6.846 20.077 6.847 36.923 20.539v-419.692h217.691v130.767H541.152v401.539q0 57.749-41.124 98.874t-98.874 41.124"></path>
              </svg>
            </i>
            Music
          </a>
          <a className={styles.menu_iteam} href="/genre/educational-games/">
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
              >
                <path d="M818.46-312.31v-254.46L480-383.079 81.541-600 480-816.921 878.458-600v287.69zM480-166.157l-259.999-141.23v-181.537L480-347.694l259.999-141.23v181.537z"></path>
              </svg>
            </i>
            Educational
          </a>
        </ul>
      )}
    </>
  );
};

export default TabList;