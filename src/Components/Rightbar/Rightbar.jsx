import React, { useEffect } from 'react';
import './Rightbar.css';
import { FiMail } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Rightbar = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      id="rightbar-container"
      data-aos="fade-left"
      data-aos-duration="800"
      data-aos-offset="100"
      data-aos-delay="1900"
    >
      <a href="mailto:kunal_gaur@outlook.com" id="rightbar-wrapper">
        <FiMail
          id="rightbar-icon"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="2000"
        />
        <span id="rightbar-text">kunal_gaur@outlook.com</span>
      </a>
      <div
        id="rightbar-div"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="2100"
      ></div>
    </div>
  );
};
