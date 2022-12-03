// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";

import productListReducer from "../productList/productListSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      productList: productListReducer,
    },
  });
