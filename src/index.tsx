import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/cart";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductCatalog, {
  loader as catalogLoader,
} from "./pages/ProductCatalog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App name="dropIt" />,
    children: [
      {
        loader: catalogLoader,
        path: "/",
        element: <ProductCatalog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("app"));

root.render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
