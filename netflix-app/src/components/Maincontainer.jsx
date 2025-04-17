import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { VideoTitle } from './VideoTitle';
import { VideoBackground } from './VideoBackground';

export const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  const mainMovie = useMemo(() => {
    if (!movies || movies.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  }, [movies]);

  if (!mainMovie) return null;

  const { original_title, overview } = mainMovie;

  console.log(mainMovie);

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
};
