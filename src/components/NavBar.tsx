import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${
            location.pathname === "/tv" ? "active" : ""
          }`}
        >
          <a href="/tv" className="navbar-link">
            مسلسلات <FontAwesomeIcon icon={faTv} />
          </a>
        </li>
        <li
          className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <a href="/" className="navbar-link">
            أفلام <FontAwesomeIcon icon={faFilm} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
