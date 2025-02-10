import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import cartSlice from "./slices/cartSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

console.log("pas store di create: ", store.getState());

store.subscribe(() => console.log("pas store berubah: ", store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); //

export default store;
