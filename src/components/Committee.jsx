import React from "react";
import CommitteeMember from "./CommitteeMember";
import "./Committee.css";

const committeeMembers = [
  {
    name: "Na",
    role: "Co-Chair",
    email: "chair@unicsmcr.com",
    image: "Na-Co-Chair.png",
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
    name: "Joshua",
    role: "Treasurer",
    email: "treasurer@unicsmcr.com",
    image: "Joshua-Treasurer.png",
  },
  {
    name: "Nish",
    role: "Procurement Officer",
    email: "procurement@unicsmcr.com",
    image: "Nish-Procurement-Officer.png",
  },
  {
    name: "Taran",
    role: "PR Officer",
    email: "pr@unicsmcr.com",
    image: "Taran-PR-Officer.png",
  },
  {
    name: "Affan",
    role: "PR Officer",
    email: "pr@unicsmcr.com",
    image: "Affan-PR-Officer.png",
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
];

const Committee = () => {
  return (
    <>
      <h2 className="header2">Committee</h2>
      <div className="committee-grid">
        {committeeMembers.map((member, index) => (
          <CommitteeMember key={index} {...member} />
        ))}
      </div>
    </>
  );
};

export default Committee;
