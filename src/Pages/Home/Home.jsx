import React, { useEffect } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navbar } from '../../Components/Navbar/Navbar';
import { FiArrowDown } from 'react-icons/fi';

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <div id="home-container" data-aos="fade-left" data-aos-duration="800">
        <Navbar name={'Home'} />
        <div className="home-children">
          <span
            id="home-title"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-offset="1"
          >
            Hey! I am <span>Kunal Gaur</span>
          </span>
          <span
            id="home-title"
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-duration="800"
            data-aos-offset="1"
          >
            A Full-stack developer
          </span>
        </div>
        <div className="home-children">
          <span
            id="home-text"
            data-aos="fade-up"
            data-aos-delay="1200"
            data-aos-duration="800"
            data-aos-offset="1"
          >
            I convert dreams into reality
          </span>
          <span
            id="home-text"
            data-aos="fade-up"
            data-aos-delay="1400"
            data-aos-duration="800"
            data-aos-offset="1"
          >
            Through the digital world.
          </span>
        </div>
        <div className="home-children">
          <div className="home-children-item">
            <span id="home-item-title">5+</span>
            <span id="home-item-text">Projects</span>
          </div>
          <div className="home-children-item">
            <span id="home-item-title">2+</span>
            <span id="home-item-text">Languages</span>
          </div>
        </div>
        <div className="home-children">
          <FiArrowDown id="arrow" />
        </div>
      </div>
    </Layout>
  );
};
