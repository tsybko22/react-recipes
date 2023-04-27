import { useSelector } from 'react-redux';

import Loader from '@/common/components/Loader';
import Table from '@/common/components/Table';
import Typography from '@/common/components/Typography';

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
      <Typography className='errorTitle' tag='h2' variant='h1'>
        {error}
      </Typography>
    );
  }

  return (
    <div className={classes.details}>
      <Typography className={classes.detailsTitle} tag='h2' variant='h1'>
        {strMeal}
      </Typography>
      <div className={classes.split}>
        <div className={classes.splitLeft}>
          <img className={classes.detailsImg} src={strMealThumb} alt={strMeal} />
          <Typography tag='p' variant='p2' className={classes.detailsInfo}>
            <span>Area: {strArea}</span>
            <span>Category: {strCategory}</span>
          </Typography>
        </div>
        <div className={classes.splitRight}>
          <Table
            className={classes.detailsTable}
            headers={['Ingredient', 'Measure']}
            data={strIngredientsWithMeasures}
          />
        </div>
      </div>
      <Typography className={classes.detailsTitle} tag='h2' variant='h2' color='primary'>
        Instructions
      </Typography>
      <Typography className={classes.detailsInstructions} tag='p' variant='p'>
        {strInstructions}
      </Typography>
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
        <Typography tag='h3' variant='h3' className={classes.detailsSource}>
          Source:{' '}
          <a
            className={classes.detailsSourceLink}
            href={strSource}
            target='_blank'
            rel='noopener noreferrer'
          >
            {strSource}
          </a>
        </Typography>
      )}
    </div>
  );
};

export default RecipeDetails;
