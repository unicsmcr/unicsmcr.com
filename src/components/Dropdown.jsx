import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ pages, setShowDropdown }) => {
  return (
    <div className="dropdown">
      <button
        onClick={() => setShowDropdown(false)}
        className="close-dropdown"
        aria-label="Close Dropdown"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <div className="dropdown-content">
        {pages.map(({ label, href, key, icon }) => (
          <a
            key={key}
            href={href}
            className="nav-link dropdown-link"
            onClick={() => setShowDropdown(false)}
          >
            <FontAwesomeIcon icon={icon} /> {label}
          </a>
        ))}
        <a
          href="https://manchesterstudentsunion.com/activities/view/unics"
          className="join-us-button join-us-button-dropdown"
        >
          Join Us
        </a>
      </div>
    </div>
  );
};

export default Dropdown;
