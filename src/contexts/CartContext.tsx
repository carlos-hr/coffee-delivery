import { createContext, ReactNode, useReducer } from "react";
import { CartState } from "../@types/cart";
import {
  addCartItemAction,
  deleteCartItemAction,
  removeCartItemAction,
  resetCartAction,
} from "../reducers/cart/actions";
import { cartReducers } from "../reducers/cart/reducers";

interface HandleUpdateQuantityArguments {
  data: {
    id: number;
    state?: number;
    setState: React.Dispatch<React.SetStateAction<number>>;
  };
}

interface CartContextData {
  cartState: CartState;
  cartQuantity: number;
  subtotal: number;
  deliveryFee: number;
  deleteCartItem: (id: number) => void;
  resetCart: () => void;
  handleAddItem: ({ data }: HandleUpdateQuantityArguments) => void;
  handleRemoveItem: ({ data }: HandleUpdateQuantityArguments) => void;
}

export const CartContext = createContext({} as CartContextData);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const deliveryFee = 5;
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

  function resetCart() {
    dispatch(resetCartAction());
  }

  const cartQuantity = cartState.cart.reduce((acc, state) => {
    acc += state.quantity;
    return acc;
  }, 0);

  const subtotal = cartState.cart.reduce((acc, state) => {
    acc += state.quantity * state.price;
    return Number(acc.toFixed(2));
  }, 0);

  function handleAddItem({ data }: HandleUpdateQuantityArguments) {
    const { id, setState } = data;
    setState((state) => state + 1);
    addCartItem(id);
  }

  function handleRemoveItem({ data }: HandleUpdateQuantityArguments) {
    const { id, state, setState } = data;
    if ((state as number) >= 1) {
      setState((state) => state - 1);
      removeCartItem(id);
    }
    return;
  }

  return (
    <CartContext.Provider
      value={{
        cartState,
        cartQuantity,
        deleteCartItem,
        handleAddItem,
        handleRemoveItem,
        subtotal,
        deliveryFee,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
