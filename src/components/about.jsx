import React, { useEffect } from "react";
import Typewriter from "typewriter-effect";
import "./about.css";

const About = () => {
  useEffect(() => {
    // Load the Instagram embed script after the component mounts
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="about" className="about-section">
      <div className="about-content">
      <div className="typewriter-container">
          <h2 className="typewriter">
            <Typewriter
              options={{
                strings: ['Hello World!', 'Welcome!'],
                loop: true,
                autoStart: true,
                pauseFor: 5000,
                wrapperClassName: "typewriter-text",
                cursorClassName: "blinker"
              }}
            />
          </h2>
        </div>
        <hr className="about-line" />
        <p style={{ color: "#000000" }}>
          UniCS is the University of Manchester&#39;s tech society. We are a big
          community with a passion for technology and creating innovative
          solutions for everyone to enjoy. Through our hackathons and other
          events, we aim to bring students and industry closer together. When we
          aren&#39;t organising our own events we also travel to events in
          places like Barcelona, Helsinki, and Bordeaux, amongst other exotic
          destinations, often free due to various hackathon sponsors. Come join
          us to see what we get up to this year!
        </p>
      </div>
      <div className="instagram-embed">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/unicsmcr/?hl=en"
          data-instgrm-version="12"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            padding: 0,
            width: "70%",
            maxWidth: "800px"
          }}
        >
          <a
            href="https://www.instagram.com/unicsmcr/?hl=en"
            target="_blank"
            rel="noreferrer noopener"
          >
            View this post on Instagram
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default About;
