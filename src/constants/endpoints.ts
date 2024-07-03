const BASE_URL='http://localhost:8080'

const ENDPOINTS = {
    GENRES: {
        GET_BY_ID: (id: string) => `${BASE_URL}/genres/${id}`, 
        GET_ALL: `${BASE_URL}/genres/all`,
        REFRESH: `${BASE_URL}/genres/refresh`
    },
    MOVIES: {
        GET_ALL: `${BASE_URL}/movies/all`,
        REFRESH: `${BASE_URL}/movies/refresh`
    }
}

export default ENDPOINTS;