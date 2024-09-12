
import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./auth-slice";
import AdminProductsSlice from "./admin/product-slice"
import shoppingProductSlice from "./shop/products-slice"
const store=configureStore({
  reducer:{
    auth:authSliceReducer,
    adminPrd:AdminProductsSlice,
    shoppingPrd:shoppingProductSlice
  }
})
export default store





