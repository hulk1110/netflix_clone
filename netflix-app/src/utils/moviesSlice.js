import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            nowPlayingMovies: null,
            popularPlayingMovies: null,
            trendingPlayingMovies:null,
            upcomingPlayingMovies:null,
            trailorVideo :null
        },
        reducers: {
            addNowPlayingMovies: (state, action) => {
                state.nowPlayingMovies = action.payload;
            },
            addTrailorVideo: (state, action) => {
                state.trailorVideo = action.payload;
            },
            addTrendingPlayingMovies: (state, action) => {
                state.trendingPlayingMovies = action.payload;
            },

            addUpcomingPlayingMovies: (state, action) => {
                state.upcomingPlayingMovies = action.payload;
            },
            addPopularPlayingMovies: (state, action) => {
                state.popularPlayingMovies = action.payload;
            },

        }
    }
);

export const { addNowPlayingMovies, addTrailorVideo, addTrendingPlayingMovies,  addUpcomingPlayingMovies, addPopularPlayingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;