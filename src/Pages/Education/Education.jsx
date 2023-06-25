import React, { useState } from 'react';
import './Education.css';
import { education } from '../../data';

export const Education = () => {
  const [position, setPosition] = useState(0);
  const [data, setData] = useState(education[0]);
  return (
    <div id="education-container">
      <div id="education-top">
        <span className="name">
          <span>2.</span>Education<div className="name-div"></div>
        </span>
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
          <span id="education-name">{data.name}</span>
          <span id="education-duration">{data.duration}</span>
          <span id="education-text">
            {data.text.map((e) => (
              <li>{e}</li>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};
