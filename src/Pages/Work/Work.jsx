import React from 'react';
import './Work.css';

export const Work = () => {
  return (
    <div id="work-container">
      <div className="work-children">
        <div className="work-picture"></div>
        <div className="work-body">
          <span id="work-intro">Featured Project</span>
          <span id="work-heading">A social Media Web App: Buzz</span>
          <span id="work-text">
            A social web app for sharing pictures and experiences with your
            friends, builfding communities and exploring your interests, texting
            in real time with your friends. Sharing, liking and commenting on
            your friends posts.
          </span>
          <div id="work-tech">React, Redux, Express, MongoDB, NodeJs</div>
          <div id="links"></div>
        </div>
      </div>
    </div>
  );
};
