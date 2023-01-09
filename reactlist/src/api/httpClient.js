import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://www.omdbapi.com/'
})

export default httpClient