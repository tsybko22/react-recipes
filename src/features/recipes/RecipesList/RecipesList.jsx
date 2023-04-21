import { useDispatch, useSelector } from 'react-redux';

import Htag from '@/common/components/Htag';
import Loader from '@/common/components/Loader';
import RecipeCard from '@/common/components/RecipeCard';

import {
  addToFavorites,
  removeFromFavorites,
  selectFavoriteRecipes,
  selectStatuses,
} from '../recipesSlice';

import classes from './RecipesList.module.scss';

const RecipesList = ({ recipes }) => {
  const dispatch = useDispatch();
  const { error, status } = useSelector(selectStatuses);
  const favoriteRecipes = useSelector(selectFavoriteRecipes);

  const checkIsFavorite = (recipeId) =>
    favoriteRecipes.some((recipe) => recipe.idMeal === recipeId);

  if (status === 'pending') {
    return <Loader />;
  }

  if (error) {
    return <Htag tag='h2'>{error}</Htag>;
  }

  return (
    <ul className={classes.recipesList}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          isFavorite={checkIsFavorite(recipe.idMeal)}
          onFavoriteAddClick={() => dispatch(addToFavorites(recipe))}
          onFavoriteRemoveClick={() => dispatch(removeFromFavorites(recipe.idMeal))}
          {...recipe}
        />
      ))}
    </ul>
  );
};

export default RecipesList;
