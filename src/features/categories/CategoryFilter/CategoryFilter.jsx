import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterItem from '@/common/components/FilterItem';
import Htag from '@/common/components/Htag';
import Loader from '@/common/components/Loader';
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
      <Htag className={classes.errorTitle} tag='h2'>
        {error}
      </Htag>
    );
  }

  return (
    <ul className={classes.categoriesList}>
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
