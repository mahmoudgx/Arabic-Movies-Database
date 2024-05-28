import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/tv" className="navbar-link">
            مسلسلات <FontAwesomeIcon icon={faTv} />
          </a>
        </li>
        <li className="navbar-item">
          <a href="/" className="navbar-link">
            أفلام <FontAwesomeIcon icon={faFilm} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
