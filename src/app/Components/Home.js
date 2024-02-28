import Image from "next/image";
import Link from "next/link";
import React from "react";
const Home = ({ title }) => {
  return (
    <>
      <section className="m-top">
        <div className="container">
          <div className="wrapper">
            <main className="main">
              <div className="p-title">
                <Image
                  src="https://www.youtube.com/img/trending/avatar/trending.png"
                  width={32}
                  height={32}
                />
                <h2>{title}</h2>
                <Link href="/">
                  <div className="veiw">
                    <span>View More</span>
                    <span className="view-icon">
                      <i className="greater-icon">
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
                            fill="#000000"
                          ></path>
                        </svg>
                      </i>
                    </span>
                  </div>
                </Link>
              </div>
              <div className="wrapper-box">
                <div className="boxes">
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/9v08ai07I8aoFLj5M-90nzWPpvyNzOVgA2ZWF9avdW7oS8L9YqF9trVI44SUn2qGTA0=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Temu: Shop Like a Billionaire</h3>
                      </div>
                      <div className="texts">
                        <p>Shopping</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.7</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Tiktok</h3>
                      </div>
                      <div className="texts">
                        <p>Social</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.3</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>WhatsApp Messenger</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.2</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/9v08ai07I8aoFLj5M-90nzWPpvyNzOVgA2ZWF9avdW7oS8L9YqF9trVI44SUn2qGTA0=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Temu: Shop Like a Billionaire</h3>
                      </div>
                      <div className="texts">
                        <p>Shopping</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.7</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/BmUViDVOKNJe0GYJe22hsr7juFndRVbvr1fGmHGXqHfJjNAXjd26bfuGRQpVrpJ6YbA=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Tiktok</h3>
                      </div>
                      <div className="texts">
                        <p>Social</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.3</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>WhatsApp Messenger</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.2</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boxes">
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Instagram</h3>
                      </div>
                      <div className="texts">
                        <p>Social</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.0</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/m3QFdr_7KjqYDnllq-xiqmv_wJuL7uvlVUo-UEZxAK-j0nSOrG1POKoVli4Hv8cKb-0=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>SHEIN-Shopping Online</h3>
                      </div>
                      <div className="texts">
                        <p>Shopping</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.4</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/6RcPDQwPihY591Axu7e6mHhMZ22Q-dqeI5z9GkJiu4Hc-Xha77E6uoeplstYuv5RcnE=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Cash App</h3>
                      </div>
                      <div className="texts">
                        <p>Finace</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.6</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/VRMWkE5p3CkWhJs6nv-9ZsLAs1QOg5ob1_3qg-rckwYW7yp1fMrYZqnEFpk0IoVP4LM=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Instagram</h3>
                      </div>
                      <div className="texts">
                        <p>Social</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.0</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/m3QFdr_7KjqYDnllq-xiqmv_wJuL7uvlVUo-UEZxAK-j0nSOrG1POKoVli4Hv8cKb-0=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>SHEIN-Shopping Online</h3>
                      </div>
                      <div className="texts">
                        <p>Shopping</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.4</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/6RcPDQwPihY591Axu7e6mHhMZ22Q-dqeI5z9GkJiu4Hc-Xha77E6uoeplstYuv5RcnE=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Cash App</h3>
                      </div>
                      <div className="texts">
                        <p>Finace</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.6</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="boxes">
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Telegram</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.3</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Snapchat</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.1</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Messenger</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.0</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/ZU9cSsyIJZo6Oy7HTHiEPwZg0m2Crep-d5ZrfajqtsH-qgUXSqKpNA2FpPDTn-7qA5Q=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Telegram</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.3</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Snapchat</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.1</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="box">
                    <div className="box-image">
                      <Image
                        src="https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s64-rw"
                        alt="app"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="box-text">
                      <div className="texts">
                        <h3>Messenger</h3>
                      </div>
                      <div className="texts">
                        <p>Communication</p>
                      </div>
                      <div className="texts">
                        <span className="rating">4.0</span>
                        <span className="star">
                          <i className="star-icon">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                            </svg>
                          </i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <aside className="side-bar"></aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
