import SeparatorElement from "@/components/elements/SeparatorElement";
import SubTitleCategory from "@/components/elements/SubTitleCategory";
import TitleCategory from "@/components/elements/TitleCategory";
import BannerText from "@/components/fragments/BannerText";
import CategorySidebar from "@/components/fragments/CategorySidebar";
import NewsLetters from "@/components/fragments/NewsLetters";
import { Book } from "@/types/BooksProps.type";
import FictionsViews from "@/views/FictionsViews";

const FictionsPage = ({ books }: { books: Book[] }) => {
  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <div className="w-full bg-neutral-200 py-10 lg:py-20">
        <div className="mx-auto text-center lg:w-full lg:ps-14 lg:text-left">
          <TitleCategory textColor="text-emerald-800 lg:text-5xl">
            Fictions
          </TitleCategory>
          <SubTitleCategory>
            Discover the most popular Fictions books and read them in your
            library.
          </SubTitleCategory>
        </div>
      </div>

      {/* Classic Books Section */}
      <div className="flex w-full">
        <div className="w-auto p-10">
          <CategorySidebar />
        </div>
        <div className="grid grid-cols-2 gap-6 px-6 py-10 sm:grid-cols-2 lg:w-[75%] lg:grid-cols-4">
          <FictionsViews books={books} />
        </div>
      </div>

      <SeparatorElement />

      {/* Banner Section */}
      <div className="lg:px-10">
        <BannerText
          title="How to ... bundle"
          image="bg-[url('/assets/howtobundle.jpg')] bg-cover bg-center"
        />
      </div>
      <SeparatorElement />

      <NewsLetters />
    </div>
  );
};

export default FictionsPage;

export const getServerSideProps = async () => {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&filter=paid-ebooks&key=${apiKey}`,
  );
  const data = await res.json();

  // If data.items exists, return it, otherwise return an empty array
  return {
    props: {
      books: data.items || [], // safely accessing items array
    },
  };
};
