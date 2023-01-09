import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import MovieListCard from './MovieListCard'
import './MovieList.css'

export default function MovieListBody ({ movies, totalResults, page, changePage }) {
  const movieListItems = movies.map((movie) =>
    <Grid key={ movie.imdbID } item xs={ 12 } sm={ 12 } md={ 6 } lg={ 4 }>
      <MovieListCard
        key={ movie.imdbID }
        img={ movie.Poster }
        id={ movie.imdbID }
        title={ movie.Title }
        description={ movie.Year }
      />
    </Grid>
  )
  const totalPage = Math.ceil(+totalResults / 10)
  return (
    <div>
      <Grid container rowSpacing={ 1 } columnSpacing={ 2 }>
        { movieListItems }
      </Grid>
      <div className='movie-list__pagination-box'>
        <Pagination count={ +totalPage } page={ page } onChange={ changePage } variant="outlined" shape="rounded" />
      </div>
    </div>
  )
}