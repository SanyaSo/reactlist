import { Routes, Route } from 'react-router-dom'
import MovieList from "./components/movieList/MovieList";
import MovieShower from './components/movieShower/MovieShower'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <MovieList /> }></Route>
        <Route path=":movieId" element={ <MovieShower /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
