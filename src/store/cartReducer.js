import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    cartItems: [],
    totalQuantity:0,
    totalAmount: 0
}
const cartReducer = createSlice({
 name: 'cart',
 initialState,
 reducers: {
    additem: (state , action) => {
        state.totalQuantity = state.totalQuantity + 1;
        state.totalAmount += action.payload.price;
        let existingItemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
          );
          if (existingItemIndex !== -1) {
            let existingItem = state.cartItems[existingItemIndex];
            existingItem.amount += 1;
            existingItem.totalprice += existingItem.price;
          } else {
            let item = action.payload;
            item.totalprice = action.payload.price;
            item.amount = 1;
            state.cartItems.push(item);
          }
    },
    removeItem: (state, action) => {
      state.totalQuantity--;
      let foundItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      state.totalAmount -= foundItem.price;
      foundItem.amount -= 1;
      state.cartItems = state.cartItems.filter((item) => item.amount !== 0);
    },
    deleteItem: (state, action) => {
      state.cartitems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.totalQuantity = state.cartItems.reduce((acc, curr) => {
        acc += curr.amount;
        return acc;
      }, 0);
      state.totalAmount = state.cartItems.reduce((acc, curr) => {
        acc += curr.totalprice;
        return acc;
      }, 0);
    },
    emptyCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
 }
})

export const cartActions = cartReducer.actions;
export default cartReducer