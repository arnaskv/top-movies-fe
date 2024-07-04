import {  useState } from 'react'
import './App.css'
import GenreList from './components/GenreList'
import MovieList from './components/MovieList'

function App() {
  const [currentGenreId, setCurrentGenreId] = useState<number>(0)

  return (
    <div className='app-box'>
      <div style={{ fontSize: "2rem", fontWeight: "bold" }}>Top movie list</div>
      <GenreList setCurrentGenreId={setCurrentGenreId}/>
      <MovieList currentGenreId={currentGenreId}/>
    </div>
  )
}

export default App
