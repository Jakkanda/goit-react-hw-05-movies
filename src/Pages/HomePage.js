import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';
import PageHeading from '../components/PageHeading/PageHeading';

export default function HomePage() {
  const [trendingMoviesList, setTrendingMovieList] = useState([]);

  useEffect(() => {
    moviesAPI.fetchTrendingMovies().then(setTrendingMovieList);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />

      {trendingMoviesList && (
        <ul>
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
    </>
  );
}
