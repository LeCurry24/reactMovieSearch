import styles from './MovieDis.module.css'

function MovieDisplay({movie}){
    return (
            <div className={styles.body}>
                <div className={styles.container}>
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className={styles.movieInfo}>
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
                </div>
            </div>
    );
};
export default MovieDisplay