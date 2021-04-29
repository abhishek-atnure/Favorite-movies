import React from "react";

function FavoriteList({ movies, handleFav }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie">
            <img src={movie.Poster} alt=""></img>
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
            <button onClick={() => handleFav(movie)}>Remove favorite</button>
          </div>
        ))
      ) : (
        <h3>No Favorites available</h3>
      )}
    </div>
  );
}

export default FavoriteList;
