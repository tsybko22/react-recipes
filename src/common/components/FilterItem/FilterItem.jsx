import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import classes from './FilterItem.module.scss';

const setClasses = ({ isActive }) =>
  clsx(classes.filterLink, { [classes.filterLinkActive]: isActive });

const FilterItem = ({ text, ...props }) => (
  <li>
    <NavLink className={setClasses} {...props}>
      {text}
    </NavLink>
  </li>
);

export default FilterItem;
