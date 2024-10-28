import React from "react";
import "../Styles/About.css";

const About = () => {
  return (
    <div className="container about-page">
      <div className="about-header">
        <h2>ABOUT ME</h2>
        <p>
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>
      <div className="about-content">
        <div className="get-to-know">
          <h3>Get to know me!</h3>
          <p>
            I'm a <strong>Frontend Focused Web Developer</strong> building and
            managing the Front-end of Websites and Web Applications that lead to
            the success of the overall product. Check out some of my work in the
            Projects section.
          </p>
          <p>
            I also like sharing content related to the stuff that I have learned
            over the years in <strong>Web Development</strong> so it can help
            other people of the Dev Community. Feel free to connect or follow me
            on my <a href="https://www.linkedin.com">Linkedin</a> and{" "}
            <a href="https://www.instagram.com">Instagram</a> where I post
            useful content related to Web Development and Programming.
          </p>
          <p>
            I'm open to <strong>Job</strong> opportunities where I can
            contribute, learn and grow. If you have a good opportunity that
            matches my skills and experience, then don't hesitate to{" "}
            <strong>contact</strong> me.
          </p>
        </div>
        <div className="skills-section">
          <h3>My Skills</h3>
          <div className="skills">
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">Python</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;