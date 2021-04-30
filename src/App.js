import React, { useState, useEffect } from "react";
import Heading from "./components/heading/Heading";
import MovieList from "./components/movieList/MovieList";
import SearchBox from "./components/searchBox/SearchBox";
import FavoriteList from "./components/favoriteList/FavoriteList";

function App() {
  const [movies, setMovies] = useState([]);
  const [favMovies, setFavMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addToLocalStorage = (movies) => {
    const stringified = JSON.stringify(movies);
    localStorage.setItem("react_fav_movies", stringified);
  };

  const addFav = (movie) => {
    if (favMovies.length === 0) {
      setFavMovies(movie);
      addToLocalStorage(movie);
    }
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
