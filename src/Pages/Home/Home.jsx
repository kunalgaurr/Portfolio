import React, { useEffect } from 'react';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="home-container">
      <div className="home-children">
        <span
          id="home-intro"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="2700"
        >
          Hey there! My name is
        </span>
      </div>
      <div className="home-children">
        <span
          className="home-title"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="2800"
        >
          Kunal Gaur
        </span>
        <span
          className="home-title"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="2900"
        >
          I build things for the web.
        </span>
      </div>
      <div className="home-children">
        <span
          id="home-text"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="3000"
        >
          As a software engineer specializing in exceptional digital
          experiences, I develop software solutions that offer outstanding user
          experiences by combining technical expertise with design knowledge.
        </span>
      </div>
      <div className="home-children">
        <span
          id="home-button"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="100"
          data-aos-delay="3000"
        >
          Find me on GitHub
        </span>
      </div>
    </div>
  );
};
