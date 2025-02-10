export type BooksDetails = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate: string;
    description?: string;
    pageCount?: number;
    categories?: string[];
    imageLinks?: {
      smallThumbnail: string;
      thumbnail?: string;
    };
    industryIdentifiers?: Array<{
      type: string;
      identifier: string;
    }>;
    language: string;
    previewLink: string;
  };
  saleInfo?: {
    listPrice?: {
      amount: number;
      currencyCode: string;
    };
    isEbook?: boolean;
  };
};

export type BooksResponse = {
  items: BooksDetails[];
};
