import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

import { FrontendList } from "../helpers/FrontendList";
import { DesignList } from "../helpers/DesignList";
import ProjectItems from "../components/ProjectItems";

import "../styles/ProjectItems.css";

import portrait from "../assets/illustrations/computer.svg";
import alumnus from "../assets/illustrations/alumnus.svg";
import stars from "../assets/illustrations/stars.svg";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={portrait} alt="логотип" className="portrait" />
        <h2> Olga Shalakhina</h2>
        <div className="prompt">
          <p>Front End Developer</p>
          <a href="https://www.linkedin.com/in/osshalakhina/">
            <LinkedInIcon />
          </a>
          <a href="mailto: osshalakhina@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/osshalakhina">
            <GithubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1 id="skills"> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2 className="title">
              <img src={alumnus} alt="логотип" className="alumnus" />{" "}
              Programming
            </h2>
            <span className="frontendList">
              {FrontendList.map((project, idx) => {
                return (
                  <ProjectItems
                    key={idx}
                    id={idx}
                    name={project.name}
                    image={project.image}
                  />
                );
              })}
            </span>
          </li>
          <li className="item">
            <h2 className="title">
              <img src={stars} alt="логотип" className="stars" />
              Design
            </h2>
            <span className="frontendList">
              {DesignList.map((project, idx) => {
                return (
                  <ProjectItems
                    key={idx}
                    id={idx}
                    name={project.name}
                    image={project.image}
                  />
                );
              })}
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
