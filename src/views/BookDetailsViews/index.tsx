import SeparatorElement from "@/components/elements/SeparatorElement";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { saveCartToFirebase } from "@/lib/firebase/service";
import { addToCart } from "@/redux/slices/cartSlice";

import { BooksDetails } from "@/types/BooksDetailProps.type";

import { ChevronDown, Eye, ShoppingBasket } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

const BookDetailsViews = ({ books }: { books: BooksDetails }) => {
  const shortenDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  const stripHTML = (htmlString: string) => {
    return htmlString.replace(/<[^>]*>?/gm, "");
  };

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   const data = {
  //     name: event.target.name.value,
  //     email: event.target.email.value,
  //     phoneNumber: event.target.phoneNumber.value,
  //     address: event.target.address.value,
  //     password: event.target.password.value,
  //   };

  //   const result = await fetch("/api/form", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   });

  //   if (result.status === 200) {
  //     event.target.reset();
  //     push("/auth/login");
  //   } else {
  //     setIsError(
  //       result.status === 400
  //         ? "Invalid email or password or Email already existed"
  //         : "Something went wrong",
  //     );
  //   }
  // };

  const { data: session } = useSession();
  const dispatch = useDispatch();

  const HandleAddToOrder = async () => {
    const userId = session?.user?.email; // Menggunakan email sebagai ID unik

    if (!userId) {
      alert("Anda harus login terlebih dahulu!");
      return;
    }

    const cartItem = {
      id: books.id,
      image:
        books.volumeInfo?.imageLinks?.smallThumbnail || "/assets/no-image.png",
      title: books.volumeInfo.title,
      author: books.volumeInfo?.authors?.join(", ") || "Unknown Author",
      price: books.saleInfo?.listPrice?.amount || "Harga tidak Tersedia",
      quantity: 1,
    };

    // Simpan ke Redux
    dispatch(addToCart(cartItem));

    // Simpan ke Firebase
    await saveCartToFirebase(userId, [cartItem]);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center p-4 lg:flex-row lg:p-0">
        <div className="flex w-full flex-col p-10 lg:h-full lg:w-[25%] lg:p-0">
          {books.volumeInfo?.imageLinks?.smallThumbnail ? (
            <>
              <Image
                src={books.volumeInfo.imageLinks.smallThumbnail}
                width={700}
                height={700}
                alt={`Cover of ${books.volumeInfo?.title || "No Image Available"}`}
                className={`rounded-xl object-cover shadow-xl ${
                  books.saleInfo?.listPrice?.amount ? "" : "opacity-40"
                }`}
              />
              {!books.saleInfo?.listPrice?.amount && (
                <h1 className="absolute mx-auto rounded-full bg-red-200 p-2 px-4 text-red-700 lg:ms-20 lg:mt-48">
                  Out of Stock
                </h1>
              )}
            </>
          ) : (
            <>
              <Image
                src="/assets/no-image.png"
                width={700}
                height={700}
                alt="No Image Available"
                className="rounded-xl object-cover opacity-40 shadow-xl"
              />
              <h1 className="absolute mx-auto rounded-full bg-red-200 p-2 px-4 text-red-700 lg:ms-20 lg:mt-48">
                Out of Stock
              </h1>
            </>
          )}
        </div>

        <div className="space-y-3 pb-10 lg:w-[50%] lg:px-10 lg:py-0">
          {books.volumeInfo?.title ? (
            <h1 className="text-3xl font-bold">{books.volumeInfo?.title}</h1>
          ) : (
            <h1 className="text-3xl font-bold">Judul tidak tersedia</h1>
          )}
          <p className="text-md font-normal">
            By{" "}
            <Link
              href={`/Search?query=inauthor:${books.volumeInfo?.authors}`}
              className="uppercase text-yellow-600"
            >
              {books.volumeInfo?.authors?.join(", ") || "Unknown Author"}
            </Link>
          </p>
          {books.saleInfo?.listPrice ? (
            <p className="text-2xl font-bold text-emerald-800">
              {books.saleInfo.listPrice.amount.toLocaleString("id-ID", {
                style: "currency",
                currency: books.saleInfo.listPrice.currencyCode || "IDR",
              })}
            </p>
          ) : (
            <p className="text-2xl font-bold text-emerald-800">
              Harga Tidak Tersedia
            </p>
          )}
          <SeparatorElement />
          <div className="flex justify-between lg:pe-6">
            <p className="text-md font-bold text-black">Description</p>
            <Dialog>
              <DialogTrigger className="flex text-sm font-thin text-black underline">
                Read More... <ChevronDown size={18} />
              </DialogTrigger>
              <DialogContent className="lg:h-[450px] lg:w-[600px] lg:py-5 lg:pt-10">
                <DialogHeader className="overflow-y-auto">
                  <DialogTitle className="text-center font-bold lg:pb-5">
                    Description
                  </DialogTitle>
                  <DialogDescription className="text-md text-justify lg:pe-4">
                    {stripHTML(
                      books.volumeInfo?.description ||
                        "Description is not available.",
                    )}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <p className="text-md font-normal text-neutral-400">
            {" "}
            {shortenDescription(
              stripHTML(
                books.volumeInfo?.description ||
                  "Description is not available.",
              ),
              170,
            )}
          </p>
          <p className="text-md font-bold text-black">Details</p>
          <div className="flex gap-20 lg:justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h1 className="text-sm font-normal text-neutral-500">
                  Publisher
                </h1>
                <h1 className="text-sm font-normal text-black">
                  {books.volumeInfo?.publisher || "N/A"}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-normal text-neutral-500">ISBN</h1>
                <h1 className="text-sm font-normal text-black">
                  {books.volumeInfo?.industryIdentifiers?.[0]?.identifier ||
                    "N/A"}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-normal text-neutral-500">
                  Language
                </h1>
                <h1 className="text-sm font-normal text-black">
                  {books.volumeInfo?.language || "Unknown"}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <h1 className="text-sm font-normal text-neutral-500">
                  Release
                </h1>
                <h1 className="text-sm font-normal text-black">
                  {books.volumeInfo?.publishedDate || "Unknown"}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-normal text-neutral-500">Pages</h1>
                <h1 className="text-sm font-normal text-black">
                  {books.volumeInfo?.pageCount || "N/A"}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-normal text-neutral-500">
                  Categories
                </h1>
                <h1 className="text-sm font-normal text-black">
                  {books.volumeInfo?.categories?.[0] || "N/A"}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky z-10 w-full lg:w-auto">
          <Card className="rounded-xl border border-gray-200 shadow-lg lg:w-[300px]">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-900">
                Free Shipping
              </CardTitle>
              <CardDescription className="text-sm text-gray-500">
                * Terms and Conditions
              </CardDescription>
            </CardHeader>
            <div className="lg:px-6">
              <SeparatorElement />
            </div>
            <CardContent className="grid gap-2">
              <div className="text-base font-semibold text-gray-900">
                Delivered In:
              </div>
              <div className="text-sm text-gray-600">
                1 - 3 business days (Jakarta)
              </div>
              <div className="text-sm text-gray-600">
                3 - 7 business days (Others)
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button
                className={`w-full rounded-md bg-emerald-600 font-semibold uppercase text-white transition-all duration-150 ease-in-out hover:bg-emerald-700 ${books.saleInfo?.listPrice ? "" : "cursor-default bg-neutral-400 text-white opacity-40 hover:bg-neutral-400"}`}
              >
                Buy Now
              </Button>
              <div className="flex w-full items-center justify-between">
                <button
                  className={`group flex items-center gap-1 text-gray-600 transition-all duration-150 ease-in-out ${books.saleInfo?.listPrice ? "hover:text-emerald-600" : "cursor-default"}`}
                  onClick={
                    books.saleInfo?.listPrice ? HandleAddToOrder : () => {}
                  }
                >
                  <ShoppingBasket size={20} />
                  <span>Cart</span>
                </button>
                <Link
                  href={books.volumeInfo.previewLink}
                  className="group flex cursor-pointer items-center gap-1 transition-all duration-150 ease-in-out"
                >
                  <Eye
                    size={20}
                    className="text-gray-600 group-hover:text-emerald-600"
                  />
                  <span className="text-sm font-medium text-gray-600 group-hover:text-emerald-600">
                    Preview
                  </span>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
      <SeparatorElement />
      <div className="flex w-full flex-col gap-4 px-4 lg:flex-row">
        <div className="flex w-full items-center justify-center rounded-xl bg-emerald-800 p-4 lg:w-[40%]">
          <h1 className="text-xl font-bold text-yellow-600 lg:text-2xl">
            About the Author
          </h1>
        </div>
        <div className="flex w-full flex-col space-y-3 rounded-xl bg-neutral-200 p-6 lg:w-[60%] lg:p-10">
          <h1 className="text-xl font-bold uppercase text-yellow-600 lg:text-2xl">
            {books.volumeInfo?.authors?.join(", ") || "Unknown Author"}
          </h1>
          <p className="font-thin text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nam
            eum cum facere ea doloremque unde vel maxime, doloribus ut quibusdam
            inventore praesentium alias odio. Magni beatae tempore vero earum!
            Totam distinctio necessitatibus officia voluptate alias.
          </p>
        </div>
      </div>
    </>
  );
};

export default BookDetailsViews;
