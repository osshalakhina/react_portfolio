import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "./index.scss";

const MainText = () => {
  return (
    <div className="about">
      <div class="content">
        <div class="content__container">
          <p class="content__container__text">Hello</p>

          <ul class="content__container__list">
            <li class="content__container__list__item">world !</li>
            <li class="content__container__list__item">friends !</li>
            <li class="content__container__list__item">users !</li>
            <li class="content__container__list__item">everybody !</li>
          </ul>
        </div>
      </div>
      <h1>
        <span>I am</span> Olga Kosov
      </h1>
      <p>Front End Developer & Designer</p>
      <div className="prompt">
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
  );
};

export default MainText;
