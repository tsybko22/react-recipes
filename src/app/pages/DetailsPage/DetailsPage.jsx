import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import BtnWithIcon from '@/common/components/BtnWithIcon';
import RecipeDetails from '@/features/recipeDetails/RecipeDetails/';
import {
  fetchRecipeDetailsById,
  selectRecipeDetails,
} from '@/features/recipeDetails/recipeDetailsSlice';

import classes from './DetailsPage.module.scss';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchRecipeDetailsById(recipeId));
  }, [dispatch, recipeId]);

  const details = useSelector(selectRecipeDetails);

  return (
    <section className={classes.detailsPage}>
      <BtnWithIcon
        className={classes.detailsPageBtn}
        text='Back'
        onClick={() => navigate(-1)}
      />
      <RecipeDetails {...details} />
    </section>
  );
};

export default DetailsPage;
