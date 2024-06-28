import { useState, useEffect } from "react";
import MovieDisplay from './MovieDisplay'



const MovieForm = () => {
    const [movies, setMovies] = useState (null);


    const [movie, setmovie] = useState("");


    const fetchMovie = async (Title) => {
        const request = await fetch(
            `http://www.omdbapi.com/?t=${Title}&apikey=e4444310`
        );
        const response = await request.json();
        setMovies (response)
    }
    
    useEffect(() => {
        if (movie.length > 1) {

            
        }
    }, [movie]);

    const handlechange = (event) => {
        const {value} = event.target;

        setmovie(value)
    }


    const handlesubmit = (event) => {
        event.preventDefault();
        fetchMovie(movie);
    }
    
    
    return (
        <>
            <form>
                <label>
                    Search Movie:
                    <input 
                    type="search" 
                    name="searchMovie"
                    value={movie}
                    onChange={handlechange}
                    />
                </label>
                <button type="submit" onChange={handlesubmit}>search...</button>
            </form>
            <section>
                {!!movies && (

                    <MovieDisplay movie={movies} />
                )}
                
            </section>
        </>
    )
}
export default MovieForm