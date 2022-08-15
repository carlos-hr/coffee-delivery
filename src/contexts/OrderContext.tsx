import { createContext, ReactNode, useState } from "react";

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderContextData {
  paymentMethod: string | null;
  selectPaymentMethod: (method: string) => void;
}

export const OrderContext = createContext({} as OrderContextData);

export const OrderContextProvider = ({
  children,
}: OrderContextProviderProps) => {
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);

  function selectPaymentMethod(method: string) {
    setPaymentMethod(method);
  }

  return (
    <OrderContext.Provider value={{ paymentMethod, selectPaymentMethod }}>
      {children}
    </OrderContext.Provider>
  );
};
