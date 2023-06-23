import React, { useEffect, useState } from 'react';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navbar = ({ name }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="navbar-container" data-aos="fade-left" data-aos-duration="800">
      <div
        id="navbar-chip"
        data-aos="fade-down"
        data-aos-delay="800"
        data-aos-duration="800"
        data-aos-offset="1"
      >
        {name}
      </div>
      <div
        id="navbar-button"
        onClick={() => setToggle(!toggle)}
        data-aos="fade-down"
        data-aos-delay="900"
        data-aos-duration="800"
        data-aos-offset="1"
      >
        <div
          className="navbar-button-bar"
          style={{
            transform: toggle
              ? 'rotate(45deg) translateX(2px)'
              : 'rotate(0deg) translateX(0px)',
          }}
          data-aos="fade-down"
          data-aos-delay="1000"
          data-aos-duration="800"
          data-aos-offset="1"
        ></div>
        <div
          className="navbar-button-bar"
          style={{
            transform: toggle
              ? 'rotate(-45deg) translateX(2px)'
              : 'rotate(0deg) translateX(0px)',
          }}
          data-aos="fade-down"
          data-aos-delay="1100"
          data-aos-duration="800"
          data-aos-offset="1"
        ></div>
      </div>
      {/* <div
        id="navbar-menu"
        style={{ transform: toggle ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div id="navbar-menu-wrapper"></div>
      </div> */}
    </div>
  );
};
