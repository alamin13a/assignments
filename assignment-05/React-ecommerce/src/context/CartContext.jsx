import { useReducer } from "react";

import { CartContext } from "./createCartContext";

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "addToCart": {
      const exist = state.cartItems.find((item) => item.id === action.payload.id);
      if (exist) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => (item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, qty: 1 }],
      };
    }

    case "removeFromCart": {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return <CartContext.Provider value={{ ...state, dispatch }}>{children}</CartContext.Provider>;
}
