import React from "react";
import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { Maincontainer } from "./Maincontainer";
import { SecondaryContainer } from "./SecondaryContainer";

export const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />

      <Maincontainer />

      <SecondaryContainer />
    </div>
  );
};
