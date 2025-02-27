import React, { useState, useEffect } from "react";
import "./Committee.css";

const CommitteeCarousel = ({ children }) => {
  const [currentCommitteePage, setCurrentCommitteePage] = useState(
    children.length - 1
  );

  const scrollBack = () => {
    if (currentCommitteePage > 0) {
      setCurrentCommitteePage(currentCommitteePage - 1);
    }
  };

  const scrollForward = () => {
    if (currentCommitteePage < children.length - 1) {
      setCurrentCommitteePage(currentCommitteePage + 1);
    }
  };

  return (
    <div className="committee-carousel">
      <div className="carousel-header">
        <button
          className="arrow left-arrow"
          style={{ color: currentCommitteePage > 0 ? "#a020f0" : "black" }}
          disabled={currentCommitteePage === 0}
          onClick={scrollBack}
        >
          &#10094;
        </button>
        <h3>{children[currentCommitteePage].props.year}</h3>
        <button
          className="arrow right-arrow"
          style={{
            color:
              currentCommitteePage < children.length - 1 ? "#a020f0" : "black",
          }}
          disabled={currentCommitteePage === children.length - 1}
          onClick={scrollForward}
        >
          &#10095;
        </button>
      </div>
      <div className="carousel-content">
        {React.Children.map(children, (child, page) => (
          <div
            className="carousel-item"
            style={{
              display: page === currentCommitteePage ? "block" : "none",
            }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommitteeCarousel;
