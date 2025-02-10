import AppShell from "@/components/layouts/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hydrateCart } from "@/redux/slices/cartSlice";

// Komponen untuk sinkronisasi cart
function CartHydration() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Hanya jalan di client-side
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        dispatch(hydrateCart(JSON.parse(storedCart))); // Isi state Redux
      }
    }
  }, [dispatch]);

  return null; // Tidak perlu render apa-apa
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <CartHydration /> {/* Sinkronisasi cart */}
        <AppShell>
          <Component {...pageProps} />
        </AppShell>
      </SessionProvider>
    </Provider>
  );
}
