import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './favorites';
import cartItemsReducer from './cartItems';

export const store = configureStore({
  reducer: {
    favoriteItems: favoritesReducer,
    cartItems: cartItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
