import {createSlice} from '@reduxjs/toolkit';

export type ItemParams = {
  name: string;
  quantity: number;
  size: string;
};

export type ItemQuantity = {
  name: string;
  quantity: number;
  agreeCheckBox: boolean;
  price: number;
};

export type CartState = {
  names: string[];
  itemParams: ItemParams[];
  cartItemsQuantity: ItemQuantity[];
};

const initialState: CartState = {
  names: [],
  itemParams: [],
  cartItemsQuantity: [],
};

const cartSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.names.push(action.payload.name);
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
