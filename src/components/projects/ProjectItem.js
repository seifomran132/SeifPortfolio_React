import React, { Fragment } from "react";
import { PROJECTS } from "./PROJECTSDATA";

function ProjectItem(props) {
  function projectDescriptionGenerator(d) {
    if (props.simplified) {
      return d.substring(0, 20) + "...";
    } else {
      return d;
    }
  }

  const projectItem = PROJECTS.map((proj) => (
    <div key={proj.projectId} className="project col-md-4 col-xs-12">
      <a href={proj.projectLink} className="project-item">
        <figure>
          <img
            src={proj.projectImage}
            alt={proj.projectName}
            className="project-image"
          />
          <div className="caption">
            <h3>{proj.projectName}</h3>
            <p>{projectDescriptionGenerator(proj.projectDesc)}</p>
          </div>
          <div className="overlay"></div>
        </figure>
      </a>
    </div>
  ));

  return <Fragment>{projectItem}</Fragment>;
}

export default ProjectItem;
