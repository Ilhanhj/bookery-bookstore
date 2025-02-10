export type Book = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publishedDate: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };
  saleInfo?: {
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
  };
};

export type BooksResponse = {
  items: Book[];
};
