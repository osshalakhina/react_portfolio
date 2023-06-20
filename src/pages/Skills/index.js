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
          <li className="skillsTitle">
            Around 1 year of hands-on experience using tools such as:
          </li>
          <li>
            JavaScript, React.js, HTML5, CSS3 (Grid, Flexbox, Nested by BEM),
            CSS frameworks (Bootstrap, Tailwind CSS), CSS preprocessors (SASS),
            SQL fundamentals.
          </li>
          <li className="skillsTitle">Familiarity with:</li>
          <li>
            Scrum, Agile Development environment, Kanban, tools like JIRA,
            Trello, test programs: Selenium IDE, Postman, Playwright, Katalon,
            jMeter, Blazemeter.
          </li>
          <li className="skillsTitle">Expirienced in:</li>
          <li>
            Adobe Creative Suite (Adobe Photoshop, Adobe Illustrator, Adobe XD,
            Adobe Flash Player), Figma, Sketch.
          </li>
          <li className="skillsTitle">Freely work:</li>
          <li>
            Microsoft Office programs (Excel, Word, PowerPoint), Pages, Keynote.
          </li>
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
