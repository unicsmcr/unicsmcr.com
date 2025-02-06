import Dropdown from "./Dropdown";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faCalendar,
  faUsers,
  faHandshake,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { faCog, faBars } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

const pages = [
  { label: "About", href: "/#about", key: uuidv4(), icon: faInfo },
  {
    label: "Events",
    href: "/#events",
    key: uuidv4(),
    scroll: true,
    icon: faCalendar,
  },
  {
    label: "Committee",
    href: "/#committee",
    key: uuidv4(),
    scroll: true,
    icon: faUsers,
  },
  { label: "Sponsors", href: "/#sponsors", key: uuidv4(), icon: faHandshake },
  {
    label: "Connect With Us",
    href: "/#connect",
    key: uuidv4(),
    icon: faHashtag,
  },
];

const UnderConstruction = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="under-construction-banner">
      <div className="under-construction-icon">
        <FontAwesomeIcon icon={faCog} spin className="icon-left" />
        <FontAwesomeIcon icon={faCog} className="reverse-spin icon-right" />
      </div>
      <div className="under-construction-icon-small">
        <FontAwesomeIcon icon={faCog} spin className="icon-small" />
      </div>
      <span>Website under construction!</span>
    </div>
  );
};
const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <UnderConstruction />
      {showDropdown ? (
        <Dropdown pages={pages} setShowDropdown={setShowDropdown} />
      ) : (
        <div className="navbar-content">
          <div className="logo-container">
            <img src="logo.png" id="logo" alt="UniCS logo" />
          </div>

          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          <div className="nav-links">
            {pages.map(({ label, href, key }) => (
              <a key={key} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>
          <a
            href="https://manchesterstudentsunion.com/activities/view/unics"
            className="join-us-button join-us-button-nav"
          >
            Join Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
