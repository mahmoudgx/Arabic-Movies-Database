import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTv, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li
          className={`navbar-item ${location.pathname === "/" ? "active" : ""}`}
        >
          <a href="/" className="navbar-link">
            أفلام <FontAwesomeIcon icon={faFilm} />
          </a>
        </li>
        <li
          className={`navbar-item ${
            location.pathname === "/tv" ? "active" : ""
          }`}
        >
          <a href="/tv" className="navbar-link">
            مسلسلات <FontAwesomeIcon icon={faTv} />
          </a>
        </li>
      </ul>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          className="search-input"
          placeholder="بحث..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
