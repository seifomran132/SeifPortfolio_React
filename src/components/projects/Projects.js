import React from "react";
import ProjectItem from "./ProjectItem";
import "../../style/css/projects.css";

function Projects(props) {
  return (
    <section id="projects-gallary">
      <div className="section-heading">
        <h2>My Projects</h2>
      </div>

      <div className="projects row">
        <ProjectItem simplified />
      </div>
    </section>
  );
}

export default Projects;
