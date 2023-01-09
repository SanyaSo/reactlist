import './MovieList.css'

export default function MovieEmptyList () {
  return (
    <div className='movie-empty-list'>
      <h1>Не удалось найти фильм по вашему запросу попробуте изменить название</h1>
    </div>
  )
}