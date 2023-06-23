import React, { useEffect, useState } from 'react';
import { Layout } from '../../Components/Layout/Layout';
import { education } from '../../data';
import './Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [data, setData] = useState(education[0]);
  return (
    <Layout>
      <div
        id="education-container"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <span
          id="chip"
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          Education
        </span>
        <span
          id="education-header"
          data-aos="fade-up"
          data-aos-delay="1000"
          data-aos-duration="800"
          data-aos-offset="1"
        >
          My Educational Accomplishments.
        </span>
        <div id="education-wrapper">
          <div id="education-left">
            <span
              className="education-children"
              onClick={() => setData(education[0])}
              style={{
                backgroundColor:
                  data === education[0] ? '#ffffff37' : '#ffffff04',
              }}
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="800"
              data-aos-offset="1"
            >
              Graduation
            </span>
            <span
              className="education-children"
              onClick={() => setData(education[1])}
              style={{
                backgroundColor:
                  data === education[1] ? '#ffffff37' : '#ffffff04',
              }}
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="800"
              data-aos-offset="1"
            >
              Higher Education
            </span>
            <span
              className="education-children"
              onClick={() => setData(education[2])}
              style={{
                backgroundColor:
                  data === education[2] ? '#ffffff37' : '#ffffff04',
              }}
              data-aos="fade-up"
              data-aos-delay="1600"
              data-aos-duration="800"
              data-aos-offset="1"
            >
              Secondary Education
            </span>
          </div>
          <div id="education-right">
            <span
              id="education-heading"
              data-aos="fade-up"
              data-aos-delay="1200"
              data-aos-duration="800"
              data-aos-offset="1"
            >
              {data.name}
            </span>
            <span
              id="education-duration"
              data-aos="fade-up"
              data-aos-delay="1400"
              data-aos-duration="800"
              data-aos-offset="1"
            >
              {data.duration}
            </span>
            {data.text.map((e) => (
              <span
                id="education-text"
                data-aos="fade-up"
                data-aos-delay="1600"
                data-aos-duration="800"
                data-aos-offset="1"
              >
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
