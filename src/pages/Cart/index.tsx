// import TableCart from "@/components/fragments/TableCart";
import TotalPriceCart from "@/components/fragments/TotalPriceCart";
import { saveCartToFirebase } from "@/lib/firebase/service";
import { removeFromCart, updateCart } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import { CartItem } from "@/types/CartItemProps";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const [totalCart, setTotalCart] = useState(0);

  const { data: session } = useSession();
  const id = session?.user?.id; // Ambil user ID dari sesi  

  useEffect(() => {
    const newTotalCart = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCart(newTotalCart);
  }, [cart]);

  //
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    if (id && cartItems.length > 0) {
      saveCartToFirebase(id, cartItems);
    }
  }, [id, cartItems]);

  const dispatch = useDispatch();

  const handleRemove = (item: CartItem) => {
    dispatch(removeFromCart(item));
  };

  const handleUpdate = (item: CartItem) => {
    dispatch(updateCart(item));
  };

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
            <div>
              {cartItems.length > 0 &&
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center"
                  >
                    <div className="w-full md:max-w-[126px]">
                      <Image
                        src={item.image || "/assets/no-image.png"}
                        width={126}
                        height={190}
                        alt={`Cover of ${item.title}`}
                        className="mx-auto rounded-xl object-cover"
                      />
                    </div>
                    <div className="grid w-full grid-cols-1 md:grid-cols-4">
                      <div className="md:col-span-2">
                        <div className="flex flex-col gap-3 max-[500px]:items-center">
                          <h6 className="text-base font-semibold leading-7 text-black">
                            {item.title}
                          </h6>
                          <h6 className="text-base font-normal leading-7 text-gray-500">
                            {item.author || "Unknown Author"}
                          </h6>
                          {item.price ? (
                            <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                              {item.price.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              })}
                            </h6>
                          ) : (
                            <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                              Tidak Tersedia
                            </h6>
                          )}
                        </div>
                      </div>
                      <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center">
                        <div className="flex h-full items-center">
                          <button
                            onClick={() => handleRemove(item)}
                            className="group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none"
                            value={item.quantity}
                          />
                          <button
                            onClick={() => handleUpdate(item)}
                            className="group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end">
                        {item.price > 0 && item.price ? (
                          <p className="text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                            {(item.price * item.quantity).toLocaleString(
                              "id-ID",
                              {
                                style: "currency",
                                currency: "IDR",
                              },
                            )}
                          </p>
                        ) : (
                          <p className="text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                            Tidak Tersedia
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <TotalPriceCart />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
