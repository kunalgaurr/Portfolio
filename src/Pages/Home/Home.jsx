import React, { useState } from 'react';
import { IoHandRightOutline } from 'react-icons/io5';
import './Home.css';
import { useSpring, animated } from '@react-spring/web';
import { GiBowenKnot } from 'react-icons/gi';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouse, setMouse] = useState(false);
  const navigate = useNavigate();

  const rotate = useSpring({
    transform: mouseEnter ? 'rotate(30deg)' : 'rotate(0deg)',
    transformOrigin: 'center',
    fontSize: '4rem',
    width: 'fit-content',
  });

  const rotation = useSpring({
    transform: mouse ? 'rotate(90deg)' : 'rotate(0deg)',
    transformOrigin: 'center',
    fontSize: '4rem',
    width: 'fit-content',
  });

  const title = useSpring({
    backgroundColor: mouse ? `var(--light-blue)` : 'var(--dark-blue)',
    color: mouse ? `var(--dark-blue)` : 'var(--light-blue)',
  });

  return (
    <animated.div id="home-container" style={title}>
      <div id="home-wrapper">
        <div className="home-section">
          <div id="home-animation">
            
          </div>
        </div>
        <div
          className="home-section"
          onMouseEnter={() => setMouseEnter(true)}
          onMouseLeave={() => setMouseEnter(false)}
        >
          <div id="home-text-container">
            <animated.div style={rotate}>
              <IoHandRightOutline />
            </animated.div>
            <span id="home-text">
              Hey There, My is Kunal, I am a Web Developer based in Dehradun,
              India, and I like to bring ideas into reality through the digital
              world.
            </span>
          </div>
        </div>
        <div
          className="home-section"
          onMouseEnter={() => setMouse(true)}
          onMouseLeave={() => setMouse(false)}
        >
          <div id="home-title-container">
            <span id="home-title">Web Developer</span>
            <animated.span style={rotation}>
              <GiBowenKnot />
            </animated.span>
          </div>
        </div>
        <div className="home-section" onClick={() => navigate('/work')}>
          <div id="home-work-container">
            <span id="work-button">Work</span>
            <span>
              <HiOutlineArrowLongRight />
            </span>
          </div>
        </div>
      </div>
    </animated.div>
  );
};
