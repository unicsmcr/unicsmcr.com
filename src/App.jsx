import React from "react";
import About from "./components/about";
import "./App.css";
import NavBar from "./components/NavBar";
import Bee from "./Bee";
import Committee from "./components/Committee";
import ConnectWithUs from "./components/ConnectWithUs";

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

      <div style={{ textAlign: "center", paddingInline: "75px" }}>
      <p>TPP - Media Contract</p>

      <p>TPP is a global digital health company. With over 7,000 organisations using our
        solutions to care for over 50 million patients, our software is used across all health
        and social care settings, including GPs, emergency departments, hospitals and mental health
        services. This means that wherever and whenever a patient needs care, a detailed and
        up-to-date record is available. Our database is one of the largest in the world. It processes a
        billion transactions daily &mdash; more than the London Stock Exchange and Visa combined
        Our technology helps improve people&#39;s lives across the world, whether it is scheduling
        immunisations for millions of children, allowing doctors to manage complex
        care for elderly patients, helping governments with the prevention of
        outbreaks, or developing new machine learning algorithms for the early
        diagnosis of disease.
        We&#39;re looking for bright, talented applicants to join us. No experience is
        required for the majority of our roles. <br/>
        <a href="https://tpp-careers.com"><span style={{color: "purple"}}>See job Opportunities!</span></a>
        </p>
      <br/>
      <p>Jane Street (JS) - Bronze Tier</p>
      <p>
      Established in 2000, Jane Street is a research-driven trading firm where
      curious people work together on deep problems. We innovate in tech,
      combining techniques from machine learning, distributed systems, programmable hardware,
      and statistics to trade on markets around the world. As a market maker and liquidity provider,
      we stand ready to buy and sell a wide range of assets at competitive prices.
      Our global presence allows us to trade continuously on more than
      200 electronic exchanges and other venues, making us one of the
      world&#39;s largest market markers. Today, we are major players in the
      Equities, Bonds, and Options markets, among others.
      We look for smart people with curious minds from any background.

      <br/>
      <a href="https://www.cambridgeconsultants.com/careers/"><span style={{color: "purple"}}>See job Opportunities!</span></a>
      </p><br/>


      <p>Cambridge Consultants - Bronze Tier</p>
      <p>
      Cambridge Consultants, the deep tech powerhouse of Capgemini. We do extraordinary, new-to-the-world tech innovation. 
      We do impactful things that benefit the society. We helped develop the
      world&#39;s first 24/7 wrist-worn activity monitor, wireless pacemaker, wireless
      patient monitor, as well as the first connected drug inhaler.
      We&#39;re eager to welcome passionate interns and graduate engineers,
      scientists, mathematicians, designers, developers, consultants and analysts. We welcome
      applicants from all STEM disciplines! <br/>
      <a href="https://www.cambridgeconsultants.com/careers/"><span style={{color: "purple"}}>See job Opportunities!</span></a>
      </p>
      <br/><br/><br/>
      </div>

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

      <ConnectWithUs />

      <footer>
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
