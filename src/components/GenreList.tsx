import axios from "axios";
import ENDPOINTS from "../constants/endpoints";
import { FC, useEffect, useState } from "react";

interface Props {
    setCurrentGenreId: (genreId: number) => void
}

interface Genre {
    id: number
    name: string
}

const GenreList: FC<Props> = ({ setCurrentGenreId }) => {
    const [genres, setGenres] = useState<Genre[]>([])

    useEffect(() => {


        axios.get(ENDPOINTS.GENRES.GET_ALL)
            .then(res => {
                setGenres(res.data)
            })
    }, [])

    const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentGenreId(Number(event.target.value))
    }

    return (
        <div>
            <label htmlFor="genre">Select movie genre: </label>
            <select id="genre" style={{ width: "300px" }} onChange={handleGenreChange}>
                <option value={0}>All</option>
                {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default GenreList;
