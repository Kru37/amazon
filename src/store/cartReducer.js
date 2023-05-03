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
        state.totalAmount = action.payload.price;
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
            state.cartItems.push(item);
          }
    }
 }
})

export default cartReducer