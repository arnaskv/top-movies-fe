import axios from "axios";
import ENDPOINTS from "../constants/endpoints";
import { useEffect, useState } from "react";

interface Movie {
    id: number
    title: string
    overview: string
    popularity: number
    posterPath: string
}

export default function MovieList() {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        axios.get(ENDPOINTS.MOVIES.GET_ALL)
            .then(res => {
                setMovies(res.data)
                console.log('movies fetched')
            })
    }, [])

    return (
        <div style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>
            {movies.map((movie) => (
                <div style={{ border: "1px solid darkgrey", borderRadius: "12px", padding: "0.5rem"}}>
                    <div style={{ fontSize: "1.5rem", fontWeight: "bold"}}>{movie.title}</div>
                    <div>{movie.overview}</div>
                </div>
            ))}
        </div>
    )
}
