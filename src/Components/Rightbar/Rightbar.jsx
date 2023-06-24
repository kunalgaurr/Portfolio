import React from 'react';
import './Rightbar.css';
import { FiMail } from 'react-icons/fi';

export const Rightbar = () => {
  return (
    <div id="rightbar-container">
      <div id="rightbar-wrapper">
        <FiMail id="rightbar-icon" />
        <span id="rightbar-text">kunal_gaur@outlook.com</span>
      </div>
      <div id="rightbar-div"></div>
    </div>
  );
};
