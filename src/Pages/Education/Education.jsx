import React, { useEffect, useState } from 'react';
import './Education.css';
import { education } from '../../data';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Education = () => {
  const [position, setPosition] = useState(0);
  const [data, setData] = useState(education[0]);
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="education-container">
      <div
        id="education-top"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
      >
        <div className="name-container">
          <span className="name-number">3.</span>
          <span className="name">My Education</span>
          <div className="name-div"></div>
        </div>
      </div>
      <div id="education-bottom">
        <div id="education-left">
          <div id="education-scrollbar">
            <div
              id="education-scrollbar-thumb"
              style={{ top: `${position}px` }}
            ></div>
          </div>
          <ul id="education-left-body">
            <li
              className="education-left-children"
              onClick={() => {
                setPosition(0);
                setData(education[0]);
              }}
              style={{
                backgroundColor:
                  data === education[0] ? 'var(--color1)' : 'var(--color2)',
                color:
                  data === education[0] ? 'var(--color10)' : 'var(--color6)',
              }}
            >
              Graduation
            </li>
            <li
              className="education-left-children"
              onClick={() => {
                setPosition(60);
                setData(education[1]);
              }}
              style={{
                backgroundColor:
                  data === education[1] ? 'var(--color1)' : 'var(--color2)',
                color:
                  data === education[1] ? 'var(--color10)' : 'var(--color6)',
              }}
            >
              Higher Education
            </li>
            <li
              className="education-left-children"
              onClick={() => {
                setPosition(120);
                setData(education[2]);
              }}
              style={{
                backgroundColor:
                  data === education[2] ? 'var(--color1)' : 'var(--color2)',
                color:
                  data === education[2] ? 'var(--color10)' : 'var(--color6)',
              }}
            >
              Secondary Education
            </li>
          </ul>
        </div>
        <div id="education-right">
          <span
            id="education-name"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            {data.name}
          </span>
          <span
            id="education-duration"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            {data.duration}
          </span>
          <span
            id="education-text"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-offset="100"
          >
            {data.text.map((e) => (
              <li>{e}</li>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
