const Sliderbtn = ({ Instance }) => {
  //Function to call the next slide
  const goNexts = () => {
    if (Instance) {
      //Call the next slide
      Instance.slideNext();
    }
  };

  //Function to call the previous slide
  const goPrevs = () => {
    if (Instance) {
      //Call the previous slide
      Instance.slidePrev();
    }
  };
  return (
    <>
      <div className="buttonss">
        <button onClick={goPrevs}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            id="IconChangeColor"
            height="12"
            width="12"
            className="slider-svg"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
              id="mainIconPathAttribute"
              strokeWidth="0.5"
              stroke="#ff0000"
            ></path>
          </svg>
        </button>
        <button onClick={goNexts}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            id="IconChangeColor"
            height="12"
            width="12"
          >
            <path
              d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
              id="mainIconPathAttribute"
              strokeWidth="0.5"
              stroke="#ff0000"
              className="slider-svg"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Sliderbtn;
