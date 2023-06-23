import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Leftbar.css';
import {
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiMail,
} from 'react-icons/fi';

export const Leftbar = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div id="leftbar-container" data-aos="fade-right" data-aos-duration="800">
      <div id="leftbar-wrapper">
        <div className="leftbar-children">
          <span
            id="leftbar-title"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-offset="1"
          >
            Kunal.
          </span>
          <span
            id="leftbar-text"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-offset="1"
          >
            Full-stack web developer <br /> and designer.
          </span>
        </div>
        <div className="leftbar-children">
          <img
            src="/assets/1.jpeg"
            alt=""
            id="leftbar-image"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="800"
          />
        </div>
        <div className="leftbar-children">
          <span
            id="leftbar-text"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="800"
          >
            Based in Dehradun, India.
          </span>
          <span
            id="leftbar-mail"
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-duration="800"
          >
            kunal_gaur@outlook.com
          </span>
        </div>
        <div className="leftbar-children">
          <span
            id="left-bar-copyright"
            data-aos="fade-up"
            data-aos-delay="1600"
            data-aos-duration="800"
          >
            All rights reserved &copy; 2022
          </span>
        </div>
        <div className="leftbar-children">
          <div
            className="leftbar-children-wrapper"
            data-aos="fade-up"
            data-aos-delay="1700"
            data-aos-duration="800"
          >
            <FiLinkedin />
          </div>
          <div
            className="leftbar-children-wrapper"
            data-aos="fade-up"
            data-aos-delay="1800"
            data-aos-duration="800"
          >
            <FiGithub />
          </div>
          <div
            className="leftbar-children-wrapper"
            data-aos="fade-up"
            data-aos-delay="1900"
            data-aos-duration="800"
          >
            <FiTwitter />
          </div>
          <div
            className="leftbar-children-wrapper"
            data-aos="fade-up"
            data-aos-delay="2000"
            data-aos-duration="800"
          >
            <FiInstagram />
          </div>
        </div>
        <div className="leftbar-children">
          <span
            id="leftbar-button"
            data-aos="fade-up"
            data-aos-delay="2200"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            <FiMail />
            Hire me!
          </span>
        </div>
      </div>
    </div>
  );
};
