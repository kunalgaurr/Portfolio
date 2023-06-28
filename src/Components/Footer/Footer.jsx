import React, { useEffect } from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Footer = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="footer-container">
      <span
        id="footer-text"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
      >
        Built and designed by Kunal Gaur
      </span>
    </div>
  );
};
