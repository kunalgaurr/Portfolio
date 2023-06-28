import React, { useEffect, useState } from 'react';
import './Work.css';
import { RiGithubLine, RiLinkM } from 'react-icons/ri';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Work = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="work-container">
      <div
        className="name-container"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
      >
        <span className="name-number">3.</span>
        <span className="name">Some of my work</span>
        <div className="name-div"></div>
      </div>
      <div className="work-children">
        <div
          className="work-picture"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-offset="100"
        ></div>
        <div
          className="work-body"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-offset="100"
        >
          <span
            className="work-intro"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            Featured Project
          </span>
          <span
            className="work-heading"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            A social Media Web App: Buzz
          </span>
          <span
            className="work-text"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            A social web app for sharing pictures and experiences with your
            friends, building communities and exploring your interests, texting
            in real time with your friends. Sharing, liking and commenting on
            your friends posts.
          </span>
          <div
            className="work-tech"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="900"
            >
              JavaScript
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1000"
            >
              React
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1000"
            >
              Redux
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1100"
            >
              Express
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1200"
            >
              MongoDB
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1300"
            >
              NodeJs
            </span>
          </div>
          <div
            className="work-links"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            <a
              href="/"
              className="work-link"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="900"
            >
              <RiGithubLine className="work-link-icon" />
            </a>
            <a
              href="/"
              className="work-link"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1000"
            >
              <RiLinkM className="work-link-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="work-children">
        <div
          className="work-body"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-offset="100"
        >
          <span
            className="work-intro"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            Featured Project
          </span>
          <span
            className="work-heading"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            An E-Commerce Web App: Urban Buy
          </span>
          <span
            className="work-text"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            A e-commerce platform with integrated payment gateways and industry
            level functionality like email and phone number verification user
            npm packages. The project is built using TypeScript and following
            all the strict protocols, with efficient and scalable code.
          </span>
          <div
            className="work-tech"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="900"
            >
              TypeScript
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1000"
            >
              React
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1100"
            >
              Redux
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1200"
            >
              Express
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1300"
            >
              MySQL
            </span>
            <span
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
              data-aos-delay="1400"
            >
              NodeJs
            </span>
          </div>
          <div className="work-links">
            <a href="/" className="work-link">
              <RiGithubLine className="work-link-icon" />
            </a>
            <a href="/" className="work-link">
              <RiLinkM className="work-link-icon" />
            </a>
          </div>
        </div>
        <div
          className="work-picture"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-offset="100"
        ></div>
      </div>
      <div id="work-bottom">
        <div id="other-projects-header">
          <span
            id="other-projects-heading"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            Some other noteworthy projects
          </span>
          <span id="other-projects-subheading">
            <span
              id="other-projects-subheading-text"
              onMouseEnter={() => setToggle(true)}
              onMouseLeave={() => setToggle(false)}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-offset="100"
            >
              View Project Archive
            </span>
            <div
              id="other-projects-subheading-underline"
              style={{ transform: toggle ? 'scaleX(100%)' : 'scaleX(0%)' }}
            ></div>
          </span>
        </div>
        <div id="other-projects"></div>
      </div>
    </div>
  );
};
