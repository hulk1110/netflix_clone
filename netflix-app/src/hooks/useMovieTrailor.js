import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailorVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailor = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
      console.log("Fetched video results:", json.results);

      const filteredData = json.results.filter(
        (video) => video.type === "Trailer"
      );

      let trailer = null;
      if (filteredData.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredData.length);
        trailer = filteredData[randomIndex];
      } else if (json.results.length > 0) {
        trailer = json.results[0];
      }

      if (trailer) {
        dispatch(addTrailorVideo(trailer));
      }
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideo();
    }
  }, [movieId]);
};

export default useMovieTrailor;
