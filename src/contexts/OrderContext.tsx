import { createContext, ReactNode, useState } from "react";

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderContextData {
  selectedPaymentMethod: string;
  selectPaymentMethod: (method: string) => void;
}

export const OrderContext = createContext({} as OrderContextData);

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  function selectPaymentMethod(method: string) {
    setSelectedPaymentMethod(method);
  }

  return (
    <OrderContext.Provider
      value={{ selectedPaymentMethod, selectPaymentMethod }}
    >
      {children}
    </OrderContext.Provider>
  );
};
