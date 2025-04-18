import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img alt="Movie Cart" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};
