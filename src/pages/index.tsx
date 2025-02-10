import SeparatorElement from "@/components/elements/SeparatorElement";
import BannerText from "@/components/fragments/BannerText";
import BestSellersBooksCarousel from "@/components/fragments/BestSellersBooksCarousel";
import ClassicsBooksCarousel from "@/components/fragments/ClassicsBooksCarousel";
import FictionsBooksCarousel from "@/components/fragments/FictionBooksCarousel";
import Hero from "@/components/fragments/Hero";
import NewsLetters from "@/components/fragments/NewsLetters";
import TitleAndSub from "@/components/fragments/TitleAndSub";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full flex-col justify-center bg-transparent">
      <Hero />
      <div className="mx-auto flex w-full flex-col justify-center lg:max-w-6xl lg:py-5">
        {/* Best Sellers Carousel */}
        <div className="flex flex-col justify-center bg-transparent text-center lg:pt-10">
          <Link href="/BestSellers">
            <TitleAndSub
              title="Best Sellers"
              sub="Best Sellers from Top Selling Authors."
            />
          </Link>
          <BestSellersBooksCarousel />
          <div className="flex items-center justify-center lg:pt-10">
            <Button className="bg-gradient-to-br from-emerald-700 to-emerald-900 hover:bg-emerald-700">
              <Link href="/BestSellers">More Books</Link>
            </Button>
          </div>
        </div>
        <SeparatorElement />

        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          {[
            "Best Sellers",
            "Classic",
            "Computer",
            "Fiction",
            "Non-fiction",
            "Love",
            "Science",
          ].map((name) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center"
            >
              <Link
                href={`/Search?query=${name}`}
                className="text-4xl font-thin text-yellow-600 md:text-xl"
                // Tambahkan ini jika ingin membuka di tab baru
              >
                <Image
                  src={`/assets/icon-categories/${name}.png`}
                  width={55}
                  height={55}
                  alt=""
                  className={`rounded-md bg-neutral-200 object-cover p-2`}
                />
              </Link>
              <h1 className="text-sm text-emerald-800">{name}</h1>
            </div>
          ))}
        </div>

        <SeparatorElement />

        {/* Classic Carousel */}
        <div className="flex flex-col justify-center bg-transparent text-center lg:pt-10">
          <Link href="/Classics">
            <TitleAndSub
              title="Classic Books"
              sub="Rediscover timeless stories that never fade."
            />
          </Link>
          <ClassicsBooksCarousel />
          <div className="flex items-center justify-center lg:pt-10">
            <Button className="bg-gradient-to-br from-emerald-700 to-emerald-900 hover:bg-emerald-700">
              <Link href="/Classics">More Books</Link>
            </Button>
          </div>
        </div>
        <SeparatorElement />

        {/* Fiction Carousel */}
        <div className="flex flex-col justify-center bg-transparent text-center lg:pt-10">
          <Link href="/Fictions">
            <TitleAndSub
              title="Fiction Books"
              sub="Explore top stories and unforgettable tales in fiction."
            />
          </Link>
          <FictionsBooksCarousel />
          <div className="flex items-center justify-center lg:pt-10">
            <Button className="bg-gradient-to-br from-emerald-700 to-emerald-900 hover:bg-emerald-700">
              <Link href="/Fictions">More Books</Link>
            </Button>
          </div>
        </div>
        <SeparatorElement />

        {/* Another Element */}
        <BannerText
          title="Classic Crime"
          image="bg-[url('/assets/classicCrime.jpeg')]  "
        />
        <SeparatorElement />
        <NewsLetters />
      </div>
    </div>
  );
}
