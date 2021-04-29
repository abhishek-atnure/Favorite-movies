import React from "react";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.movies.length > 0 ? (
        props.movies.map((movie) => (
          <div className="movie">
            <img src={movie.Poster} alt=""></img>
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
            <button onClick={() => props.handleFav(movie)}>
              Add to favorites
            </button>
          </div>
        ))
      ) : (
        <h3>Search for movies to show</h3>
      )}
    </div>
  );
}

export default MovieList;
