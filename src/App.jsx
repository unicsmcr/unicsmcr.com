import React from "react";
import About from "./components/about";
import "./App.css";
import NavBar from "./components/NavBar";
import Bee from "./Bee";
import Committee from "./components/Committee";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <NavBar />

      <h1 className="header">
        <span style={{ color: "white" }}>Uni</span>CS
      </h1>

      <p style={{ textAlign: "center", fontSize: "3vw" }}>
        University of Manchester <br />
        Computer Science Society{" "}
      </p>

      <Bee />

      <About />

      <h2 className="header2">EVENTS</h2>
      <div style={{ paddingInline: "75px" }}>
        <p>
          Our events are suited to every level of knowledge and all degree
          courses. If you are someone who is interested in knowing how they can
          use computers to see an idea come to life, UniCS is the society for
          you. It doesn&#39;t matter if you have never touched a computer or
          been programming for years, you will never be bored at our events. And
          if you still aren&#39;t convinced, we have free pizza (and
          occasionally drinks).
        </p>
        <p>
          You can keep up-to-date with our events and see a full list of them by
          following our Instagram page.
        </p>
        <p>More information about May Ball coming soon!</p>
      </div>

      <Committee />

      <h2 className="header2">SPONSORS</h2>

      <p>TPP - Media Contract</p>

      <p>TPP - Media Contract</p>

      <p>Jane Street (JS) - Bronze Tier</p>
      <p>Jane Street (JS) - Bronze Tier</p>

      <p>Cambridge Consultants - Bronze Tier</p>
      <p>Cambridge Consultants - Bronze Tier</p>

      {/* <p>
        Over the past few years we have been sponsored by:
        <br />
      </p>

      <p>
        Reply - Gold Tier
        Reply - Gold Tier
      </p>

      <p>
        Roku - Silver Tier
        Roku - Silver Tier
      </p>

      <p>
        Qube Research & Technologies (QRT) is a global quantitative and
        systematic investment manager, operating in all liquid asset classes
        across the world. We are a technology and data driven group implementing
        a scientific approach to investing. Combining data, research, technology
        and trading expertise has shaped QRT&#39;s collaborative mindset which
        enables us to solve the most complex challenges. QRT&#39;s culture of
        innovation continuously drives our ambition to deliver high quality
        returns for our investors.
      </p> */}

      <footer>
        <a id="contact" href="mailto:contact@unicsmcr.com">
          Contact Us
        </a>

        <br />

        <a href="https://www.facebook.com/unicsmcr"> Facebook </a>

        <a href="https://twitter.com/unicsmcr_"> Twitter</a>

        <a href="https://www.instagram.com/unicsmcr/">Instagram</a>

        <a href="https://github.com/unicsmcr">GitHub</a>

        <a href="https://www.linkedin.com/company/unics-manchester/">
          LinkedIn
        </a>

        <p>&copy; Copyright 2018–2024 UniCS</p>
        <p>All rights reserved</p>
        <p style={{ fontSize: "0.5em" }}>
          Bee image from{" "}
          <a href="https://www.deviantart.com/golborne-identity/art/County-Flag-of-Greater-Manchester-honey-bee-386924833">
            Golborne-Identity
          </a>{" "}
          on DeviantArt under the Creative Commons license and edited by UniCS
        </p>
      </footer>
    </>
  );
}

export default App;
