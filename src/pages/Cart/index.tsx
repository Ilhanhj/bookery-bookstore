import TableCart from "@/components/fragments/TableCart";
import TotalPriceCart from "@/components/fragments/TotalPriceCart";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const newTotalCart = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCart(newTotalCart);
  }, [cart]);

  return (
    <div className="after:contents-[''] relative z-10 after:absolute after:right-0 after:top-0 after:z-0 after:h-full after:bg-gray-50 xl:after:w-1/3">
      <div className="lg-6 relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
        <div className="grid grid-cols-12">
          <div className="col-span-12 w-full pb-8 pt-14 max-xl:mx-auto max-xl:max-w-3xl lg:py-24 lg:pr-8 xl:col-span-8">
            <div className="flex items-center justify-between border-b border-gray-300 pb-8">
              <h2 className="font-manrope text-3xl font-bold leading-10 text-black">
                Shopping Cart
              </h2>
              <h2 className="font-manrope text-xl font-bold leading-8 text-gray-600">
                {totalCart} Items
              </h2>
            </div>
            <div className="mt-8 grid grid-cols-12 border-b border-gray-200 pb-6 max-md:hidden">
              <div className="col-span-12 md:col-span-7">
                <p className="text-lg font-normal leading-8 text-gray-400">
                  Product Details
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="text-center text-lg font-normal leading-8 text-gray-400">
                      Quantity
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-center text-lg font-normal leading-8 text-gray-400">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Shopping Cart List */}
            <TableCart />
          </div>
          <TotalPriceCart />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
