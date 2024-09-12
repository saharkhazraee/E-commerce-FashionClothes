import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
  productDetails: null,
};

export const getAllProduct = createAsyncThunk(
  "/product/getAllProduct",
  async (sort) => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/product$sort=${sort}`
    );

    return res?.data;
  }
);

export const getOneProduct = createAsyncThunk(
  "/product/getOneProduct",
  async (id) => {
    const result = await axios.get(
      `http://localhost:5000/api/v1/product/${id}`
    );

    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: "shoppingProducts",
  initialState,
  reducers: {
    setProductDetails: (state) => {
      state.productDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.productList = [];
      })
      .addCase(getOneProduct.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getOneProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productDetails = action.payload.data;
      })
      .addCase(getOneProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.productDetails = null;
      });
  },
});

export const { setProductDetails } = shoppingProductSlice.actions;

export default shoppingProductSlice.reducer;
