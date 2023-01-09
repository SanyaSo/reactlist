import CardMedia from '@mui/material/CardMedia'

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