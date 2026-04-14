import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <>
    <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/>
    <MovieCard movie={{title: "Joes's Film", release_date: "2020"}}/>
    </>
  )
}

export default App