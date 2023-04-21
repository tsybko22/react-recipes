import { configureStore } from '@reduxjs/toolkit';

import * as api from '../common/utils/recipeApi';
import { categoriesReducer } from '../features/categories/categoriesSlice';
import { recipeDetailsReducer } from '../features/recipeDetails/recipeDetailsSlice';
import { recipesReducer } from '../features/recipes/recipesSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    recipes: recipesReducer,
    recipeDetails: recipeDetailsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
