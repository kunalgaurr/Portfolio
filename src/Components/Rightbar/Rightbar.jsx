import React from 'react';
import './Rightbar.css';
import { FiMail } from 'react-icons/fi';

export const Rightbar = () => {
  return (
    <div id="rightbar-container">
      <a href="mailto:kunal_gaur@outlook.com" id="rightbar-wrapper">
        <FiMail id="rightbar-icon" />
        <span id="rightbar-text">kunal_gaur@outlook.com</span>
      </a>
      <div id="rightbar-div"></div>
    </div>
  );
};
