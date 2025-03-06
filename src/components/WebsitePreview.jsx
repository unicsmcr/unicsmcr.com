import React from "react";
import "./WebsitePreview.css";

const WebsitePreview = ({ image, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        class="preview-link-container"
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img src={image} alt={title} style={{ width: "100%", height: "75%" }} />
        <div class="preview-link-title">
          <span>{title}</span>
        </div>
      </div>
    </a>
  );
};

export default WebsitePreview;
