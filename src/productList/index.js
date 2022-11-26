// src/productList/index.js
import { useEffect, useState } from "react";

async function fetchAllProducts() {
  return fetch("/api/products").then((res) => res.json());
}

export function AllProductList() {
  const [allProducts, setAllProducts] = useState(null);

  useEffect(() => {
    fetchAllProducts().then(setAllProducts);
  }, []);

  if (allProducts === null) return <div>Loading...</div>;
  return <ProductList products={allProducts} />;
}

export function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.name}>
          {product.name} <span>${product.price}</span>
        </li>
      ))}
    </ul>
  );
}
