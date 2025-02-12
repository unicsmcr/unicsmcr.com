import React from "react";
import CommitteeCarousel from "./CommitteeCarousel";
import CommitteeMember from "./CommitteeMember";
import "./Committee.css";

const committeeMembers = {
  "2022-23": [],
  "2023-24": [],

  "2024-25": [
    {
      name: "Na",
      role: "Co-Chair",
      email: "chair@unicsmcr.com",
      image: "Na-Co-Chair.png",
    },
    {
      name: "Arpan",
      role: "Co-Chair",
      email: "chair@unicsmcr.com",
      image: "Arpan-Co-Chair.png",
    },
    {
      name: "Sahar",
      role: "Secretary",
      email: "secretary@unicsmcr.com",
      image: "Sahar-Secretary.png",
    },
    {
      name: "Vidhi",
      role: "Inclusions Officer",
      email: "inclusion@unicsmcr.com",
      image: "Vidhi-Inclusions-Officer.png",
    },
    {
      name: "Nish",
      role: "Procurement Officer",
      email: "procurement@unicsmcr.com",
      image: "Nish-Procurement-Officer.png",
    },
    {
      name: "Affan",
      role: "PR Officer",
      email: "pr@unicsmcr.com",
      image: "Affan-PR-Officer.png",
    },
    {
      name: "Felix",
      role: "PR Officer",
      email: "pr@unicsmcr.com",
      image: "Felix-PR-Officer.png",
    },
    {
      name: "Sourabh",
      role: "Graphics Officer",
      email: "graphics@unicsmcr.com",
      image: "Sourabh-Graphics-Officer.png",
    },
    {
      name: "Sahil",
      role: "Events Officer",
      email: "events@unicsmcr.com",
      image: "Sahil-Events-Officer.png",
    },
    {
      name: "Manoj",
      role: "Events Officer",
      email: "events@unicsmcr.com",
      image: "Manoj-Events-Officer.png",
    },
    {
      name: "Arjun",
      role: "Events Officer",
      email: "events@unicsmcr.com",
      image: "Arjun-Events-Officer.png",
    },
    {
      name: "Naddy",
      role: "Hackathons Co-Director",
      email: "hackathons@unicsmcr.com",
      image: "Naddy-Hackathons-Director.png",
    },
    {
      name: "Jakub",
      role: "Hackathons Co-Director",
      email: "hackathons@unicsmcr.com",
      image: "Jakub-Hackathons-Director.png",
    },
    {
      name: "Adi",
      role: "Sponsorships Director",
      email: "sponsorship@unicsmcr.com",
      image: "Adi-Sponsorships-Director.png",
    },
    {
      name: "Adam",
      role: "Game-Dev Officer",
      email: "gamedev@unicsmcr.com",
      image: "Adam-Gamedev-Officer.png",
    },
    {
      name: "Merve",
      role: "Dev Officer",
      email: "dev@unicsmcr.com",
      image: "Merve-Dev-Officer.png",
    },
  ],
};

const Committee = () => {
  return (
    <>
      <h2 id="committee" className="header2">
        Committee
      </h2>
      <CommitteeCarousel>
        {Object.keys(committeeMembers).map((year, index) => (
          <div key={index} className="committee-year" year={year}>
            <div className="committee-grid">
              {committeeMembers[year].map((member, index) => (
                <CommitteeMember key={index} year={year} {...member} />
              ))}
            </div>
          </div>
        ))}
      </CommitteeCarousel>
    </>
  );
};

export default Committee;
