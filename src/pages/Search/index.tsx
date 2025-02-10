import SeparatorElement from "@/components/elements/SeparatorElement";
import TitleCategory from "@/components/elements/TitleCategory";
import BannerText from "@/components/fragments/BannerText";
import CategorySidebar from "@/components/fragments/CategorySidebar";
import NewsLetters from "@/components/fragments/NewsLetters";
import { Book } from "@/types/BooksProps.type";
import SearchViews from "@/views/SearchViews";
import { NextPageContext } from "next";

type SearchPageProps = {
  query: string;
  books: Book[];
};

const SearchPage = ({ query, books }: SearchPageProps) => {
  console.log("Query in SearchPage:", query); // Debug: Memastikan query diterima
  console.log("Books in SearchPage:", books); // Debug: Memastikan books diterima

  return (
    <div className="bg-neutral-100">
      {/* Hero Section */}
      <div className="w-full bg-neutral-200 py-10 lg:py-20">
        <div className="mx-auto text-center lg:w-[75%] lg:ps-14 lg:text-center">
          <TitleCategory textColor="text-emerald-800 lg:text-5xl">
            Your search for{" "}
            <span className="text-yellow-600">
              <span className="text-yellow-600">
                `
                {query
                  .replace("intitle:", "")
                  .replace("inauthor:", "")
                  .replace("inpublisher:", "")
                  .replace("subject:", "")
                  .replace("isbn:", "")
                  .replace("lccn:", "")
                  .replace("oclc:", "")}
              </span>
              `
            </span>{" "}
            revealed the following:
          </TitleCategory>
        </div>
      </div>
      {/* Category Sidebar */}
      <div className="flex w-full flex-col px-4 lg:flex-row">
        <div className="w-auto lg:p-10">
          <CategorySidebar />
        </div>

        {/* Best Sellers Books Section */}
        <div className="grid w-full grid-cols-2 gap-2 px-0 py-4 sm:grid-cols-2 lg:w-[75%] lg:grid-cols-4 lg:gap-6 lg:p-0 lg:px-6 lg:py-10">
          <SearchViews query={query} books={books} />
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

export default SearchPage;

export const getServerSideProps = async (context: NextPageContext) => {
  const query = context.query.query as string; // Ambil query dari URL
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;

  const encodedQuery = encodeURIComponent(query); // Encode query string

  if (!query) {
    return {
      props: {
        query: "",
        books: [],
      },
    };
  }

  try {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodedQuery}&key=${apiKey}`,
    );
    const data = await res.json();

    return {
      props: {
        query,
        books: data.items || [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        query,
        books: [],
      },
    };
  }
};
