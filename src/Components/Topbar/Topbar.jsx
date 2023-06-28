import React, { useEffect } from 'react';
import './Topbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Topbar = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div
      id="topbar-container"
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-offset="100"
    >
      <span
        id="topbar-left"
        data-aos="fade-down"
        data-aos-duration="800"
        data-aos-offset="100"
        data-aos-delay="500"
      >
        Kunal.
      </span>
      <div id="topbar-right">
        <a
          className="topbar-children"
          href="#home-container"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="600"
        >
          <span>1.</span>Home
        </a>
        <a
          className="topbar-children"
          href="#about-container"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="700"
        >
          <span>2.</span>About
        </a>
        <a
          className="topbar-children"
          href="#education-container"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="800"
        >
          <span>3.</span>Education
        </a>
        <a
          className="topbar-children"
          href="#work-container"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="900"
        >
          <span>4.</span>Work
        </a>
        <a
          className="topbar-children"
          href="#contact-container"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="1000"
        >
          <span>5.</span>Contact
        </a>
        <span
          id="topbar-button"
          data-aos="fade-down"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="1100"
        >
          Resume
        </span>
      </div>
    </div>
  );
};
