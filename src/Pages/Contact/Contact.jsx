import React, { useEffect } from 'react';
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="contact-container">
      <span
        id="contact-intro"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
      >
        5. Whats next?
      </span>
      <span
        id="contact-heading"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
      >
        Get in touch
      </span>
      <span
        id="contact-text"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
      >
        I am constantly improving and currently looking for better
        opportunities. So why don't we work together? My inbox is always open if
        you have a question or you want to drop by and say hello, I will always
        answer.
      </span>
      <span
        id="contact-button"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-offset="100"
      >
        Say Hello!
      </span>
    </div>
  );
};
