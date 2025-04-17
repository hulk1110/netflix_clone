import React, { useState } from "react";
import { API_OPTIONS } from "../utils/constant";

import { useEffect } from "react";
export const VideoBackground = ({ movieId }) => {
  const [trailerId, setTrailerId] = useState(null);
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
    setTrailerId(trailer.key);
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
        src={`https://www.youtube.com/embed/${trailerId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
