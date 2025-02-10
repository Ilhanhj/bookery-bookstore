import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Search } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const Hero = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const { data } = useSession();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      const encodedQuery = encodeURIComponent(query);
      router.push(`/Search?query=${encodedQuery}`); // Pindah ke halaman search dengan query
    }

    setQuery("");
  };

  return (
    <>
      <div className="w-full bg-[url('/assets/bg-hero-1.jpg')] bg-cover bg-top">
        <div className="mx-auto max-w-[85rem] space-y-6 px-8 py-12 sm:px-6 lg:space-y-10 lg:px-8 lg:py-[7rem]">
          <div className="flex w-full justify-center">
            <div className="space-y-6 lg:w-full lg:space-y-10">
              {/* Title Section */}
              <div className="mx-auto text-center lg:max-w-5xl lg:pt-0">
                <h1 className="font-italiana mb-6 text-5xl font-normal text-yellow-600 sm:text-6xl md:text-7xl lg:text-7xl">
                  Read the books Everyone’s talking about
                </h1>
                <p className="mt-4 px-5 text-sm text-neutral-400 lg:px-20 lg:text-lg">
                  Discover an endless collection of captivating books,
                  handpicked for passionate readers. Your next adventure is just
                  a page away.
                </p>
                <form
                  className="relative mx-auto mt-8 flex w-full max-w-lg items-center px-10"
                  onSubmit={handleSearch}
                >
                  <div className="relative flex w-full">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Find your next favorite book"
                      value={query}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 text-sm shadow-md transition focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                    />
                  </div>
                </form>
                <div className="flex flex-col flex-wrap items-center justify-center gap-4">
                  <h1 className="mt-8 text-base text-yellow-600">
                    Trending Searches
                  </h1>
                  <div className="flex flex-wrap justify-center gap-2">
                    {[
                      "Ryan Holiday",
                      "Cal Newport",
                      "Robert Greene",
                      "RF Kuang",
                      "Fyodor Dostoyevsky",
                    ].map((name) => (
                      <Link
                        key={name}
                        href={`/Search?query=${name}`}
                        className="text-4xl font-thin text-yellow-600 md:text-xl"
                        // Tambahkan ini jika ingin membuka di tab baru
                      >
                        <Badge
                          variant="secondary"
                          className="font-normal text-emerald-700"
                        >
                          {name}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
