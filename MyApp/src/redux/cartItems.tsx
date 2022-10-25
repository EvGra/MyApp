import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    names: [],
    itemParams: [],
    cartItemsQuantity: [],
  },
  reducers: {
    addCart: (state, action) => {
      const cartName = action.payload.name;
      state.names.push(cartName);
    },
    removeCart: (state, action) => {
      state.names.splice(state.names.indexOf(action.payload.name), 1);
    },
    getTotals(state, action) {
      state.cartItemsQuantity.unshift({
        name: action.payload.name,
        quantity: action.payload.quantity,
        agreeCheckBox: action.payload.agreeCheckBox,
        price: action.payload.price,
      });
    },
    getChooseItemParams(state, action) {
      state.itemParams.unshift({
        name: action.payload.name,
        quantity: action.payload.quantity,
        size: action.payload.size,
      });
    },
  },
});

export const addCart = cartSlice.actions.addCart;
export const removeCart = cartSlice.actions.removeCart;
export const getTotals = cartSlice.actions.getTotals;
export const getChooseItemParams = cartSlice.actions.getChooseItemParams;
export default cartSlice.reducer;
