import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <a href={project.demo}>
        <img src={project.myGif} alt="project" />
      </a>
      <h1>
        <b>About project:</b>
      </h1>
      <p>{project.about}</p>
      <h1>
        <b>Tehnology:</b>{" "}
      </h1>
      <p>{project.tehnology}</p>
      <a href={project.link}>
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
