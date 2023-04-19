import React from 'react';

import './styles.scss';

const SkillsAnimation = () => {
  const url = '../../src/assets/';
  return (
    <div className="circle_container">
      <div className="circle-wrapper">
        <div className="react circle">
          <img src={url + 'react.png'} className="icon-container"></img>
        </div>
        <div className="icon">
          <i className="fa fa-check"></i>
        </div>
      </div>

      <div className="circle-wrapper">
        <div className="js circle">
          <img src={url + 'js.png'} className="icon-container"></img>
        </div>
        <div className="icon"></div>
      </div>

      <div className="circle-wrapper">
        <div className="ts circle">
          <img src={url + 'ts.png'} className="icon-container"></img>
        </div>
        <div className="icon">
          <i className="fa fa-times"></i>
        </div>
      </div>
      <div className="circle-wrapper">
        <div className="redux circle">
          <img src={url + 'redux.png'} className="icon-container"></img>
        </div>
        <div className="icon">
          <i className="fa fa-times"></i>
        </div>
      </div>
    </div>
  );
};

export default SkillsAnimation;
