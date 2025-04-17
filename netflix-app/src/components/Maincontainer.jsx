import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'

export const Maincontainer = () => {
const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
if(!movies)return;
const mainMovie =movies[0];
console.log(mainMovie);

  return (
    <div>
        <VideoTitle></VideoTitle>
        <VideoBackground></VideoBackground>
    </div>
  )
}
