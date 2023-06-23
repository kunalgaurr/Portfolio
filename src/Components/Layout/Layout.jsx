import React from 'react';
import { Leftbar } from '../Leftbar/Leftbar';
import './Layout.css'

export const Layout = ({ children }) => {
  return (
    <div id="layout-container">
      <Leftbar />
      {children}
    </div>
  );
};
