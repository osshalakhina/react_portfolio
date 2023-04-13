import React from "react";
import ProjectItem from "../../components/ProjectItem";
import ProjectDesign from "../../components/ProjectDesign/ProjectDesign";
import { ProjectList } from "../../helpers/ProjectList";
import { DesignList } from "../../helpers/DesignList";
import "../Projects/index.scss";

function Projects() {
  return (
    <div className="projects">
      <h1> Programming </h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              description={project.description}
              image={project.image}
              demo={project.demo}
              link={project.link}
            />
          );
        })}
      </div>
      <h1> Design and Illustrations </h1>
      <div className="projectList">
        {DesignList.map((project, idx) => {
          return (
            <ProjectDesign
              key={idx}
              id={idx}
              name={project.name}
              description={project.description}
              image={project.image}
              demo={project.demo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
