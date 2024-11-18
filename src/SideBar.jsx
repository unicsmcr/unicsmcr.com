import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = ({ pages, setShowMobileMenu }) => {
  return (
    <div
      className="sidebar"
      onClick={() => {
        setShowMobileMenu(false);
      }}
      style={{
        borderBottom: "1px solid #a020f0",
        padding: "1rem",
        height: "30vh",
        alignItems: "center",
        backgroundColor: "black",
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 100,
        transition: "transform 0.3s ease-in-out",
        transform: "translateX(0)",
        marginBottom: "250px",
      }}
    >
      <button
        onClick={() => setShowMobileMenu(false)}
        style={{ color: "white" }}
        className="close-button"
      >
        {" "}
        X{" "}
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "black",
          position: "fixed",
          zIndex: 100,
          transition: "transform 0.3s ease-in-out",
          transform: "translateX(0)",
        }}
      >
        {pages.map(({ label, href, key, icon }) => (
          <a key={key} href={href} className="nav-link">
            <FontAwesomeIcon icon={icon} /> {label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
