import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';
import styled from './MoviePage.module.css';

export default function MoviePage() {
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState(null);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const searchMovie = e.target.elements[0].value;
    setQuery(searchMovie);
    localStorage.setItem('query', JSON.stringify(searchMovie));
    history.push(`${window.location.pathname}?query=${searchMovie}`);
  };

  const savedQuery = JSON.parse(localStorage.getItem('query'));

  useEffect(() => {
    if (!savedQuery && query === '') {
      return;
    } else if (!query) {
      moviesAPI
        .fetchByKeyword(savedQuery)
        .then(result => {
          setMoviesList(result);
        })
        .catch(error => console.log(error));
    } else {
      moviesAPI
        .fetchByKeyword(query)
        .then(result => {
          setMoviesList(result);
        })
        .catch(error => console.log(error));
    }
  }, [query, savedQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className={styled.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit" className={styled.button}>
          Search
        </button>
      </form>
      {moviesList && (
        <ul>
          {moviesList.map(
            movie =>
              movie.title && (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `movies/${movie.id}`,
                      state: {
                        params: `${window.location.pathname}?query=${query}`,
                      },
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              ),
          )}
        </ul>
      )}
    </>
  );
}
