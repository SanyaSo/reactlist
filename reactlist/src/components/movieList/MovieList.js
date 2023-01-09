import MovieEmptyList from './MovieEmptyList'
import MovieListLoader from './MovieListLoader'
import MovieListBody from './MovieListBody'
import moviesApi from '../../api/movies.api';
import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import MovieListActions from './MovieListActions';
import './MovieList.css'


export default function MovieList() {
    const [movies, setMovies] = useState([])
    const [busy, setBusy] = useState(false)
    const [totalResults, setTotalResults] = useState('')
    const [page, setPage] = useState(1)
    const [name, setName] = useState('')

    useEffect (() => {
      getMovieList()
    }, [])

    const getMovieList = async (name, page) => {
      console.log('page')
      try {
        setBusy(true)
        const { movies, totalResults } = await moviesApi.getMoviesList(name, page)
        setMovies(movies)
        setTotalResults(totalResults)
        setBusy(false)
      } catch (error) {
        setMovies([])
        setBusy(false)
      }
    }
    const searchMovie = async (name) => {
      setName(name)
      setPage(1)
      await getMovieList(name)
    }
    const changePage = async (event, value) => {
      setPage(value)
      await getMovieList(name, value)
    }

    const MovieList = () => {
      if (busy) {
        return <MovieListLoader/>
      } else if (!busy && movies && movies.length) {
        return <MovieListBody
          movies={ movies }
          totalResults={ totalResults }
          page={ page }
          changePage={ changePage }
        />
      } else if (!busy && !movies) {
        return <MovieEmptyList />
      }
    }

    return (
      <div className='movie-list'>
        <Container maxWidth="lg">
          <MovieListActions searchMovie={ searchMovie } totalResults={ totalResults } />
          <MovieList />
        </Container>
      </div>
    );
}
