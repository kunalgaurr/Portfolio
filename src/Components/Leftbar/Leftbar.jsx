import React from 'react';
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiCodepen,
} from 'react-icons/fi';
import './Leftbar.css';

export const Leftbar = () => {
  return (
    <div id="leftbar-container">
      <FiGithub className="leftbar-icon" />
      <FiInstagram className="leftbar-icon" />
      <FiLinkedin className="leftbar-icon" />
      <FiTwitter className="leftbar-icon" />
      <FiCodepen className="leftbar-icon" />
      <div id="leftbar-div"></div>
    </div>
  );
};
