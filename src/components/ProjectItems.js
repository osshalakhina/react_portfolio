import React from "react";

function ProjectItems({ image, name }) {
  return (
    <div className="projectItems">
      <div style={{ backgroundImage: `url(${image})` }} className="smImage" />
      <h2> {name} </h2>
    </div>
  );
}

export default ProjectItems;
