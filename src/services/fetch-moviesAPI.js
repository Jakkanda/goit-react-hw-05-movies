const API_KEY = '82df875c406d660a80bf926e60fe22b9';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '') {
  try {
    const response = await fetch(url);
    const movies = await response.json();
    console.log(movies);
    return movies.results;
  } catch (error) {
    console.log(error);
  }
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}

export function fetchByKeyword(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
}

export async function fetchDetailsByMovie(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
    );
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCastMovie(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
    );
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchReviewsMovie(movieId) {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    );
    const movie = await response.json();
    return movie;
  } catch (error) {
    console.log(error);
  }
}
