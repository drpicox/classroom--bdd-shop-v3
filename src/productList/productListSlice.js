// src/productList/productListSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAllProducts } from "./productListAPI";

export function selectProductList(state) {
  return state.productList;
}

export const initialState = null;

const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    setAllProducts(state, action) {
      return action.payload;
    },
  },
});

export const { setAllProducts } = productListSlice.actions;

export const requestAllProducts = () => async (dispatch) => {
  const list = await fetchAllProducts();
  dispatch(setAllProducts(list));
};

export default productListSlice.reducer;
