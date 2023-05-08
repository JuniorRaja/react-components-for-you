import React, { useState } from "react";
import "./DayNightSwitch.css";

const DayNightSwitch = () => {
  const [isNight, setIsNight] = useState(false);

  const toggleDayNight = () => {
    setIsNight(!isNight);
  };

  return (
    <div id="fullpage" className={isNight ? "night" : ""}>
      <div className="section-switch">
        <div className="time-circle">
          <div className="sun"></div>
          <div className="moon">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="stars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="water"></div>
        </div>
        <div id="intro-text">
          <h1>Day Night Switch</h1>
          <h4>by Prasanna R, inspired by pens on Codepen</h4>
        </div>
        <div
          id="switch"
          onClick={toggleDayNight}
          className={isNight ? "switched" : ""}
        >
          <div id="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default DayNightSwitch;
