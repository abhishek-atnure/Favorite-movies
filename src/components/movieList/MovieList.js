import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function MovieList({ movies, handleFav }) {
  return (
    <div className="movie-list">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie" key={movie.imdbID}>
            <img src={movie.Poster} alt=""></img>
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
            <button
              onClick={() => {
                handleFav(movie);
                toast.dark("♥ Added as favorite!", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }}
            >
              Add to favorites
            </button>
          </div>
        ))
      ) : (
        <h3>Search movies to show !</h3>
      )}
    </div>
  );
}

export default MovieList;
