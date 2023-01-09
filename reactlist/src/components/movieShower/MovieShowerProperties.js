import './MovieShower.css'

export default function MovieShowerProperties ({ movie }) {
  const PropertiesDTO = {
    Actors: 'Актерский состав',
    BoxOffice: 'Кассовые cборы',
    Country: 'Страна',
    Director: 'Режиссер',
    Released: 'Дата выхода',
    Title: 'Названия фильма',
    Writer: 'Сценарист',
    imdbRating: 'Рейтинг'
  }
  const properties = []
  for (const key in movie) {
    if (PropertiesDTO[key]) {
      const title = PropertiesDTO[key]
      const value = movie[key]
      const propertiesItem = (<div className='movie-shower-properties__item'><span className='movie-shower-properties__title'>{ title }:</span> { value }</div>)
      properties.push(propertiesItem)
    }
  }
  return (
      <div className="movie-shower-properties">
        { properties }
      </div>
  )
}