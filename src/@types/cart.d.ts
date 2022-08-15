export interface CartItem {
  id: number;
  quantity: number;
  price: number;
}

export interface CartState {
  cart: CartItem[];
}
