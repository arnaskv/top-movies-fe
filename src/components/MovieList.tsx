import axios from "axios";
import ENDPOINTS from "../constants/endpoints";
import { FC, useEffect, useState } from "react";

interface Props {
    currentGenreId: number
}

interface Movie {
    id: number
    title: string
    overview: string
    popularity: number
    posterPath: string
    rating: number
}

interface Genre {
    id: number
    name: string
    movies: Movie[]
}

const MovieList: FC<Props> = ({ currentGenreId }) => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        if (currentGenreId !== 0) {
            axios.get(ENDPOINTS.GENRES.GET_BY_ID, { params: { id: currentGenreId } })
                .then(res => {
                    const genre: Genre = res.data
                    setMovies(genre.movies)
                })
        } else {
            axios.get(ENDPOINTS.MOVIES.GET_ALL,)
                .then(res => {
                    setMovies(res.data)
                })
        }

    }, [currentGenreId])

    if (movies.length > 0) {
        return (
            <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
                {movies.map((movie) => (
                    <div key={movie.id} style={{ border: "1px solid darkgrey", borderRadius: "12px", padding: "0.5rem", display: "flex" }}>
                        <div style={{ width: "90%" }}>
                            <div style={{ fontSize: "1.5rem", fontWeight: "bold"}}>{movie.title}</div>
                            <div>{movie.overview}</div>
                        </div >
                            <div style={{ display: "flex", flexGrow:"1", justifyContent: "center", alignSelf: "center" }}>
                                <div>
                                    {movie.rating}
                                </div>
                            </div>
                    </div>
                ))}
            </div>
        )
    } else {
        return <p>There are no top movies in this genre.</p>
    }
}

export default MovieList;
