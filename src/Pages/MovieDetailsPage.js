import { useState, useEffect, useRef, Suspense, lazy } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  useHistory,
  NavLink,
  Route,
} from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';
import Loader from 'react-loader-spinner';
import styled from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const routerState = useRef(null);

  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesAPI.fetchDetailsByMovie(movieId).then(setMovie);
    moviesAPI.fetchCastMovie(movieId).then(setCasts);
    moviesAPI.fetchReviewsMovie(movieId).then(setReviews);
  }, [movieId]);

  useEffect(() => {
    if (!routerState.current) {
      routerState.current = location.state;
    }
  }, [location.state]);

  const onGoBack = () => {
    const url = routerState.current ? `${routerState.current.params}` : '/';
    history.push(url);
  };

  return (
    <div className={styled.wrapper}>
      <button type="button" className={styled.button} onClick={onGoBack}>
        ← Go back
      </button>
      {movie && (
        <div className={styled.wrapper}>
          <div className={styled.card}>
            <img
              src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={styled.movie}>
              <h2>
                {movie.title} ({movie.release_date.substr(0, 4)})
              </h2>
              <p>User score: {Number(movie.vote_average * 10)} %</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
            </div>
          </div>
          <hr />
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
          <hr />
          <Suspense
            fallback={
              <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
              />
            }
          >
            <Route path={`${path}/cast`}>
              {casts && <Cast casts={casts} />}
            </Route>

            <Route path={`${path}/reviews`}>
              {reviews && <Reviews reviews={reviews} />}
            </Route>
          </Suspense>
        </div>
      )}
    </div>
  );
}
