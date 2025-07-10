import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CartProvider } from "./context/cartContext.jsx";
import { RouterProvider } from "react-router";
import { Router } from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={Router} />
    </CartProvider>
  </StrictMode>
);
