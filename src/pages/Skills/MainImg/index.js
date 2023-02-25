import React from "react";
import portrait from "../../../assets/illustrations/computer.svg";
import "./index.scss";

const MainImg = () => {
  return (
    <div className="imgside">
      <div class="eye-left">
        <div class="upper-pupil"></div>
        <div class="iris"></div>
        <div class="lower-pupil"></div>
      </div>
      <div class="eye-right">
        <div class="upper-pupil"></div>
        <div class="iris"></div>
        <div class="lower-pupil"></div>
      </div>
      <img src={portrait} alt="portrait" className="portrait" />
      <div className="rotation"></div>
    </div>
  );
};

export default MainImg;
