import Container from '@mui/material/Container'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieShowerImg from './MovieShowerImg'
import moviesApi from '../../api/movies.api';
import MovieShowerProperties from './MovieShowerProperties';
import './MovieShower.css'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom"
import MovieListLoader from '../movieList/MovieListLoader';

export default function MovieShower () {
  const [busy, setBusy] = useState(false)
  const [movie, setMovie] = useState({})
  const { movieId } = useParams()
  const navigate = useNavigate()


  useEffect(() => {
    getMovieById()
  }, [])

  const openMovieList = () => {
    navigate(`/`)
  }

  const getMovieById = async () => {
    try {
      setBusy(true)
      const { movie } = await moviesApi.getMovieById(movieId)
      setMovie(movie)
      setBusy(false)
    } catch (error) {
      setBusy(false)
    }
  }
  const MovieShower = () => {
    if (busy) {
      return <MovieListLoader />
    } else {
      return (
        <div>
          <MovieShowerImg img={ movie.Poster }/>
          <MovieShowerProperties movie={ movie } />
        </div>
      )
    }
  }
  console.log(busy)
  return (
    <div className='movie-shower'>
      <Container maxWidth="lg">
        <Button onClick={ openMovieList } variant="text" startIcon={<ArrowBackIcon />}>
           Назад
        </Button>
        <MovieShower />
      </Container>
    </div>
  )
}