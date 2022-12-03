export async function fetchAllProducts() {
  return fetch("/api/products").then((res) => res.json());
}
