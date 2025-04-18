import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.trendingPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingPlayingMovies} />
      </div>
    </div>
  );
};
