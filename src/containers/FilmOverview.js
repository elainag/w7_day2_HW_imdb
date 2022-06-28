import React, { useState } from 'react';
import FilmList from '../components/FilmList';

const FilmOverview = () => {

    const [films, setFilms] = useState(
        [
            {
                id: 1,
                name: "Spider-Man: Into the Spider-Verse",
                url: "https://www.imdb.com/title/tt4633694/?ref_=rlm"
            },
            {
                id: 2,
                name: "Life Itself",
                url: "https://www.imdb.com/title/tt5989218/?ref_=rlm"
            },
            {
                id: 3,
                name: "Mary Queen of Scots",
                url: "https://www.imdb.com/title/tt2328900/?ref_=rlm"
            },
            {
                id: 4,
                name: "The Lego Movie 2: The Second Part", url: "https://www.imdb.com/title/tt3513498/?ref_=rlm"
            },
            {
                id: 5,
                name: "Captain Marvel",
                url: "https://www.imdb.com/title/tt4154664/?ref_=rlm"
            }
        ]

    )
    let url = "";
    const upcomingMovies = "https://www.imdb.com/calendar/?region=gb";

    return (
        <>
            <h2>Film Overview</h2>
            <FilmList films={films} />
            <br></br>
            <br></br>
            <br></br>
            <p>View More Upcoming Releases</p>
            <a>href={upcomingMovies}</a>
        </>

    )
}

export default FilmOverview;