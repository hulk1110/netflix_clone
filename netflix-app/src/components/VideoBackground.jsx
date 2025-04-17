import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";
export const VideoBackground = ({ movieId }) => {
  useMovieTrailor(movieId);
  const trailorVideo = useSelector((store) => store.movies.trailorVideo);

  return (
    <div className="w-screen">
      <iframe
      className="w-screen aspect-video"
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/` + trailorVideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
