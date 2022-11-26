// src/__test__/mockServer.js
import { rest } from "msw";
import { setupServer } from "msw/node";

let products;
beforeEach(() => {
  products = [];
});

export function addProduct(product) {
  products.push(product);
}

const server = setupServer(
  rest.get("/api/products", (req, res, ctx) => {
    return res(ctx.json(products));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
