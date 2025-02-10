import { CartItem } from "@/types/CartItemProps";
import { CartState } from "@/types/CartStateProps";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
  items: [], // Biarkan kosong di awal
  totalPrice: 0,
};

const calculateTotalPrice = (items: CartItem[]) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0); // Utility untuk menghitung total harga

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        // Tambahkan quantity jika item sudah ada
        existingItem.quantity++;
      } else {
        // Tambahkan item baru
        state.items.push({ ...action.payload, quantity: 1 }); // Pastikan ada properti quantity
      }

      // Hitung ulang total harga
      state.totalPrice = calculateTotalPrice(state.items);

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items)); // Simpan ke localStorage
      }
    },
    hydrateCart: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload; // Isi ulang dari localStorage
      state.totalPrice = calculateTotalPrice(state.items); // Hitung ulang total harga
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        // Jika quantity <= 1, konfirmasi penghapusan item
        if (existingItem.quantity <= 1) {
          const confirmDelete = confirm(
            "Are you sure you want to delete this item?",
          );
          if (confirmDelete) {
            state.items = state.items.filter(
              (item) => item.id !== action.payload.id,
            );
          }
        } else {
          // Jika quantity > 1, kurangi quantity
          state.items = state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          );
        }
      }

      // Hitung ulang total harga
      state.totalPrice = calculateTotalPrice(state.items);

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items)); // Simpan ke localStorage
      }
    },
    updateCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        // Tambahkan quantity jika item sudah ada
        existingItem.quantity++;
      } else {
        // Tambahkan item baru
        state.items.push({ ...action.payload, quantity: 1 }); // Pastikan ada properti quantity
      }

      state.totalPrice = calculateTotalPrice(state.items);

      // Simpan ke localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
  },
});

export const { addToCart, hydrateCart, removeFromCart, updateCart } =
  cartSlice.actions;

export default cartSlice.reducer;
