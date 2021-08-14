import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/fetch-moviesAPI';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    moviesAPI.fetchDetailsByMovie(movieId).then(setMovie);
  }, [movieId]);

  return <>{movie && <h2>Hello</h2>}</>;
}
