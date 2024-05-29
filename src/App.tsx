import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MoviesList from "./components/MoviesList";
import NavBar from "./components/NavBar";
import TvsCard from "./components/TvsCard";
import Footer from "./components/Footer";
import SortMovies from "./components/SortMovies";
import "./App.css";

const App = () => {
  const [sortBy, setSortBy] = useState("popularity.desc");

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <SortMovies sortBy={sortBy} setSortBy={setSortBy} />
          <Routes>
            <Route path="/" element={<MoviesList sortBy={sortBy} />} />
            <Route path="/tv" element={<TvsCard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
