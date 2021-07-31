import { NavLink } from 'react-router-dom';
import styled from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styled.navigation}>
      <NavLink exact to='/' className={styled.link} activeClassName={styled.activeLink}>Home page</NavLink>
      <NavLink exact to='/movies' className={styled.link} activeClassName={styled.activeLink}>Movies Page</NavLink>
      <NavLink exact to='/movies/:movieId' className={styled.link} activeClassName={styled.activeLink}>MoviesDetailsPage</NavLink>
      <NavLink exact to='/movies/:movieId/cast' className={styled.link} activeClassName={styled.activeLink}>Cast</NavLink>
      <NavLink exact to='/movies/:movieId/reviews' className={styled.link} activeClassName={styled.activeLink}>Reviews</NavLink>
    </nav>
  );
}
