import React, { useEffect } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout>
      <div id="about-container" data-aos="fade-left" data-aos-duration="800">
        <span
          id="chip"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          About
        </span>
        <span
          id="about-header"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          A little about me.
        </span>
        <span
          className="about-body"
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          Hey there! I'm a full stack web developer hailing from Dehradun,
          India, and I'm thrilled to introduce myself. As a fresher in the
          industry, I've been honing my skills and delving into the exciting
          world of web development.
        </span>
        <span
          className="about-body"
          data-aos="fade-up"
          data-aos-delay="1400"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          My repertoire includes JavaScript, TypeScript, ReactJs, NodeJs,
          Express, MongoDB, MySQL, HTML, CSS, Git, and a bunch of other
          libraries that add flavor to my coding endeavors. I'm currently
          pursuing my B.Tech in the final year at Guru Gobind Singh Indraprastha
          University, where I've been immersing myself in the world of computer
          science.
        </span>
        <span
          className="about-body"
          data-aos="fade-up"
          data-aos-delay="1600"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          While programming keeps me engrossed, I do know how to strike a
          balance in life. When I'm not coding, you can find me kicking a
          football on the field or challenging opponents to a game of chess. Oh,
          did I mention that I can belt out a tune or two? Yes, I have a secret
          passion for singing. And let's not forget my wanderlust! Exploring new
          places and experiencing different cultures invigorates my spirit.
        </span>
        <span
          className="about-body"
          data-aos="fade-up"
          data-aos-delay="1800"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          I bring a blend of professionalism, enthusiasm, and a touch of humor
          to my work. With every project, I strive to create clean and efficient
          code while keeping things light-hearted. I believe that a little
          laughter goes a long way in fostering creativity and building a
          positive work environment.
        </span>
        <span
          className="about-body"
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          So, let's join forces and create some incredible web experiences
          together. I'm eager to contribute my skills and make a mark in the
          ever-evolving world of web development.
        </span>
      </div>
    </Layout>
  );
};
