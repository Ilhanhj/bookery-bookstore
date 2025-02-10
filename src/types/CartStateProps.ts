import { CartItem } from "./CartItemProps";

export type CartState = {
  items: CartItem[];
  totalPrice: number;
};
