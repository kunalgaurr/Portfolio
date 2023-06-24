import React from 'react';
import './Home.css';

export const Home = () => {
  return (
    <div id="home-container">
      <div className="home-children">
        <span id="home-intro">Hey there! My name is</span>
      </div>
      <div className="home-children">
        <span className="home-title">Kunal Gaur</span>
        <span className="home-title">I build things for the web.</span>
      </div>
      <div className="home-children">
        <span id="home-text">
          As a software engineer specializing in exceptional digital
          experiences, I develop software solutions that offer outstanding user
          experiences by combining technical expertise with design knowledge.
        </span>
      </div>
      <div className="home-children">
        <span id="home-button">Find me on GitHub</span>
      </div>
    </div>
  );
};
