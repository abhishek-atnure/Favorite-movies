import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function FavoriteList({ movies, handleFav }) {
  return (
    <div className="movie-list">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <div className="movie">
            <img src={movie.Poster} alt=""></img>
            <h3>{movie.Title}</h3>
            <span>{movie.Year}</span>
            <button
              onClick={() => {
                handleFav(movie);
                toast.dark("💔 Removed from favorite!", {
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
              Remove favorite
            </button>
          </div>
        ))
      ) : (
        <h3>No favorite movies added !</h3>
      )}
    </div>
  );
}

export default FavoriteList;
