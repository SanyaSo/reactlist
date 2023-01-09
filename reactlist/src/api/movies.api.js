import httpClient from "./httpClient";
const defaultParams = {
    apiKey: '7ba24c8c',
    type: 'movie',
}
function getParamsForMoviesList (name, page) {
  const params = {
    s: getDefaultValue(name, 'avatar'),
    page: getDefaultValue(page, 1)
  }
  return { ...params, ...defaultParams}
}

function getParamsFromMovie (id) {
    const params = {
        i: `${id}`
    }
    return { ...params, ...defaultParams}
}

function getDefaultValue (value, defaultValue) {
  if (!value) {
    return defaultValue
  } else {
    return value
  }
}

const moviesApi = {
  async getMoviesList (name, page) {
    const params = getParamsForMoviesList(name, page)
    const { data } = await httpClient.get('', {
        params: params
    })
    return {
      movies: data.Search,
      totalResults: data.totalResults
    }
  },
  async getMovieById (id) {
    const params = getParamsFromMovie(id)
    const { data } = await httpClient.get('', {
        params: params
    })
    return { 
      movie: data
    }
  }
}

export default moviesApi