import { useDispatch, useSelector } from 'react-redux';

import Loader from '@/common/components/Loader';
import RecipeCard from '@/common/components/RecipeCard';
import Typography from '@/common/components/Typography';

import {
  addToFavorites,
  removeFromFavorites,
  selectFavoriteRecipes,
  selectStatuses,
} from '../recipesSlice';

import classes from './RecipesList.module.scss';

const RecipesList = ({ recipes = [] }) => {
  const dispatch = useDispatch();
  const { error, status } = useSelector(selectStatuses);
  const favoriteRecipes = useSelector(selectFavoriteRecipes);

  const checkIsFavorite = (recipeId) =>
    favoriteRecipes.some((recipe) => recipe.idMeal === recipeId);

  if (status === 'pending') {
    return <Loader />;
  }

  if (error) {
    return (
      <Typography tag='h2' variant='h2'>
        {error}
      </Typography>
    );
  }

  return (
    <ul className={classes.recipesList}>
      {recipes.length > 0 &&
        recipes.map((recipe) => (
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
