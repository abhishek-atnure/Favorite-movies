import React from "react";

function MovieList({ movies, handleFav }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie">
            <img src={movie.Poster} alt=""></img>
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
            <button onClick={() => handleFav(movie)}>Add to favorites</button>
          </div>
        ))
      ) : (
        <h3>Search for movies to show</h3>
      )}
    </div>
  );
}

export default MovieList;
