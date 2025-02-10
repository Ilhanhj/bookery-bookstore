/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "books.google.com",
        port: "",
        pathname: "/books/content/**", // Mengizinkan semua path di bawah /books/content
      },
      {
        protocol: "http",
        hostname: "books.google.com",
        port: "",
        pathname: "/books/publisher/content/**", // Mengizinkan path yang mencakup publisher/content
      },
      {
        protocol: "https",
        hostname: "shop.penguin.co.uk",
        port: "",
        pathname: "/cdn/shop/t/166/assets/**", // Mengizinkan semua path di bawah /cdn/shop/t/166/assets/
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Allow all paths
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**", // Allow all paths
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false, // Tambahkan ini
      net: false, // Tambahkan jika diperlukan
      tls: false, // Tambahkan jika diperlukan
    };
    return config;
  },
};

export default nextConfig;
