import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";

function ProjectItem({ image, name, description, demo, link, id }) {
  return (
    <div className="projectItem">
      <a href={demo}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <div className="description">
          {" "}
          <div className="descriptionInfo">
            <h1> {name} </h1>
            <h2> {description} </h2>
          </div>
          <a href={link}>
            <GitHubIcon />
          </a>
        </div>
      </a>
    </div>
  );
}

export default ProjectItem;
