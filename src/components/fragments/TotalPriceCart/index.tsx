import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TotalPriceCart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const newTotalCart = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCart(newTotalCart);
  }, [cart]);

  return (
    <div className="col-span-12 mx-auto w-full max-w-3xl bg-gray-50 py-24 max-xl:px-6 lg:pl-8 xl:col-span-4 xl:max-w-lg">
      <h2 className="font-manrope border-b border-gray-300 pb-8 text-3xl font-bold leading-10 text-black">
        Order Summary
      </h2>
      <div className="mt-8">
        <form>
          <div className="flex items-center justify-between py-8">
            <p className="text-xl font-medium leading-8 text-black">
              {totalCart} Items
            </p>
            <p className="text-xl font-semibold leading-8 text-indigo-600">
              Rp{totalPrice.toLocaleString()}
            </p>
          </div>

          <Button className="w-full bg-emerald-900">Checkout</Button>
        </form>
      </div>
    </div>
  );
};

export default TotalPriceCart;
