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
      <p>More information about May Ball and GUH 23 coming soon!</p>

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

      <p>
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
      </p>

      <p>
        Founded in 1996 in Amsterdam, Booking.com has grown from a small Dutch
        startup to one of the world&#39;s leading digital travel companies. Part
        of Booking Holdings Inc. (NASDAQ: BKNG), Booking.com&#39;s mission is to
        make it easier for everyone to experience the world. By investing in the
        technology that helps take the friction out of travel, Booking.com
        seamlessly connects millions of travellers with memorable experiences, a
        range of transport options and incredible places to stay - from homes to
        hotels and much more. As one of the world&#39;s largest travel
        marketplaces for both established brands and entrepreneurs of all sizes,
        Booking.com enables properties all over the world to reach a global
        audience and grow their businesses. Booking.com is available in 43
        languages and offers more than 28 million total reported accommodation
        listings, including over 6.6 million listings alone of homes, apartments
        and other unique places to stay. No matter where you want to go or what
        you want to do, Booking.com makes it easy and backs it all up with 24/7
        customer support.
      </p>

      <p>
        bet365, the world's leading online betting and gaming company, is a
        driving force in the development of enterprise and Internet technology.
        Delivering an unrivalled online experience to more than 63 million
        customers in 21 languages. Innovation continues to be our lifeblood and
        we pride ourselves on the standards of customer service we deliver.
        Driven by a shared vision to be the best in our industry, a technology
        team in excess of 1,600 people work in house to provide the
        technological advances that enable us to maintain our leadership
        position. Giving our teams the freedom to innovate is essential to our
        success. Our award winning business has worked hard to cultivate a
        culture of creativity where good ideas and a techno entrepreneurial
        attitude are encouraged and rewarded. Today we continue to push
        technological boundaries and break new ground in software innovation.
      </p>

      <p>
        Bloomberg, the global business and financial information and news
        leader, gives influential decision makers a critical edge by connecting
        them to a dynamic network of information, people and ideas. The
        company&#39;s strength — delivering data, news and analytics through
        innovative technology, quickly and accurately — is at the core of the
        Bloomberg Terminal. Bloomberg&#39;s enterprise solutions build on the
        company&#39;s core strength: leveraging technology to allow customers to
        access, integrate, distribute and manage data and information across
        organizations more efficiently and effectively.
      </p>


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
