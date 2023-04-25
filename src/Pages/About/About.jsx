import React, { useRef, useEffect, useState } from 'react';
import './About.css';
import { useSpring, animated } from '@react-spring/web';

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const top = aboutRef.current.getBoundingClientRect().top;
      setIsVisible(top < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Copy the ref value to a variable
    const currentRef = aboutRef.current;

    return () => {
      window.removeEventListener('scroll', handleScroll);

      // Use the variable in the cleanup function
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const scroll = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50%)',
  });

  return (
    <div id="about-container" ref={aboutRef}>
      <div id="about-wrapper">
        <div id="blur-container"></div>
        <div id="about-header">
          <animated.span className="chip" style={scroll}>
            About
          </animated.span>
          <animated.span id="about-heading" style={scroll}>
            A mern stack developer, with great passion for the web, and an eye
            for design.
          </animated.span>
        </div>
        <div id="about-text-container">
          <div id="about-left">
            <animated.span id="about-text-main" style={scroll}>
              Hi there, I'm Kunal Gaur, a MERN stack developer based in
              Dehradun, Uttarakhand. With a passion for web development and a
              background in Electronics and Communication engineering, I'm
              always eager to learn and apply my skills to create engaging and
              innovative web applications.
            </animated.span>
            <animated.span id="about-text" style={scroll}>
              As a final year student at Guru Gobind Singh Indraprastha
              University, I have gained valuable experience in developing
              full-stack web applications using cutting-edge technologies like
              React, Node.js, and MongoDB. I enjoy working with both front-end
              and back-end development and have a keen eye for UI/UX design.
            </animated.span>
            <animated.span id="about-text" style={scroll}>
              Throughout my academic and professional journey, I have had the
              opportunity to work on several challenging projects and
              collaborate with teams of diverse backgrounds. I am a quick
              learner and a great team player, always striving to achieve the
              best possible results for my clients and users.
            </animated.span>
            <animated.span id="about-text" style={scroll}>
              When I'm not coding, you can find me exploring new technologies,
              watching tech talks, or playing basketball. If you're looking for
              a dedicated and passionate developer to bring your web application
              ideas to life, feel free to reach out to me!
            </animated.span>
          </div>
          <div id="about-right">
            <animated.img
              src="/assets/kunal.jpeg"
              alt=""
              id="about-img"
              style={scroll}
            />
            <animated.span id="about-right-text" style={scroll}>
              Kunal Gaur
            </animated.span>
          </div>
        </div>
        <div id="about-skills">
          <div id="about-skilles-left">
            <animated.img
              src="/assets/1.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/2.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/3.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/4.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/5.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/6.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/7.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/8.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
            <animated.img
              src="/assets/1.png"
              alt=""
              id="skill-img"
              style={scroll}
            />
          </div>
          <div id="about-skilles-right">
            <animated.span id="about-skill-heading" style={scroll}>
              Here are some of the technologies I like to work with
            </animated.span>
          </div>
        </div>
      </div>
    </div>
  );
};
