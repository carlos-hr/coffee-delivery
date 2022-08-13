import { CartItem } from "./reducers";

export enum ActionTypes {
  addCartItem = "ADD_CART_ITEM",
  deleteCartItem = "DELETE_CART_ITEM",
  removeCartItem = "REMOVE_CART_ITEM",
}

export function addCartItemAction(id: number) {
  return {
    type: ActionTypes.addCartItem,
    payload: {
      id,
    },
  };
}

export function deleteCartItemAction() {
  return {
    type: ActionTypes.deleteCartItem,
  };
}

export function removeCartItemAction(id: number) {
  return {
    type: ActionTypes.removeCartItem,
    payload: {
      id,
    },
  };
}
