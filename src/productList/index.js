// src/productList/index.js
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
