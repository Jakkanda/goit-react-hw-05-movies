import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Loader from 'react-loader-spinner';

const HomePage = lazy(
  () => import('./Pages/HomePage.js') /*webpackChankName:"home-page"*/,
);
const MovieDetailsPage = lazy(
  () =>
    import(
      './Pages/MovieDetailsPage'
    ) /*webpackChankName:"movie-details-page"*/,
);
const MoviePage = lazy(
  () => import('./Pages/MoviePage') /*webpackChankName:"movie-page"*/,
);

function App() {
  return (
    <div className="App">
      <AppBar />
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
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviePage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
