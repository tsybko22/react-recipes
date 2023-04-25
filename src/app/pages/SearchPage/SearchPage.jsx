import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import RecipesList from '@/features/recipes/RecipesList';
import {
  fetchRecipesBySearch,
  selectRecipesBySearch,
} from '@/features/recipes/recipesSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const { searchTerm } = useParams();
  const recipes = useSelector(selectRecipesBySearch);

  useEffect(() => {
    dispatch(fetchRecipesBySearch(searchTerm));
  }, [dispatch, searchTerm]);

  return <RecipesList recipes={recipes} />;
};

export default SearchPage;
