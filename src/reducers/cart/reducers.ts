import produce from "immer";
import { CartState, CartItem } from "../../@types/cart";
import { coffees } from "../../db/coffees";
import { CartActionTypes } from "./actions";

export function cartReducers(state: CartState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case CartActionTypes.addCartItem: {
        const { payload } = action;

        const coffeeIndex = draft.cart.findIndex(
          (coffee: CartItem) => coffee.id === payload.id
        );

        if (coffeeIndex >= 0) {
          draft.cart[coffeeIndex].quantity++;
        } else {
          const coffee = coffees.find((coffee) => coffee.id === payload.id);
          draft.cart.push({
            id: coffee!.id,
            quantity: 1,
            price: coffee!.price,
          });
        }
        break;
      }
      case CartActionTypes.deleteCartItem: {
        const { payload } = action;
        const coffeeIndex = draft.cart.findIndex(
          (coffee: CartItem) => coffee.id === payload.id
        );

        if (coffeeIndex >= 0) {
          draft.cart = state.cart.filter(
            (cartItem: CartItem) => cartItem.id !== payload.id
          );
          return;
        }
        return state;
      }
      case CartActionTypes.removeCartItem: {
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
      case CartActionTypes.resetCart:
        draft.cart = [];
        break;
      default:
        return state;
    }
  });
}
