import { createContext, ReactNode, useReducer } from "react";
import {
  addCartItemAction,
  deleteCartItemAction,
  removeCartItemAction,
} from "../reducers/cart/actions";
import { cartReducers, CartState } from "../reducers/cart/reducers";

interface CartContextData {
  cartState: CartState;
  cartQuantity: number;
  addCartItem: (id: number) => void;
  deleteCartItem: (id: number) => void;
  removeCartItem: (id: number) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducers, {
    cart: [],
  });

  function addCartItem(id: number) {
    dispatch(addCartItemAction(id));
  }

  function deleteCartItem(id: number) {
    dispatch(deleteCartItemAction(id));
  }

  function removeCartItem(id: number) {
    dispatch(removeCartItemAction(id));
  }

  const cartQuantity = cartState.cart.reduce((acc: any, state) => {
    acc += state.quantity;
    return acc;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        cartState,
        cartQuantity,
        deleteCartItem,
        removeCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
