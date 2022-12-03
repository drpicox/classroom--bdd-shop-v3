// src/app/wrapApp.js
import { Provider } from "react-redux";
import { createStore } from "./store";

export function wrapApp(children) {
  const store = createStore();

  return <Provider store={store}>{children}</Provider>;
}
