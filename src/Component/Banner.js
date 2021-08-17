import React, { useEffect, useState } from 'react';
import axios from '../Data/axios';
import './Banner.css'

const Banner = ({ fetchUrl }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies() {
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results[Math.floor(Math.random() * requests.data.results.length - 1)]);
            return requests;
        }
        fetchMovies();
    }, [fetchUrl])


    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (

        <header className="banner"
            //   Background image
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                {/* title */}
                <h1 className="banner__title">{movies?.title || movies?.name || movies?.original_name}</h1>
                {/* buttons */}
                <div className="banner_buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">MyList</button>
                </div>
                <h1 className="banner_description">{truncate(movies?.overview, 150)}</h1>
            </div>
            {/* description */}
            <div className="banner__fadein" />

        </header>
    )
}

export default Banner
