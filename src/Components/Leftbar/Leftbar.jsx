import React, { useEffect } from 'react';
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiCodepen,
} from 'react-icons/fi';
import './Leftbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Leftbar = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      id="leftbar-container"
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-offset="100"
      data-aos-delay="1900"
    >
      <FiGithub
        className="leftbar-icon"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="2000"
      />
      <FiInstagram
        className="leftbar-icon"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="2100"
      />
      <FiLinkedin
        className="leftbar-icon"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="2100"
      />
      <FiTwitter
        className="leftbar-icon"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="2200"
      />
      <FiCodepen
        className="leftbar-icon"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="2300"
      />
      <div
        id="leftbar-div"
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="2400"
      ></div>
    </div>
  );
};
