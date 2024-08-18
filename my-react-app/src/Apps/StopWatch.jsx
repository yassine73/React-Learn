import { useRef, useState } from "react";

function StopWatch() {
  const intervalTimer = useRef(0);
  const [timer, setTimer] = useState({
    msec: 0,
    sec: 0,
    min: 0,
  });

  function handleStart() {
    clearInterval(intervalTimer.current);
    const intr = setInterval(() => {
      setTimer((t) => ({
        ...t,
        msec: t.msec < 99 ? t.msec + 1 : 0,
        sec: t.msec >= 99 ? (t.sec < 59 ? t.sec + 1 : 0) : t.sec,
        min: t.sec >= 59 && t.msec >= 99 ? t.min + 1 : t.min,
      }));
    }, 10);

    intervalTimer.current = intr;
  }

  function handleStop() {
    clearInterval(intervalTimer.current);
  }

  function handleReset() {
    setTimer({
      msec: 0,
      sec: 0,
      min: 0,
    });
  }

  function padZero(number) {
    if (number < 10) return "0" + number;
    return number;
  }

  return (
    <>
      <center>
        <div
          style={{
            backgroundColor: "black",
            width: "400px",
            margin: "10px",
            padding: "20px",
            border: "5px solid #ced1d6",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "yellow",
              fontSize: "3rem",
              fontWeight: "bolder",
              fontFamily: "monospace",
              transition: "color 0.5 ease",
            }}
          >
            {padZero(timer.min)}:{padZero(timer.sec)}:{padZero(timer.msec)}
          </p>
          <button className="btn btn-outline-secondary" onClick={handleStart}>
            Start
          </button>
          &nbsp;
          <button className="btn btn-outline-secondary" onClick={handleStop}>
            Stop
          </button>
          &nbsp;
          <button className="btn btn-outline-secondary" onClick={handleReset}>
            Reset
          </button>
        </div>
      </center>
    </>
  );
}

export default StopWatch;
