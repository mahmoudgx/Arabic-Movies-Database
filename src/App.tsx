import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import TvsCard from "./components/TvsCard";
import Footer from "./components/Footer";
import SortMovies from "./components/SortMovies";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./components/SearchResults";
import ScrollToTop from "react-scroll-to-top";
import TvDetails from "./components/TvDetails";
import "./App.css";

const App = () => {
  const [sortBy, setSortBy] = useState("popularity.desc");

  return (
    <Router>
      <div className="app-container">
        <ScrollToTop smooth />
        <NavBar />
        <div className="main-content">
          <SortMovies sortBy={sortBy} setSortBy={setSortBy} />
          <Routes>
            <Route path="/" element={<MoviesList sortBy={sortBy} />} />
            <Route path="/tv" element={<TvsCard sortBy={sortBy} />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/tv/:id" element={<TvDetails />} />
            <Route path="/search" element={<SearchResults />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
