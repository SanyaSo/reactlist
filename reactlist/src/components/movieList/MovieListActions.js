import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { useState } from 'react'
import './MovieList.css'


export default function MovieListActions ({ searchMovie, totalResults }) {
    const [searchText, setSearchText] = useState('')
    const onInput = event => {
        setSearchText(event.target.value);
     }

    return (
        <div className='movie-list-actions'>
            <span>{ totalResults } фильмов </span>
            <TextField 
                id="outlined-basic"
                value={searchText}
                onChange={onInput}
                size="small"
                label="Название фильма"
                variant="outlined" 
            />
            <Button onClick={ event => searchMovie(searchText) } variant="contained">Поиск</Button>
        </div>
    )
}