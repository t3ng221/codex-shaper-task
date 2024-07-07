// src/App.js
import React from "react";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import MovieCard from "./components/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";
import NewestReleases from "./components/NewestRelease";

const App = () => {
  return (
    <div className="App">
      <Header />

      <MainBanner />
      <div className="movie-list">
        <MovieCard
          image="/src/assets/Rectangle 191.png"
          title="Sameill Sroile"
          genre="Action, Comedy"
          rating="4.5"
          duration="02h 30m"
          quality="4k Quality"
        />
        <MovieCard
          image="/src/assets/Rectangle 191.png"
          title="The Family Monky"
          genre="Comedy"
          rating="4.5"
          duration="02h 30m"
          quality="4k Quality"
        />
        <MovieCard
          image="/src/assets/Rectangle 191.png"
          title="Chiefly Universes"
          genre="Action, Crime"
          rating="4.5"
          duration="02h 30m"
          quality="4k Quality"
        />
        <MovieCard
          image="/src/assets/Rectangle 191.png"
          title="World War 02"
          genre="Action, Crime"
          rating="4.5"
          duration="02h 30m"
          quality="4k Quality"
        />
      </div>
      <NewestReleases />
    </div>
  );
};

export default App;
