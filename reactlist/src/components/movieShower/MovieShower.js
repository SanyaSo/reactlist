import Container from '@mui/material/Container'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MovieShowerImg from './MovieShowerImg'
import moviesApi from '../../api/movies.api';
import MovieShowerProperties from './MovieShowerProperties';
import './MovieShower.css'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MovieShower () {
  const [busy, setBusy] = useState(false)
  const [movie, setMovie] = useState({})
  const { movieId } = useParams()
  useEffect(() => {
    // getMovieById()
  })

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
  console.log(busy)
  return (
    <div className='movie-shower'>
      <Container maxWidth="lg">
        <Button variant="text" startIcon={<ArrowBackIcon />}>
           Назад
        </Button>
        <MovieShowerImg img={ movie.Poster }/>
        <button onClick={ getMovieById }> getMovie </button>
        <MovieShowerProperties movie={ movie } />
      </Container>
    </div>
  )
}