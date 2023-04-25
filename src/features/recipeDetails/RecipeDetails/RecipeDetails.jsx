import { useSelector } from 'react-redux';

import Htag from '@/common/components/Htag';
import Loader from '@/common/components/Loader';
import Table from '@/common/components/Table';

import { selectStatuses } from '../recipeDetailsSlice.js';

import classes from './RecipeDetails.module.scss';

const RecipeDetails = ({
  strMeal,
  strCategory,
  strArea,
  strInstructions,
  strMealThumb,
  strYoutube,
  strSource,
  strIngredientsWithMeasures,
}) => {
  const { status, error } = useSelector(selectStatuses);

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
    <div className={classes.details}>
      <Htag className={classes.detailsTitle} tag='h2'>
        {strMeal}
      </Htag>
      <div className={classes.split}>
        <div className={classes.splitLeft}>
          <img className={classes.detailsImg} src={strMealThumb} alt={strMeal} />
          <p className={classes.detailsInfo}>
            <span>Area: {strArea}</span>
            <span>Category: {strCategory}</span>
          </p>
        </div>
        <div className={classes.splitRight}>
          <Table
            className={classes.detailsTable}
            headers={['Ingredient', 'Measure']}
            data={strIngredientsWithMeasures}
          />
        </div>
      </div>
      <Htag className={classes.detailsTitle} tag='h2' variant='primary'>
        Instructions
      </Htag>
      <p className={classes.detailsInstructions}>{strInstructions}</p>
      {strYoutube && (
        <iframe
          className={classes.detailsVideo}
          src={strYoutube.replace('/watch?v=', '/embed/')}
          width='560'
          height='315'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      )}
      {strSource && (
        <Htag tag='h3' className={classes.detailsSource}>
          Source:{' '}
          <a
            className={classes.detailsSourceLink}
            href={strSource}
            target='_blank'
            rel='noopener noreferrer'
          >
            {strSource}
          </a>
        </Htag>
      )}
    </div>
  );
};

export default RecipeDetails;
