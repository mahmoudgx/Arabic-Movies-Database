import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import TvsCard from "./components/TvsCard";
import Footer from "./components/Footer";
import SortMovies from "./components/SortMovies";
import SortTv from "./components/SortTv";
import MovieDetails from "./components/MovieDetails";
import SearchResults from "./components/SearchResults";
import ScrollToTop from "react-scroll-to-top";
import TvDetails from "./components/TvDetails";
import "./App.css";

const App = () => {
  const [sortByMovies, setSortByMovies] = useState("popularity.desc");
  const [sortByTv, setSortByTv] = useState("popularity.desc");

  return (
    <Router>
      <div className="app-container">
        <ScrollToTop smooth />
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SortMovies
                    sortBy={sortByMovies}
                    setSortBy={setSortByMovies}
                  />
                  <MoviesList sortBy={sortByMovies} />
                </>
              }
            />
            <Route
              path="/tv"
              element={
                <>
                  <SortTv sortBy={sortByTv} setSortBy={setSortByTv} />
                  <TvsCard sortBy={sortByTv} />
                </>
              }
            />
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
