import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';

export function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    moviesAPI.fetchDetailsByMovie(movieId).then(setMovie);
  }, [movieId]);

  return <>{movie && <h2>{movie.title}</h2>}</>;
}
