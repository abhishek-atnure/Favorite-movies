import React, { useState, useEffect } from "react";
import Heading from "./components/heading/Heading";
import MovieList from "./components/movieList/MovieList";
import SearchBox from "./components/searchBox/SearchBox";
import FavoriteList from "./components/favoriteList/FavoriteList";

function App() {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToLocalStorage = (movies) => {
    const stringified = JSON.stringify(movies);
    localStorage.setItem("react_fav_movies", stringified);
  };

  const addFav = (movie) => {
    const newFav = [...favMovies, movie];
    console.log(newFav);
    setFavMovies(newFav);
    addToLocalStorage(newFav);
  };

  const removeFav = (movie) => {
    const newFav = favMovies.filter((fav) => fav.imdbID !== movie.imdbID);

    console.log(newFav);
    setFavMovies(newFav);
    addToLocalStorage(newFav);
  };

  useEffect(() => {
    const getMovies = async () => {
      const URL = `https://www.omdbapi.com/?s=${searchTerm}&apikey=a9c4ae38`;

      const resposne = await fetch(URL);
      const data = await resposne.json();
      if (data.Search) {
        setMovies(data.Search);
      }
    };

    getMovies(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("react_fav_movies"));
    setFavMovies(getItem);
  }, []);

  return (
    <div className="App">
      <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Heading value={"Movies"} />
      <MovieList movies={movies} handleFav={addFav} />
      <Heading value={"Favorites"} />
      <FavoriteList movies={favMovies} handleFav={removeFav} />
    </div>
  );
}

export default App;
