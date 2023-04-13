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
            HTML5, CSS3 (Grid, Flexbox, animation, Nested by BEM), CSS
            frameworks (Bootstrap, Tailwind CSS), CSS preprocessors (SASS,
            LESS),
          </li>
          <li>
            Adobe Creative Suite (Adobe Photoshop, Adobe Illustrator, Adobe XD,
            Adobe Flash Player), Figma, Sketch,
          </li>
          <li>Microsoft Office programs (Excel, Word, PowerPoint), Keynote.</li>
        </ul>
      </div>

      <div className="phrase">
        <div className="circle"></div>
        <img src={ninja} alt="ninja" className="ninja" />
        <div className="text">
          <p>
            I am creative and always eager to learn, specialize and develop
            myself as much as possible. When I am facing a goal I will invest
            the best to achieve it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
