import React from 'react';

import '../styles.scss';
import { Link } from 'react-router-dom';

const url = '../../src/assets/';

const Home = () => {
  return (
    <div className="home">
      <div className="home_content">
        <img src={url + 'photoBezFona.png'} className="home_ava" />
        <div className="home_info">
          <h1 className="home_hello">
            Hey, I'm <font className="home_name"> Sam Usachev</font>
          </h1>
          <h2>A Web Developer</h2>
          <div className="home_info-desc">
            <img
              src={url + 'earth.png'}
              alt="earth"
              className="home_info-desc-img"
            />
            <p className="home_info-desc-text"> - based in Russia, Saratov</p>
          </div>
          <div className="home_info-desc">
            <img
              src={url + 'age.png'}
              alt="earth"
              className="home_info-desc-img"
            />
            <p className="home_info-desc-text"> - 24 years old</p>
          </div>
          <div className="home_info-desc">
            <img
              src={url + 'experience.png'}
              alt="earth"
              className="home_info-desc-img"
            />
            <p className="home_info-desc-text"> - more than 1.5 years</p>
          </div>
          <div className="home_info-desc">
            <img
              src={url + 'job.png'}
              alt="earth"
              className="home_info-desc-img"
            />
            <p className="home_info-desc-text"> - freelance</p>
          </div>

          <p className="home_info-text">
            When it is obvious that the goals cannot be reached, don’t adjust
            the goals, adjust the action steps. <h4>- Conifucius</h4>
          </p>
        </div>
      </div>
      <div class="home-hero__socials">
        <div class="home-hero__social">
          <Link
            to="https://github.com/SamUsachev"
            className="home-hero__social-icon-link"
          >
            <img
              src={url + 'git.png'}
              alt="icon"
              className="home-hero__social-icon"
            />
          </Link>
        </div>
        <div class="home-hero__social">
          <Link
            to="https://instagram.com/usachevs1"
            className="home-hero__social-icon-link"
          >
            <img
              src={url + 'inst.png'}
              alt="icon"
              class="home-hero__social-icon"
            />
          </Link>
        </div>
        <div class="home-hero__social">
          <Link
            to="https://t.me/SamUsachev"
            className="home-hero__social-icon-link"
          >
            <img
              src={url + 'tg.png'}
              alt="icon"
              class="home-hero__social-icon"
            />
          </Link>
        </div>
        <div class="home-hero__social">
          <Link
            to="https://vk.com/id93743367"
            className="home-hero__social-icon-link"
          >
            <img
              src={url + 'vk.png'}
              alt="icon"
              class="home-hero__social-icon"
            />
          </Link>
        </div>
      </div>
      <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
      </div>
    </div>
  );
};

export default Home;
