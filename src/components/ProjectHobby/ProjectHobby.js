import React from "react";

function ProjectHobby({ image, name, description, demo, id }) {
  return (
    <div className="projectItem">
      <a href={demo}>
        <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
        <h1> {name} </h1>
        <h2> {description} </h2>
      </a>
    </div>
  );
}

export default ProjectHobby;
