import SeparatorElement from "@/components/elements/SeparatorElement";
import BestSellersBooksCarousel from "@/components/fragments/BestSellersBooksCarousel";
import NewsLetters from "@/components/fragments/NewsLetters";
import { BooksDetails } from "@/types/BooksDetailProps.type";
import BookDetailsViews from "@/views/BookDetailsViews";
import { useRouter } from "next/router";

const BookDetails = ({ books }: { books: BooksDetails }) => {
  const router = useRouter();
  const { bookId } = router.query;

  return (
    <div className="mx-auto min-h-screen max-w-6xl lg:mt-16">
      <BookDetailsViews books={books} />
      <SeparatorElement />
      <h1 className="text-center text-2xl font-semibold lg:text-left">
        Books Recomendation
      </h1>
      <BestSellersBooksCarousel />
      <SeparatorElement />
      <NewsLetters />
    </div>
  );
};

export default BookDetails;

// Perbaikan getServerSideProps untuk mendapatkan detail buku berdasarkan bookId
export const getServerSideProps = async ({
  params,
}: {
  params: { bookId: string };
}) => {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  const { bookId } = params;

  // Ambil detail buku berdasarkan ID
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`,
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      books: data || {}, // Data detail buku yang difetch
    },
  };
};
