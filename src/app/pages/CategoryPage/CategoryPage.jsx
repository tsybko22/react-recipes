import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RecipesList from '@/features/recipes/RecipesList/';
import {
  fetchRecipesByCategory,
  selectRecipesByCategory,
} from '@/features/recipes/recipesSlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const recipes = useSelector((state) => selectRecipesByCategory(state, category));

  useEffect(() => {
    dispatch(fetchRecipesByCategory(category));
  }, [dispatch, category]);

  return <RecipesList recipes={recipes?.data} />;
};

export default CategoryPage;
