import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BtnWithIcon from '@/common/components/BtnWithIcon/';
import Typography from '@/common/components/Typography';
import RecipesList from '@/features/recipes/RecipesList/';
import { resetErrors, selectFavoriteRecipes } from '@/features/recipes/recipesSlice';

import classes from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const recipes = useSelector(selectFavoriteRecipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetErrors());
  }, [dispatch]);

  return (
    <section className={classes.favoritesPage}>
      <BtnWithIcon
        className={classes.favoritesPageBtn}
        text='Back'
        onClick={() => navigate(-1)}
      />
      {recipes.length > 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        <Typography className='errorTitle' tag='h2' variant='h1'>
          No favorites yet.
        </Typography>
      )}
    </section>
  );
};

export default FavoritesPage;
