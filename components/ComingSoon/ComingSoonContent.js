import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo.png";

const ComingSoonContent = () => {
  const [days, setDays] = React.useState("");
  const [hours, setHours] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const [seconds, setSeconds] = React.useState("");

  React.useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const commingSoonTime = () => {
    let endTime = new Date("August 23, 2024 17:00:00 PDT");
    let endTimeParse = Date.parse(endTime) / 1000;
    let now = new Date();
    let nowParse = Date.parse(now) / 1000;
    let timeLeft = endTimeParse - nowParse;
    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <>
      <div className="coming-soon-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="coming-soon-content">
                <Link href="/" className="logo">
                  <Image src={logo} alt="image" width={150} height={40} />
                </Link>

                <h2>We Are Launching Soon!</h2>
                <ul
                  id="timer"
                  className="coming-soon-countdown flex-wrap d-flex"
                >
                  <li
                    id="days"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="days">{days}</span> Days
                  </li>
                  <li
                    id="hours"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="hours">{hours}</span> Hours
                  </li>
                  <li
                    id="minutes"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="minutes">{minutes}</span> Minutes
                  </li>
                  <li
                    id="seconds"
                    className="align-items-center flex-column d-flex justify-content-center"
                  >
                    <span className="seconds">{seconds}</span> Seconds
                  </li>
                </ul>

                <form
                  className="newsletter-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                    autoComplete="off"
                  />
                  <button type="submit" className="default-btn-two">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoonContent;
