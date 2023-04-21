import clsx from 'clsx';
import { FaHeart } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import classes from './RecipeCard.module.scss';

const RecipeCard = ({
  idMeal,
  strMeal,
  strMealThumb,
  isFavorite,
  onFavoriteAddClick,
  onFavoriteRemoveClick,
}) => (
  <li>
    <article className={classes.recipe}>
      <Link to={`/recipe/${idMeal}`}>
        <LazyLoadImage alt={strMeal} className={classes.recipeImg} src={strMealThumb} />
      </Link>
      <div className={classes.wrapper}>
        <Link className={classes.recipeLink} to={`/recipe/${idMeal}`}>
          {strMeal}
        </Link>
        <button
          type='button'
          className={clsx(classes.favoriteBtn, {
            [classes.favoriteBtnActive]: isFavorite,
          })}
          onClick={isFavorite ? onFavoriteRemoveClick : onFavoriteAddClick}
        >
          <FaHeart className={classes.favoriteBtnIcon} />
        </button>
      </div>
    </article>
  </li>
);

export default RecipeCard;
