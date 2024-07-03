import axios from "axios";
import ENDPOINTS from "../constants/endpoints";
import { useEffect, useState } from "react";

interface Genre {
    id: number
    name: string
}

export default function GenreList() {
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {
        axios.get(ENDPOINTS.GENRES.GET_ALL)
            .then(res => {
                setGenres(res.data)
            })
    }, [])

    return (
        <div>
            <label htmlFor="genre">Select movie genre: </label>
            <select id="genre" style={{ width: "300px" }}>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>{genre.name}</option>
                ))}
            </select>
        </div>
    )
}
