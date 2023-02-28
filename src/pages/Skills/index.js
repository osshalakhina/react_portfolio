import React from "react";
import "./index.scss";
import MainImg from "./MainImg";
import MainText from "./MainText";
import ninja from "../../assets/illustrations/ninja.svg";

function Skills() {
  return (
    <div className="home">
      <div className="main">
        <MainText />
        <MainImg />
      </div>
      <div className="Block">
        <div className="skills">Skills</div>
        <ul className="skillsBlock">
          <li>JavaScript, React.js,</li>
          <li>
            HTML5, CSS3 (Grid, Flexbox, Nested by BEM), CSS frameworks
            (Bootstrap, Tailwind CSS), CSS preprocessors (SASS),
          </li>
          <li>UI/UX (Adobe Photoshop, Adobe Illustrator, Adobe XD, Figma).</li>
        </ul>
      </div>

      <div className="phrase">
        <div className="circle"></div>
        <img src={ninja} alt="ninja" className="ninja" />
        <div className="text">
          <p>
            I am ready to go through and solve any difficulties encountered on
            the development path,
          </p>
          <p>
            which would ultimately give you a high-quality and flexible product!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
