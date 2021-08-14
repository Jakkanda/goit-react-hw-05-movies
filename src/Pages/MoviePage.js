import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';

export default function MoviePage() {
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState(null);

  //   const handleInputChange = e => {
  //     setQuery( e.target.value);
  //   };

  const handleSubmit = e => {
    e.preventDefault();

    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }
    moviesAPI.fetchByKeyword(query).then(setMoviesList);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <button type="submit">Search</button>
      </form>
      {moviesList && <p>Тут будет список книг</p>}
    </>
  );
}
