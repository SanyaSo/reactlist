import './MovieShower.css'

export default function MovieShowerProperties ({ movie }) {
  const PropertiesDTO = {
    Actors: 'Актерский состав',
    BoxOffice: 'Кассовые зборы',
    Country: 'Страна',
    Director: 'Режиссер',
    Released: 'Дата выхода',
    Title: 'Названия фильма',
    Writer: 'Сценарист'
  }
  const properties = []
  for (const key in movie) {
    if (PropertiesDTO[key]) {
      const title = PropertiesDTO[key]
      const value = movie[key]
      const propertiesItem = (<li><span>{ title }:</span> { value }</li>)
      properties.push(propertiesItem)
    }
  }
  return (
      <ul className="movie-shower-properties">
        { properties }
      </ul>
  )
}