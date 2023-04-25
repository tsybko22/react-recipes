import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import BtnWithIcon from '@/common/components/BtnWithIcon/';
import Htag from '@/common/components/Htag';
import RecipesList from '@/features/recipes/RecipesList/';
import { selectFavoriteRecipes } from '@/features/recipes/recipesSlice';

import classes from './FavoritesPage.module.scss';

const FavoritesPage = () => {
  const navigate = useNavigate();
  const recipes = useSelector(selectFavoriteRecipes);

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
        <Htag className={classes.errorTitle} tag='h2'>
          No favorites yet.
        </Htag>
      )}
    </section>
  );
};

export default FavoritesPage;
