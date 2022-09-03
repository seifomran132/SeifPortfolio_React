import React from 'react';
import ProjectItem from './ProjectItem';
import '../../style/css/projects.css'

function Projects(props) {
    return (
        <section id="projects-gallary">
        <div class="section-heading">
          <h2>My Projects</h2>
        </div>

        <div class="projects row">
          <ProjectItem/>
        </div>
      </section>
    );
}

export default Projects;