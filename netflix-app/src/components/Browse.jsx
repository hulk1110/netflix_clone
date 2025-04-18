import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { Maincontainer } from "./Maincontainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useTrendingPlayingMovies from "../hooks/useTrendingPlayingMovies";
import useUpcomingPlayingMovies from "../hooks/useUpcomingPlayingMovies";
import usePopularPlayingMovies from "../hooks/usePopularPlayingMovies";

export const Browse = () => {
  useNowPlayingMovies();
  useTrendingPlayingMovies();
  useUpcomingPlayingMovies();
  usePopularPlayingMovies();

  return (
    <div>
      <Header />

      <Maincontainer />

      <SecondaryContainer />
    </div>
  );
};
