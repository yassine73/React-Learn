import { useEffect, useState } from "react";
import image from "../assets/bg-clock.jpg";

function DigitalClock() {
  const [timer, setTimer] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    // update useEffect each 1 second using setTimeout(function, time with ms)
    const timeout = setTimeout(updateTimer, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  function updateTimer() {
    setTimer({
      hours: padZero(new Date().getHours()),
      minutes: padZero(new Date().getMinutes()),
      seconds: padZero(new Date().getSeconds()),
    });
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "arial",
            backdropFilter: "blur(10px)",
            width: "100%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "10rem",
          }}
          id="timerContainer"
        >
          {timer.hours > 12 ? timer.hours % 12 : timer.hours} : {timer.minutes}{" "}
          : {timer.seconds} {timer.hours >= 12 ? "PM" : "AM"}
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
