import React, { useEffect, useState } from 'react';
import axios from '../Data/axios';
import './MoviesLists.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const MoviesLists = ({ title, fetchUrl, isLargePoster }) => {
    const base_url = "https://image.tmdb.org/t/p/original"
    const [movies, setMovies] = useState([]);
    const [trailer, setTrailer] = useState('')

    useEffect(() => {
        async function fetchMovies() {
            //if [], run once when the row loads and dont run again
            const data = await axios.get(fetchUrl);

            setMovies(data.data.results);
            return data;

        };
        fetchMovies();
    }, [fetchUrl])

    console.log(movies);
    const trailerHandler = (movie) => {
        if (trailer) {
            setTrailer('');
        }
        movieTrailer(movie?.name || movie?.original_title || movie?.original_name || "").then(
            (url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailer(urlParams.get('v'))
            }
        ).catch(error =>
            console.log(error)
        );
    }

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div className="row">

            <h1>{title}</h1>
            {/* several movies poster */}
            <div className="row__posters">
                {movies.map((elements) =>
                (<img key={elements.id}
                    className={`movies__poster ${isLargePoster && 'large__poster'}`}
                    src={`${base_url}${isLargePoster ? elements.poster_path : elements.backdrop_path}`}
                    alt={elements.name}
                    onClick={() => trailerHandler(elements)} />)
                )
                }

            </div>
            {trailer && <YouTube videoId={trailer} opts={opts} />}
        </div>
    )
}

export default MoviesLists
