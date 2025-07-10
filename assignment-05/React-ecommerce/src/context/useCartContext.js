// useCart.js
import { useContext } from "react";
import { CartContext } from "./createCartContext";

const useCart = () => useContext(CartContext);

export default useCart;
