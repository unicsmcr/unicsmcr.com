import React from "react";

const WebsitePreview = ({ image, title, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        style={{
          width: "300px",
          height: "240px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#1e1e1e",
          color: "white",
          fontFamily: "sans-serif",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img src={image} alt={title} style={{ width: "100%", height: "75%" }} />
        <div
          style={{
            padding: "7px",
            paddingBlock: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            font: "12px",
          }}
        >
          <span>{title}</span>
        </div>
      </div>
    </a>
  );
};

export default WebsitePreview;
