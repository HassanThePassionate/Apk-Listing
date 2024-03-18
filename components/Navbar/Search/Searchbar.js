import React, { useState, useRef } from "react";
import style from "./Search.module.css";
import { useRouter } from "next/navigation";
const Searchbar = () => {
  const [input, setInput] = useState("");
  const clear = useRef(null);
  const router = useRouter();
  const handleChange = (e) => {
    setInput(e.target.value);
    clear.current.style.transform = e.target.value ? "scale(1)" : "scale(0)";
  };

  const handleClear = () => {
    setInput("");
    clear.current.style.transform = "scale(0)";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/products");
  };

  return (
    <form className={style.search} onSubmit={handleSubmit}>
      <i className={style.search_icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 -960 960 960"
        >
          <path d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75T120-585t75-181 181.5-75 181 75T632-584.85Q632-542 618-502t-42 75l264 262zM377-389q81.25 0 138.125-57.5T572-585t-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389"></path>
        </svg>
      </i>
      <input
        type="text"
        placeholder="Search"
        className={style.input}
        value={input}
        onChange={handleChange}
      />
      <span className={style.clear} ref={clear}>
        <i className={style.icon} onClick={handleClear}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="329pt"
            height="329pt"
            viewBox="0 0 329.269 329"
          >
            <path d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"></path>
          </svg>
        </i>
      </span>
    </form>
  );
};

export default Searchbar;
