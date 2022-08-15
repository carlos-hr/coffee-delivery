export interface PaymentMethods {
  paymentMethod: "credit_card" | "debit_card" | "cash";
}

export interface OrderState {
  postalCode: number;
  street: string;
  number: number;
  complement?: string;
  county: string;
  city: string;
  uf: string;
  paymentMethods: PaymentMethods;
}
