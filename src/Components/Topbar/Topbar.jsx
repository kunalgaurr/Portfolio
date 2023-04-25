import React, { useEffect, useState } from 'react';
import { FiLinkedin, FiGithub, FiGrid, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Topbar.css';
import { useSpring, animated } from '@react-spring/web';

export const Topbar = () => {
  const [scroll, setScroll] = useState(true);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset > 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const topbar = useSpring({
    transform: scroll ? `translateY(-100%)` : `translateY(0%)`,
  });

  const button = useSpring({
    transform: toggle ? `translateY(0%)` : `translateY(-100%)`,
  });

  if (window.innerWidth < 500) {
    return (
      <animated.div id="topbar-container">
        <div id="top-mobile">
          <div id="topbar-logo">
            <span id="logo">Kunal.</span>
          </div>
          <div id="topbar-button">
            <FiGrid onClick={() => setToggle(true)} />
          </div>
        </div>
        <animated.div id="menu-options" style={button}>
          <div id="menu-wrapper">
            <div id="menu-button" onClick={() => setToggle(false)}>
              <FiX />
            </div>
            <Link to="/" className="menu-link" onClick={() => setToggle(false)}>
              Home
            </Link>
            <Link
              to="/about"
              className="menu-link"
              onClick={() => setToggle(false)}
            >
              About
            </Link>
            <Link
              to="/work"
              className="menu-link"
              onClick={() => setToggle(false)}
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="menu-link"
              onClick={() => setToggle(false)}
            >
              Contact
            </Link>
            <div id="menu-socials">
              <a href="/" className="menu-social-link">
                <FiLinkedin />
              </a>
              <a href="/" className="menu-social-link">
                <FiGithub />
              </a>
            </div>
          </div>
        </animated.div>
      </animated.div>
    );
  }

  return (
    <animated.div id="topbar-container" style={topbar}>
      <div id="topbar-wrapper">
        <div id="topbar-logo">
          <Link to="/" className="topbar-link" id="logo">
            Kunal.
          </Link>
        </div>
        <div id="topbar-links">
          <Link to="/about" className="topbar-link">
            About
          </Link>
          <Link to="/work" className="topbar-link">
            Work
          </Link>
        </div>
        <div id="topbar-socials">
          <a href="/" className="topbar-social-link">
            <FiLinkedin />
          </a>
          <a href="/" className="topbar-social-link">
            <FiGithub />
          </a>
        </div>
        <div id="topbar-contacts">
          <Link to="/contact" className="topbar-link">
            Contact
          </Link>
        </div>
      </div>
    </animated.div>
  );
};
