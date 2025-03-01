import React from "react";
import CommitteeCarousel from "./CommitteeCarousel";
import CommitteeMember from "./CommitteeMember";
import "./Committee.css";

import Committee2022 from "../committee_data/2022-23.json";
import Committee2023 from "../committee_data/2023-24.json";
import Committee2024 from "../committee_data/2024-25.json";

const committeeMembers = {
  "2022-23": Committee2022,
  "2023-24": Committee2023,
  "2024-25": Committee2024,
  "Dev Team": [],
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
