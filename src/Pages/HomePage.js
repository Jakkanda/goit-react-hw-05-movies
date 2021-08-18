import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';
import PageHeading from '../components/PageHeading/PageHeading';
import styled from './HomePage.module.css';

export default function HomePage() {
  const [trendingMoviesList, setTrendingMovieList] = useState([]);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setTrendingMovieList);
  }, []);

  return (
    <div className={styled.wrapper}>
      <PageHeading title="Trending today" />

      {trendingMoviesList && (
        <ul className={styled.list}>
          {trendingMoviesList.map(
            movie =>
              movie.title && (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `movies/${movie.id}`,
                      state: { params: `/` },
                    }}
                  >
                    {movie.title}
                  </Link>
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  );
}
