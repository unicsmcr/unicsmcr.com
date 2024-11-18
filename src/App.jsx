import React from "react";
import About from "../src/components/About";
import "../src/App.css";
import NavBar from "../src/NavBar";

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

      <About />

      <h2 className="header2">EVENTS</h2>
      <p>
        Our events are suited to every level of knowledge and all degree
        courses. If you are someone who is interested in knowing how they can
        use computers to see an idea come to life, UniCS is the society for you.
        It doesn&#39;t matter if you have never touched a computer or been
        programming for years, you will never be bored at our events. And if you
        still aren&#39;t convinced, we have free pizza (and occasionally
        drinks).
      </p>
      <p>
        You can keep up-to-date with our events and see a full list of them by
        following our Instagram page.
      </p>
      <p>More information about May Ball coming soon!</p>

      <h2 className="header2">COMMITTEE</h2>

      <div class="display: flex; flex-direction: row">
        <div>
      <p>Co-Chair</p>
      <img src = "Na-Co-Chair.png" id="Na" class="committee" alt = "Na, Co-Chair"/>
      </div>

      <div>
      <p>Secretary</p>
      <img src = "Sahar-Secretary.png" id="Sahar" class="committee"/>
      </div>

      <p>Inclusions Officer</p>
      <img src = "Vidhi-Inclusions-Officer.png" id="Vidhi" class="committee"/>

      <p>Treasurer</p>
      <img src = "Joshua-Treasurer.png" class="committee"/>

      <p>Procurement Officer</p>
      <img src = "Nish-Procurement-Officer.png" class="committee"/>

      <p>PR Officer</p>
      <img src = "Taran-PR-Officer.png" class="committee"/>

      </div>

      <p>PR Officer</p>
      <img src = "Affan-PR-Officer.png" class="committee"/>

      <p>Graphics Officer</p>
      <img src = "Sourabh-Graphics-Officer.png" class="committee"/>

      <p>Events Officer</p>
      <img src = "Sahil-Events-Officer.png" class="committee"/>

      <p>Events Officer</p>
      <img src = "Rey-Events-Officer.png" class="committee"/>

      <p>Events Officer</p>
      <img src = "Keshav-Events-Officer.png" class="committee"/>

      <p>Hackathons Co-Director</p>
      <img src = "Naddy-Hackathons-Director.png" class="committee"/>

      <p>Hackathons Co-Director</p>
      <img src = "Jakub-Hackathons-Director.png" class="committee"/>

      <p>Sponsorships Director</p>
      <img src = "Adi-Sponsorships-Director.png" class="committee"/>

      <p>Game-Dev Officer</p>
      <img src = "Adam-Gamedev-Officer.png" class="committee"/>

      <p>Dev Officer</p>
      <img src = "Merve-Dev-Officer.png" class="committee"/>



      <h2 className="header2">SPONSORS</h2>
      
      <p>
        TPP - Media Contract        
      </p>

      <p>
        Jane Street (JS) - Bronze Tier        
      </p>

      <p>
        Cambridge Consultants - Bronze Tier        
      </p>

      {/* <p>
        Over the past few years we have been sponsored by:
        <br />
      </p>

      <p>
        Reply - Gold Tier        
      </p>

      <p>
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
      </footer>
    </>
  );
}

export default App;
