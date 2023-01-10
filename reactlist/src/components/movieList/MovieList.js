import MovieEmptyList from './MovieEmptyList'
import MovieListLoader from './MovieListLoader'
import MovieListBody from './MovieListBody'
import moviesApi from '../../api/movies.api'
import { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import Container from '@mui/material/Container'
import MovieListActions from './MovieListActions'
import './MovieList.css'


export default function MovieList() {
    const [movies, setMovies] = useState([])
    const [busy, setBusy] = useState(false)
    const [totalResults, setTotalResults] = useState('')
    const [page, setPage] = useState(1)
    const [name, setName] = useState('')
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect (() => {
      getSearchParams()
    }, [])
    
    const getSearchParams = () => {
      const name = searchParams.get("name")
      const page = searchParams.get("page")
      getMovieList(name, page)
      setName(name)
      setPage(+page)
    }

    const getMovieList = async (name, page) => {
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
      setSearchParams({})
      await getMovieList(name)
    }
    const changePage = async (event, value) => {
      setPage(value)
      setSearchParams({})
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
          searchName={ name }
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
