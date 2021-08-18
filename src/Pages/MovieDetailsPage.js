import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, NavLink, Route } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  const [movie, setMovie] = useState(null);
  const [casts, setCasts] = useState(null);
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    moviesAPI.fetchDetailsByMovie(movieId).then(setMovie);
    moviesAPI.fetchCastMovie(movieId).then(setCasts);
    moviesAPI.fetchReviewsMovie(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>
            {movie.title} ({movie.release_date.substr(0, 4)})
          </h2>
          <p>User score: {Number(movie.vote_average * 10)} %</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres.map(genre => genre.name).join(' ')}</p>
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
          <Route to="/movies/:movieId/cast">
            {casts && <Cast casts={casts} />}
          </Route>
          <Route to="/movies/:movieId/reviews">
            {reviews && <Reviews reviews={reviews} />}
          </Route>
        </>
      )}
    </>
  );
}
