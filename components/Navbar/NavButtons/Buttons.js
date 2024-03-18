"use client";
import { useState, useEffect } from "react";
import style from "./Buttons.module.css";

const Buttons = ({ open, menuhandle }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      return storedTheme || "light-theme";
    }
    return "light-theme";
  });

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
    }
    setTheme(newTheme);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.body.className = theme;
    }
  }, [theme]);
  return (
    <div className={style.buttons}>
      <button className={style.search_icon} onClick={open}>
        <svg viewBox="0 0 24 24">
          <path d="M11 2a9 9 0 0 1 9 9 8.96 8.96 0 0 1-1.968 5.617l3.675 3.676a1 1 0 0 1-1.32 1.497l-.094-.083-3.676-3.675A8.96 8.96 0 0 1 11 20a9 9 0 1 1 0-18m0 2a7 7 0 1 0 0 14c1.89 0 3.606-.749 4.865-1.967a1 1 0 0 1 .077-.09l.09-.077A6.98 6.98 0 0 0 18 11a7 7 0 0 0-7-7"></path>
        </svg>
      </button>

      <button className={style.mode_icon} onClick={toggleTheme}>
        {theme === "dark-theme" ? (
          <svg fill="none" viewBox="0 0 24 24">
            <svg fill="none" viewBox="0 0 24 24">
              <path
                d="M12 20v2m0-20v2m8 8h2M2 12h2m14 6 1.5 1.5m-15-15L6 6m12 0 1.5-1.5m-15 15L6 18m11-6a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                stroke="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </svg>
        ) : (
          <svg fill="none" viewBox="0 0 24 24">
            <svg fill="none" viewBox="0 0 24 24">
              <path
                d="M3 11.449C3 16.724 7.169 21 12.312 21c3.959 0 7.34-2.534 8.688-6.107a8.074 8.074 0 0 1-3.515.8c-4.571 0-8.277-3.8-8.277-8.489 0-1.961.648-3.767 1.737-5.204C6.45 2.678 3 6.65 3 11.449Z"
                stroke="stroke-current"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </svg>
        )}
      </button>

      <button className={style.humburger_btn} onClick={menuhandle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-primary"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default Buttons;
