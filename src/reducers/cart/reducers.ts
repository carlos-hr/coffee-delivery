import produce from "immer";
import { coffes } from "../../db/coffees";
import { ActionTypes } from "./actions";

export interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

export interface CartState {
  cart: CartItem[] | [];
}

export function cartReducers(state: CartState, action: any) {
  return produce(state, (draft: any) => {
    switch (action.type) {
      case ActionTypes.addCartItem: {
        const { payload } = action;

        const coffeeIndex = draft.cart.findIndex(
          (coffee: CartItem) => coffee.id === payload.id
        );

        if (coffeeIndex >= 0) {
          draft.cart[coffeeIndex].quantity++;
        } else {
          const coffee = coffes.find((coffee) => coffee.id === payload.id);
          draft.cart.push({
            id: coffee!.id,
            quantity: 1,
            price: coffee!.price,
          });
        }
        break;
      }
      case ActionTypes.deleteCartItem: {
        return state;
      }
      case ActionTypes.removeCartItem: {
        const { payload } = action;

        const coffeeIndex = draft.cart.findIndex(
          (coffee: CartItem) => coffee.id === payload.id
        );

        if (coffeeIndex >= 0) {
          if (draft.cart[coffeeIndex].quantity === 1) {
            draft.cart = state.cart.filter(
              (cartItem: CartItem) => cartItem.id !== payload.id
            );
            return;
          } else {
            draft.cart[coffeeIndex].quantity--;

            return;
          }
        } else {
          return state;
        }
      }
      default:
        return state;
    }
  });
}
