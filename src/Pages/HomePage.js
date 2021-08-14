import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';

export default function HomePage() {
  const [trendingMoviesList, setTrendingMovieList] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setTrendingMovieList);
  }, []);

  return (
    trendingMoviesList &&
    trendingMoviesList.map(movie => (
      <li key={movie.id}>
        <Link to={`${url}/${movie.id}`}>{movie.title}</Link>
      </li>
    ))
  );
}
