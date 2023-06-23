import React, { useEffect } from 'react';
import './Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FiHome,
  FiUser,
  FiBookOpen,
  FiBriefcase,
  FiPhone,
  FiAward,
  FiFile,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="navbar-container" data-aos="fade-left" data-aos-duration="800">
      <div id="navbar-wrapper">
        <div
          className="navbar-children"
          onClick={() => navigate('/')}
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <FiHome />
          <span className="navbar-desc">Home</span>
        </div>
        <div
          className="navbar-children"
          onClick={() => navigate('/about')}
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <FiUser />
          <span className="navbar-desc">About</span>
        </div>
        <div
          className="navbar-children"
          onClick={() => navigate('/education')}
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <FiBookOpen />
          <span className="navbar-desc">Education</span>
        </div>
        <div
          className="navbar-children"
          onClick={() => navigate('/work')}
          data-aos="fade-up"
          data-aos-delay="1100"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <FiBriefcase />
          <span className="navbar-desc">Work</span>
        </div>
        <div
          className="navbar-children"
          onClick={() => navigate('/work')}
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <FiAward />
          <span className="navbar-desc">Skills</span>
        </div>
        <div
          className="navbar-children"
          onClick={() => navigate('/work')}
          data-aos="fade-up"
          data-aos-delay="1300"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <FiFile />
          <span className="navbar-desc">Resume</span>
        </div>
        <div
          className="navbar-children"
          onClick={() => navigate('/contact')}
          data-aos="fade-up"
          data-aos-delay="1400"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          <FiPhone />
          <span className="navbar-desc">Contact</span>
        </div>
      </div>
    </div>
  );
};
