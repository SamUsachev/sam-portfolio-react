import React from 'react';

import './styles.scss';

const url = '../../src/assets/';

const ProjectCard = () => {
  return (
    <div className="card">
      <img src={url + 'prj1.jpg'} />
      <h3>Project 1</h3>
      <span></span>
    </div>
  );
};

export default ProjectCard;
