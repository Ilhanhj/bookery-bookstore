import { NextApiRequest, NextApiResponse } from "next";

// pages/api/bestsellers.ts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY; // API key disimpan di .env

  const url = `https://www.googleapis.com/books/v1/volumes?q=best+seller+fiction&filter=paid-ebooks&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ message: "Error fetching data" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
