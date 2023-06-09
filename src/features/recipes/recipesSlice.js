import * as storage from '@/common/utils/localStorageApi';
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit';

export const fetchRecipesByCategory = createAsyncThunk(
  'recipes/fetchRecipesByCategory',
  async (category, { rejectWithValue, extra: api, getState }) => {
    try {
      const isSameRecipes = getState().recipes.recipesByCategories.some(
        (recipe) => recipe.category === category
      );

      if (isSameRecipes) {
        return null;
      }

      const data = await api.getRecipesByCategory(category);
      return { category, data };
    } catch (err) {
      return rejectWithValue('Sorry, an unexpected error occurred. Try to refresh page.');
    }
  }
);

export const fetchRecipesBySearch = createAsyncThunk(
  'recipes/fetchRecipesBySearch',
  async (searchTerm, { rejectWithValue, extra: api }) => {
    try {
      const data = await api.getRecipesByName(searchTerm);
      const assembledItem = data.map((recipe) => ({
        idMeal: recipe.idMeal,
        strMeal: recipe.strMeal,
        strMealThumb: recipe.strMealThumb,
      }));
      return assembledItem;
    } catch (err) {
      return rejectWithValue('Sorry, no result founded.');
    }
  }
);

const initialState = {
  recipesByCategories: [],
  recipesBySearch: [],
  favoriteRecipes: storage.loadState('favorites') || [],
  status: 'idle', // pending | rejected | fulfilled
  error: null,
};

const setLoading = (state) => {
  state.status = 'pending';
  state.error = null;
};

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addToFavorites: {
      reducer: (state, action) => {
        const isSameRecipe = state.favoriteRecipes.some(
          (recipe) => recipe.idMeal === action.payload.idMeal
        );

        if (!isSameRecipe) {
          state.favoriteRecipes.push(action.payload);
          storage.saveState(state.favoriteRecipes, 'favorites');
        }
      },
      prepare: (recipe) => {
        const assembledItem = {
          idMeal: recipe.idMeal,
          strMeal: recipe.strMeal,
          strMealThumb: recipe.strMealThumb,
        };

        return { payload: assembledItem };
      },
    },
    removeFromFavorites(state, action) {
      const updatedFavoriteRecipes = state.favoriteRecipes.filter(
        (recipe) => recipe.idMeal !== action.payload
      );

      state.favoriteRecipes = updatedFavoriteRecipes;
      storage.saveState(state.favoriteRecipes, 'favorites');
    },
    resetErrors(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesByCategory.pending, setLoading)
      .addCase(fetchRecipesByCategory.rejected, setError)
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'fulfilled';

        if (action.payload) {
          state.recipesByCategories.push(action.payload);
        }
      })
      .addCase(fetchRecipesBySearch.pending, setLoading)
      .addCase(fetchRecipesBySearch.rejected, setError)
      .addCase(fetchRecipesBySearch.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'fulfilled';
        state.recipesBySearch = action.payload;
      });
  },
});

export const { addToFavorites, removeFromFavorites, resetErrors } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;

export const selectStatuses = (state) => ({
  status: state.recipes.status,
  error: state.recipes.error,
});

export const selectRecipesBySearch = (state) => state.recipes.recipesBySearch;
export const selectFavoriteRecipes = (state) => state.recipes.favoriteRecipes;
export const selectRecipesByCategory = createSelector(
  (state) => state.recipes.recipesByCategories,
  (_, category) => category,
  (recipesByCategories, category) =>
    recipesByCategories.find((recipe) => recipe.category === category)
);
