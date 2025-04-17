import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";
export const VideoBackground = ({ movieId }) => {
  useMovieTrailor(movieId);
  const trailorVideo = useSelector((store) => store.movies.trailorVideo);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/` + trailorVideo?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
