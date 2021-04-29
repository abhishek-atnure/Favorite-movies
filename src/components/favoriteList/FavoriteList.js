import React from "react";

function FavoriteList(props) {
  return (
    <div className="movie-list">
      {props.movies.length > 0 ? (
        props.movies.map((movie) => (
          <div className="movie">
            <img src={movie.Poster} alt=""></img>
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
            <button onClick={() => props.handleFav(movie)}>
              Remove favorite
            </button>
          </div>
        ))
      ) : (
        <h3>No Favorites available</h3>
      )}
    </div>
  );
}

export default FavoriteList;
