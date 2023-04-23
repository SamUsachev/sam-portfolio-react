import React from 'react';
import { Link } from 'react-router-dom';
import SkillsAnimation from './SkillsAnimation';

import './styles.scss';

const About = () => {
  return (
    <div className="about">
      <div className="about_about-me">
        <h1>About me</h1>
        <span></span>
      </div>
      <div className="about_content">
        <div className="about_content-skills">
          <h3 className="about_content-skills-hard">HARD SKILLS</h3>
          <ul className="ul-left">
            <li>HTML/CSS</li>
            <li>JavaScript/TS</li>
            <li>ReactJS</li>
            <li>Redux Toolkit</li>
            <li>NextJS</li>
            <li>Zustand</li>
          </ul>
        </div>
        <div className="about_about-me-text">
          <p>
            Hey there!
            <br /> &#127891;
            <br />I studied at the Gagarin State Technical University of Saratov
            from 2016 to 2021, for the profession "Information security of
            automated systems".
            <br />
            &#128588;
            <br /> I like to create something new, beautiful and convenient.
            <br />
            &#129309;
            <br /> I am used to feeding on people's positive emotions after
            fulfilling their request with high quality, and therefore, I cannot
            afford to break deadlines, this is unacceptable for me.
            <br />
            &#128084;
            <br /> At this stage, I would like to work officially, in a team
            with good and interesting people, so that we help each other
            develop.
            <br />
            &#128231;
            <br />
            If you are interested in my business card, then write to me:
          </p>
          <a>
            <Link to="/contact">Contact</Link>
          </a>
        </div>
        <div className="about_content-skills">
          <h3 className="about_content-skills-soft">SOFT SKILLS</h3>
          <ul className="ul-right">
            <li>Responsibility</li>
            <li>Initiative</li>
            <li>Analytical thinking</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
      <SkillsAnimation />
    </div>
  );
};

export default About;
