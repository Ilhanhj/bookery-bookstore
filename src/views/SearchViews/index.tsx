/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Book } from "@/types/BooksProps.type";
import Link from "next/link";

type SearchPageProps = {
  query: string;
  books: Book[];
};

const SearchViews = ({ query, books }: SearchPageProps) => {
  return (
    <>
      {books.map((book) => (
        <div className="w-full" key={book.id}>
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
                        book.saleInfo?.listPrice?.amount ? "" : "opacity-40"
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
                        book.saleInfo?.listPrice?.amount ? "" : "opacity-40"
                      }`}
                    />
                    <h1 className="absolute mx-auto mb-20 text-nowrap rounded-full bg-red-200 p-1 text-xs text-red-700 lg:mb-16 lg:p-2 lg:text-base">
                      Out of Stock
                    </h1>
                  </>
                )}

                <CardHeader className="w-full p-3 text-center lg:w-48 lg:p-3 lg:text-left">
                  <CardTitle className="truncate font-bold transition-colors duration-200 group-hover:text-yellow-600">
                    {book.volumeInfo.title}
                  </CardTitle>

                  <CardDescription className="truncate uppercase transition-colors duration-200 group-hover:text-gray-600">
                    {book.volumeInfo.authors?.join(", ") || ""}
                  </CardDescription>

                  {/* Pengecekan apakah harga ada */}
                  {book.saleInfo?.listPrice ? (
                    <CardDescription className="font-semibold text-black transition-colors duration-200 group-hover:text-gray-900">
                      {book.saleInfo.listPrice.amount.toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </CardDescription>
                  ) : (
                    <CardDescription className="font-semibold text-black transition-colors duration-200 group-hover:text-gray-900">
                      Tidak Tersedia
                    </CardDescription>
                  )}
                </CardHeader>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </>
  );
};

export default SearchViews;
