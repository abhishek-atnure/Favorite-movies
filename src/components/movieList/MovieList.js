import React from "react";

function MovieList({ movies, handleFav }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie">
          <img src={movie.Poster} alt=""></img>
          <h3>{movie.Title}</h3>
          <span>{movie.Year}</span>
          <button onClick={() => handleFav(movie)}>Add to favorites</button>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
