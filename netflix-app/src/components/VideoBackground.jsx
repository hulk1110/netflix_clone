import React from "react";
import { API_OPTIONS } from "../utils/constant";
import { addTrailorVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
export const VideoBackground = ({ movieId }) => {
    const trailorVideo = useSelector((store)=>store.movies.trailorVideo);
    const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    const filteredData = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailorVideo(trailer))

  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return (
    //fetch trailer video

    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/`+trailorVideo?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
