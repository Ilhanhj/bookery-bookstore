/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import TitleCategory from "@/components/elements/TitleCategory";
import { Book, BooksResponse } from "@/types/BooksProps.type";
import TitleAndSub from "../TitleAndSub";
import { SkeletonCard } from "../SkeletonCard";

const truncateText = (text: string, maxLength: number) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }

  return text;
};

function ClassicsBooksCarousel() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("/api/classics");
      const data: BooksResponse = await res.json();
      setBooks(data.items);
      setLoading(false);
    };

    fetchBooks();
  }, []);

  return (
    <Carousel
      className="w-full lg:max-w-[100rem]"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent className="">
        {books.length > 0 ? (
          <>
            {books.map((book) => (
              <CarouselItem
                key={book.id}
                className="basis-[33%] md:basis-[24%] lg:basis-[17%] lg:px-0"
              >
                <Link href={`/Items/${book.id}`}>
                  <Card className="group rounded-md bg-transparent px-0 pt-8 transition-all duration-200 hover:-translate-y-2 lg:px-0 lg:pt-8">
                    <CardContent className="flex w-full flex-col items-center justify-center">
                      {/* Pengecekan apakah thumbnail ada */}
                      {book.volumeInfo.imageLinks?.smallThumbnail ? (
                        <>
                          <Image
                            src={book.volumeInfo.imageLinks.smallThumbnail}
                            width={700}
                            height={700}
                            alt={`Cover of ${book.volumeInfo.title}`}
                            className={`rounded-md object-cover transition-transform duration-200 group-hover:scale-105 ${
                              book.saleInfo?.listPrice?.amount
                                ? ""
                                : "opacity-40"
                            }`}
                          />
                          {!book.saleInfo?.listPrice?.amount && (
                            <h1 className="absolute mx-auto mb-20 text-nowrap rounded-full bg-red-200 p-1 text-xs text-red-700 lg:mb-16 lg:p-2 lg:text-base">
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
                            className={`rounded-md object-cover transition-transform duration-200 group-hover:scale-105 ${
                              book.saleInfo?.listPrice?.amount
                                ? ""
                                : "opacity-40"
                            }`}
                          />
                          <h1 className="absolute mx-auto mb-20 text-nowrap rounded-full bg-red-200 p-1 text-xs text-red-700 lg:mb-16 lg:p-2 lg:text-base">
                            Out of Stock
                          </h1>
                        </>
                      )}

                      <CardHeader className="w-full p-0 pt-2 text-left lg:p-0 lg:pt-4">
                        <CardTitle className="truncate text-sm font-normal transition-colors duration-200 group-hover:text-yellow-600">
                          {book.volumeInfo.title}
                        </CardTitle>
                        <CardDescription className="truncate text-xs uppercase transition-colors duration-200 group-hover:text-gray-600">
                          {book.volumeInfo.authors?.join(", ") || ""}
                        </CardDescription>

                        {/* Pengecekan apakah harga ada */}
                        {book.saleInfo?.listPrice ? (
                          <CardDescription className="truncate text-xs font-normal text-black transition-colors duration-200 group-hover:text-gray-900">
                            {book.saleInfo.listPrice.amount.toLocaleString(
                              "id-ID",
                              {
                                style: "currency",
                                currency: "IDR",
                              },
                            )}
                          </CardDescription>
                        ) : (
                          <CardDescription className="font-normal text-red-500 transition-colors duration-200">
                            Tidak Tersedia
                          </CardDescription>
                        )}
                      </CardHeader>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </>
        ) : (
          // Skeleton
          <div className="flex gap-10 px-10 pt-5 lg:ms-10 lg:px-0">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}
      </CarouselContent>

      <CarouselPrevious className="left-10 flex bg-emerald-800 text-yellow-600 lg:absolute lg:-left-10" />
      <CarouselNext className="right-10 flex bg-emerald-800 text-yellow-600 lg:absolute lg:-right-10" />
    </Carousel>
  );
}

export default ClassicsBooksCarousel;
