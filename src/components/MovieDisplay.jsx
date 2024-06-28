function MovieDisplay({movie}){
    return (
        <>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>Release Date: {movie.Released}</p>
            <p>Plot: {movie.Plot}</p>
            <div>
                Ratings:{""}
                {movie?.Ratings?.map((rating) => (
                    <div key={rating.Source}>
                        {rating.Source}: {rating.Value}
                    </div>
                ))}
            </div>
        </>
    );
};
export default MovieDisplay