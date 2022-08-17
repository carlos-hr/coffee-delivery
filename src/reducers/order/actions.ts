import { Order } from "../../@types/order";

export enum OrderActionTypes {
  placeOrder = "PLACE_ORDER",
}

export function placeOrderAction(data: Order) {
  return {
    type: OrderActionTypes.placeOrder,
    payload: {
      data,
    },
  };
}
