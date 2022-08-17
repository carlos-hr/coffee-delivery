export enum CartActionTypes {
  addCartItem = "ADD_CART_ITEM",
  deleteCartItem = "DELETE_CART_ITEM",
  removeCartItem = "REMOVE_CART_ITEM",
  resetCart = "RESET_CART",
}

export function addCartItemAction(id: number) {
  return {
    type: CartActionTypes.addCartItem,
    payload: {
      id,
    },
  };
}

export function deleteCartItemAction(id: number) {
  return {
    type: CartActionTypes.deleteCartItem,
    payload: {
      id,
    },
  };
}

export function removeCartItemAction(id: number) {
  return {
    type: CartActionTypes.removeCartItem,
    payload: {
      id,
    },
  };
}

export function resetCartAction() {
  return {
    type: CartActionTypes.resetCart,
  };
}
