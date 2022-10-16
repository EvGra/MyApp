import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './favorites';
import cartItemsReducer from './cartItems';

export const store = configureStore({
  reducer: {
    favoriteItems: favoritesReducer,
    cartItems: cartItemsReducer,
  },
});
