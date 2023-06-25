import React from 'react';
import './Topbar.css';

export const Topbar = () => {
  return (
    <div id="topbar-container">
      <span id="topbar-left">Kunal.</span>
      <div id="topbar-right">
        <span className="topbar-children">
          <span>1.</span>Home
        </span>
        <span className="topbar-children">
          <span>2.</span>About
        </span>
        <span className="topbar-children">
          <span>3.</span>Education
        </span>
        <span className="topbar-children">
          <span>4.</span>Work
        </span>
        <span className="topbar-children">
          <span>5.</span>Contact
        </span>
        <span id="topbar-button">Resume</span>
      </div>
    </div>
  );
};
