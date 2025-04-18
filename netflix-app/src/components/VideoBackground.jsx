import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

export const VideoBackground = ({ movieId }) => {
  useMovieTrailor(movieId);
  const trailorVideo = useSelector((store) => store.movies.trailorVideo);

  return (
    <div className="w-screen aspect-video relative z-0">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailorVideo?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailorVideo?.key}&modestbranding=1&showinfo=0&rel=0`}
        title="Netflix Trailer Background"
        allow="autoplay; encrypted-media"
        allowFullScreen
        frameBorder="0"
      ></iframe>
    </div>
  );
};
