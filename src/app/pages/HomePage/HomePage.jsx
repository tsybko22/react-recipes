import { Outlet } from 'react-router-dom';

import SearchBar from '@/common/components/SearchBar';
import CategoryFilter from '@/features/categories/CategoryFilter';

import classes from './HomePage.module.scss';

const HomePage = () => (
  <section className={classes.homePage}>
    <SearchBar />
    <CategoryFilter />
    <Outlet />
  </section>
);

export default HomePage;
