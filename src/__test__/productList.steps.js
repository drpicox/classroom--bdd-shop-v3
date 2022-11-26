// src/__test__/productList.steps.js
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { AllProductList } from "../productList";
import { products, addProduct } from "./mockServer";

export const productListSteps = ({ given, when, then, pending }) => {
  when("I list products", async () => {
    render(<AllProductList products={products} />);
    await waitForElementToBeRemoved(screen.getByText("Loading..."));
  });

  then(/^there should be (\d+) products$/, (count) => {
    const items = screen.queryAllByRole("listitem");
    expect(items).toHaveLength(+count);
  });

  given(/^there is a product "(.*)"$/, (name) => {
    addProduct({ name });
  });

  then(/^there should be the "(.*)" product$/, (name) => {
    const item = screen.getByText(name);
    expect(item).toBeInTheDocument();
  });

  given(/^there is a product "(.*)" with price \$(\d+)$/, (name, price) => {
    addProduct({ name, price: +price });
  });

  then(
    /^there should be the "(.*)" product with price \$(\d+)$/,
    (name, price) => {
      const item = screen.getByText(name);
      expect(item).toHaveTextContent(`$${price}`);
    }
  );
};
