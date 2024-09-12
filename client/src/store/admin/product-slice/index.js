import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  productList: [],
};

export const createProduct = createAsyncThunk(
  "/product/createProduct",
  async (formData) => {
    const res = await axios.post(
      "http://localhost:5000/api/v1/product",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res?.data;
  }
);

export const getAllProduct = createAsyncThunk(
  "/product/getAllProduct",
  async () => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/product"
    );

    return res?.data;
  }
);

export const updateProduct = createAsyncThunk(
  "/product/updateProduct",
  async ({ id,formData}) => {
    const res = await axios.patch(
      `http://localhost:5000/api/v1/product/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return res?.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "/product/deleteProduct",
  async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/api/v1/product/${id}`
    );

    return res?.data;
  }
);

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        console.log(action.payload,"action")
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(getAllProduct.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
});

export default AdminProductsSlice.reducer;
