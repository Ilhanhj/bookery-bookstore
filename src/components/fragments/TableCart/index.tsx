import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { RootState } from "@/redux/store";
import { removeFromCart, updateCart } from "@/redux/slices/cartSlice";
import { CartItem } from "@/types/CartItemProps";
import { saveCartToFirebase } from "@/lib/firebase/service";
import { useEffect } from "react";

const TableCart = ({ id }) => {
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
                    {(item.price * item.quantity).toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
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
  );
};

export default TableCart;
