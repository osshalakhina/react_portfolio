import React from "react";
import ProjectItem from "../../components/ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
