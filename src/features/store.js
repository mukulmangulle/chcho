import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice"
import productReducer from "./product/productSlice"


const store = configureStore({
     reducer: {
          product: productReducer,
          cart: cartReducer,
     }

});
export default store;