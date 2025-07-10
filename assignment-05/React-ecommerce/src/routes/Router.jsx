import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:productId", element: <ProductDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
