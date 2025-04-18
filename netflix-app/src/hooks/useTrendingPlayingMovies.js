import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTrendingPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const useTrendingPlayingMovies = () => {
    //fetch data from TMDB API AND UPDATE STORE
    const dispatch = useDispatch();

    const getTrendingPlayingMovie = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
            API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        dispatch(addTrendingPlayingMovies(json.results))
    };

    useEffect(() => {
        getTrendingPlayingMovie();
    }, []);
};

export default useTrendingPlayingMovies;