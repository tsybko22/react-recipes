import clsx from 'clsx';
import { FaHeart } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
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
        <LazyLoad height={150} offset={75} once>
          <img
            alt={strMeal}
            className={classes.recipeImg}
            src={strMealThumb}
            height={150}
            width={320}
          />
        </LazyLoad>
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
