import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterItem from '@/common/components/FilterItem';
import Loader from '@/common/components/Loader';
import Typography from '@/common/components/Typography';
import {
  fetchCategories,
  selectCategories,
} from '@/features/categories/categoriesSlice.js';

import classes from './CategoryFilter.module.scss';

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const { entities: categories, status, error } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === 'pending') {
    return <Loader />;
  }

  if (error) {
    return (
      <Typography className={classes.errorTitle} tag='h2' variant='h2'>
        {error}
      </Typography>
    );
  }

  return (
    <ul className={classes.categoriesFilter}>
      {categories.map((category) => (
        <FilterItem
          key={category}
          text={category}
          to={`/categories/${category.toLowerCase()}`}
        />
      ))}
    </ul>
  );
};

export default CategoryFilter;
