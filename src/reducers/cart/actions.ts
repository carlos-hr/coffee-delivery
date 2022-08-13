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

export function deleteCartItemAction(id: number) {
  return {
    type: ActionTypes.deleteCartItem,
    payload: {
      id,
    },
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
