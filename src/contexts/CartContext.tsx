import { createContext, ReactNode, useReducer } from "react";
import {
  addCartItemAction,
  deleteCartItemAction,
  removeCartItemAction,
} from "../reducers/cart/actions";
import { cartReducers, CartState } from "../reducers/cart/reducers";

interface CartContextData {
  cart: CartState | [];
  addCartItem: (id: number) => void;
  deleteCartItem: () => void;
  removeCartItem: (id: number) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, dispatch] = useReducer(cartReducers, {
    cart: [],
  });
  console.log(cart);
  function addCartItem(id: number) {
    dispatch(addCartItemAction(id));
  }

  function deleteCartItem() {
    dispatch(deleteCartItemAction());
  }

  function removeCartItem(id: number) {
    dispatch(removeCartItemAction(id));
  }

  return (
    <CartContext.Provider
      value={{ addCartItem, cart, deleteCartItem, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
