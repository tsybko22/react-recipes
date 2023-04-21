import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchRecipeDetailsById = createAsyncThunk(
  'recipeDetails/fetchRecipeDetailsById',
  async (recipeId, { rejectWithValue, extra: api }) => {
    try {
      const data = await api.getRecipeDetailsById(recipeId);
      const recipe = data[0];
      const strIngredientsWithMeasures = Object.keys(recipe)
        .map((key) => {
          if (key.includes('strIngredient') && recipe[key]) {
            return {
              ingredient: recipe[key],
              measure: recipe[`strMeasure${key.slice(13)}`],
            };
          }
          return null;
        })
        .filter((el) => el !== null);

      return {
        ...recipe,
        strIngredientsWithMeasures,
      };
    } catch (err) {
      return rejectWithValue('Sorry cannot upload recipe details. Try again later.');
    }
  }
);

const initialState = {
  entities: {},
  status: 'idle', // pending | rejected | fulfilled
  error: null,
};

const recipeDetailsSlice = createSlice({
  name: 'recipeDetails',
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchRecipeDetailsById.pending, (state) => {
        state.status = 'pending';
        state.error = '';
      })
      .addCase(fetchRecipeDetailsById.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchRecipeDetailsById.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'fulfilled';
        state.entities = action.payload;
      }),
});

export const recipeDetailsReducer = recipeDetailsSlice.reducer;

export const selectRecipeDetails = (state) => state.recipeDetails.entities;
export const selectStatuses = (state) => ({
  status: state.recipeDetails.status,
  error: state.recipeDetails.error,
});
