import clsx from 'clsx';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

import Htag from '../Htag';

import classes from './Header.module.scss';

const setClasses = ({ isActive }) =>
  clsx(classes.navLink, { [classes.navLinkActive]: isActive });

const Header = () => (
  <header className={classes.header}>
    <Htag className='visually-hidden' tag='h1'>
      React Recipes App
    </Htag>
    <GiForkKnifeSpoon className={classes.headerLogo} />
    <nav>
      <ul className={classes.navList}>
        <li className={classes.dividerAfter}>
          <NavLink className={setClasses} to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={setClasses} to='/favorites'>
            Favorite Recipes
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
