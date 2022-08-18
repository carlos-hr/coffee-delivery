import produce from "immer";
import { OrderState } from "../../@types/order";
import { OrderActionTypes } from "./actions";

export function orderReducer(state: OrderState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case OrderActionTypes.placeOrder:
        const { data } = action.payload;
        draft.order.push(data);
        draft.currentOrder = {
          street: data.orderDetails.street,
          number: data.orderDetails.number,
          paymentMethod: data.orderDetails.paymentMethod,
          hasActiveOrder: true,
        };
        break;
      default:
        return state;
    }
  });
}
