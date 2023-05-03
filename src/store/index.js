import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducer";
const store = configureStore({
    reducer: {
        cartItem: cartReducer.reducer,
        itemList: itemReducer.reducer
    }
})

export default store;