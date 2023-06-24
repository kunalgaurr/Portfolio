import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div id="about-container">
      <div id="about-top">
        <span className="name">
          <span>2.</span>About<div className="name-div"></div>
        </span>
      </div>
      <div id="about-bottom">
        <div id="about-left">
          <span className="about-text">
            Hey there! I'm a <span>full stack web developer</span> hailing from
            Dehradun, India, and I'm thrilled to introduce myself. As a fresher
            in the industry, I've been honing my skills and delving into the
            exciting world of web development.
          </span>
          <span className="about-text">
            My repertoire includes{' '}
            <span>
              JavaScript, TypeScript, ReactJs, NodeJs, Express, MongoDB, MySQL,
              HTML, CSS, Git,
            </span>{' '}
            and a bunch of other libraries that add flavor to my coding
            endeavors. I'm currently pursuing my B.Tech in the final year at{' '}
            <span>Guru Gobind Singh Indraprastha University</span>, where I've
            been immersing myself in the world of <span>computer science.</span>
          </span>
          <span className="about-text">
            I bring a blend of professionalism, enthusiasm, and a touch of humor
            to my work. With every project, I strive to create clean and
            efficient code while keeping things light-hearted.
          </span>
        </div>
        <div id="about-right">
          <img
            src="/assets/1.jpeg"
            alt=""
            id="about-image"
            className="about-overlay"
          />
          <div className="about-overlay"></div>
        </div>
      </div>
    </div>
  );
};
