import React, { useState, useEffect } from "react";
import "./StopWatch.css";

function StopWatch() {
  const [time, setTime] = useState(0);
  const [IsActive, setIsActive] = useState(false);
  const handleStart = () => {
    setIsActive(true);
  };
  const handleStop = () => {
    setIsActive(false);
  };
  const handleReset = () => {
    setTime(0);
  };
  useEffect(() => {
    let interval;
    if (IsActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
        console.log("time", setTime);
      }, 10);
    } else if (!IsActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [IsActive]);
  return (
    <div>
      <h1 className="header-style">StopWatch</h1>
      <div className="time-Style">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="btn-Style">
        <button onClick={handleStart} className="btn-One">
          start
        </button>
        <button onClick={handleStop} className="btn-Two">
          stop
        </button>
        <button onClick={handleReset} className="btn-Three">
          Reset
        </button>
      </div>
    </div>
  );
}
export default StopWatch;
