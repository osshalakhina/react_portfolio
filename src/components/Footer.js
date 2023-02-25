import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; Olga Kosov, 2023</p>
    </div>
  );
}

export default Footer;
