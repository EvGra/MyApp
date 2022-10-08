import {createSlice} from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    names: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      state.names.push(action.payload.name);
    },
    removeFavorite: (state, action) => {
      state.names.splice(state.names.indexOf(action.payload.name), 1);
    },
  },
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
export default favoriteSlice.reducer;
