// src/productList/AllProductList.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "./ProductList";
import { requestAllProducts, selectProductList } from "./productListSlice";

export function AllProductList() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProductList);

  useEffect(() => {
    dispatch(requestAllProducts());
  }, [dispatch]);

  if (allProducts === null) return <div>Loading...</div>;
  return <ProductList products={allProducts} />;
}
