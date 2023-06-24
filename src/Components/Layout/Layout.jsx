import React from 'react';
import { Leftbar } from '../Leftbar/Leftbar';
import { Rightbar } from '../Rightbar/Rightbar';
import { Topbar } from '../Topbar/Topbar';
import './Layout.css'

export const Layout = ({ children }) => {
  return (
    <div id="layout-container">
      <Topbar />
      <div id="leftbar-wrapper">
        <Leftbar />
        {children}
        <Rightbar />
      </div>
    </div>
  );
};
