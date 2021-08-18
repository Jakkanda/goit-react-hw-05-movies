import { NavLink } from 'react-router-dom';
import styled from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={styled.navigation}>
      <NavLink exact to='/' className={styled.link} activeClassName={styled.activeLink}>Home page</NavLink>
      <NavLink exact to='/movies' className={styled.link} activeClassName={styled.activeLink}>Movies Page</NavLink>
    </nav>
  );
}
