import CardMedia from '@mui/material/CardMedia'
import './MovieShower.css'

export default function MovieShowerImg ({ img }) {
  return (
    <div className='movie-shower-img'>
      <CardMedia
        component="img"
        height="400"
        image={ img }
        alt="green iguana"
      />
    </div>
  )
}