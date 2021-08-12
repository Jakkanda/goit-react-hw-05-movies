import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { MovieDetailsPage } from './Pages/MovieDetailsPage';
import { AppBar } from './components/AppBar/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        {/* <Route path="/movies" exact>
          <MoviePage />
        </Route> */}

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
