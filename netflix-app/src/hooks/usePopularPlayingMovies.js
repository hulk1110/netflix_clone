import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
const usePopularPlayingMovies = () => {
    //fetch data from TMDB API AND UPDATE STORE
    const dispatch = useDispatch();

    const getPopularPlayingMovie = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        console.log("Popular"+ json.results);
        dispatch(addPopularPlayingMovies(json.results))
    };

    useEffect(() => {
        getPopularPlayingMovie();
    }, []);
};

export default usePopularPlayingMovies;