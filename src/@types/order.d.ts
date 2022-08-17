import { CartState } from "./cart";

export interface OrderDetails {
  postalCode: string;
  street: string;
  number: number;
  complement?: string | undefined;
  county: string;
  city: string;
  state: string;
  paymentMethod: string;
}
export interface Order {
  orderDetails: OrderDetails;
  cart: CartState;
  subtotal: number;
  deliveryFee: number;
}
export interface OrderState {
  order: Order[];
}
