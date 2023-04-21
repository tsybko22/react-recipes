import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RecipesList from '@/features/recipes/RecipesList/RecipesList';
import {
  fetchRecipesByCategory,
  selectRecipesByCategory,
} from '@/features/recipes/recipesSlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchRecipesByCategory(category));
  }, [dispatch, category]);

  const recipes = useSelector(selectRecipesByCategory);

  return <RecipesList recipes={recipes} />;
};

export default CategoryPage;