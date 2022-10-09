import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    names: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.names.push(action.payload.name);
    },
    removeCart: (state, action) => {
      state.names.splice(state.names.indexOf(action.payload.name), 1);
    },
  },
});

export const addCart = cartSlice.actions.addCart;
export const removeCart = cartSlice.actions.removeCart;
export default cartSlice.reducer;
