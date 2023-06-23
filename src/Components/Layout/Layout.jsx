import React from 'react';
import { Leftbar } from '../Leftbar/Leftbar';
import './Layout.css';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children }) => {
  return (
    <div id="layout-container">
      <Leftbar />
      {children}
      <Navbar />
    </div>
  );
};
