import produce from "immer";
import { OrderState } from "../../@types/order";
import { OrderActionTypes } from "./actions";

export function orderReducer(state: OrderState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case OrderActionTypes.placeOrder:
        const { data } = action.payload;
        draft.order.push(data);
        break;
      default:
        return state;
    }
  });
}
