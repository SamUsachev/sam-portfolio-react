import React from 'react';
import ProjectCard from './ProjectCard';

import './styles.scss';

const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <span></span>
      <div className="projects_card-container">
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
