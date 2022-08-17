import { createContext, ReactNode, useReducer, useState } from "react";
import { Order, OrderState } from "../@types/order";
import { placeOrderAction } from "../reducers/order/actions";
import { orderReducer } from "../reducers/order/reducers";

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderContextData {
  orderState: OrderState;
  selectedPaymentMethod: string;
  selectPaymentMethod: (method: string) => void;
  placeOrder: (data: Order) => void;
}

export const OrderContext = createContext({} as OrderContextData);

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [orderState, dispatch] = useReducer(orderReducer, {
    order: [],
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  function selectPaymentMethod(method: string) {
    setSelectedPaymentMethod(method);
  }

  function placeOrder(data: Order) {
    dispatch(placeOrderAction(data));
  }

  return (
    <OrderContext.Provider
      value={{
        orderState,
        selectedPaymentMethod,
        selectPaymentMethod,
        placeOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
