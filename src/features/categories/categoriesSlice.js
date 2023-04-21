import * as storage from '@/common/utils/localStorageApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue, extra: api, getState }) => {
    try {
      const { entities } = getState().categories;
      if (entities.length > 0) {
        return entities;
      }

      const data = await api.getCategories();
      const categories = data.map((category) => category.strCategory);
      storage.saveState(categories, 'categories');
      return categories;
    } catch (err) {
      return rejectWithValue('Cannot fetch categories. Try to refresh page.');
    }
  }
);

const initialState = {
  entities: storage.loadState('categories') || [],
  status: 'idle', // pending | rejected | fulfilled
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'pending';
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.error = null;
        state.status = 'fulfilled';
        state.entities = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;

export const selectCategories = (state) => state.categories;
