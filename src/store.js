import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./components/movieList/movieSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
});
