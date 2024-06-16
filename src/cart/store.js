import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/createSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default store;