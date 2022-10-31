import {createSlice} from '@reduxjs/toolkit';

export type FavoriteState = {
  names: string[];
};

const initialState: FavoriteState = {
  names: [],
};

const favoriteSlice = createSlice({
  name: 'favoriteItems',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.names.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.names.splice(state.names.indexOf(action.payload), 1);
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
