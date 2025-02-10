import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BannerText = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="grid grid-cols-1 place-content-center gap-6 px-6 pt-12 lg:grid-cols-4 lg:gap-6 lg:px-0 lg:pb-10">
      {/* Text Content Section */}
      <div className="rounded-xl border border-gray-300 bg-neutral-200 bg-cover bg-bottom p-6 shadow-md transition-all duration-300 hover:shadow-xl lg:col-auto lg:bg-center lg:p-8">
        <div className="flex flex-col gap-5">
          <h1 className="text-xl uppercase tracking-wider text-gray-600">
            BOOKERY
          </h1>
          <h1 className="text-4xl font-bold leading-tight text-emerald-800 lg:text-5xl">
            {title}
          </h1>
          <Separator className="my-4 bg-emerald-700" />
          <div className="flex flex-col space-y-4">
            <p className="leading-relaxed text-neutral-400">
              Discover the essence of storytelling and immerse yourself in
              timeless tales. Curated with passion, every page holds an
              adventure.
            </p>
            <Button className="mt-4 w-full transform rounded-lg bg-gradient-to-r from-emerald-700 to-emerald-900 py-3 text-white shadow-lg transition-transform hover:scale-105 hover:from-emerald-800 hover:to-emerald-700">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`${image} flex items-center justify-start rounded-xl border border-gray-300 bg-cover bg-center p-0 shadow-md transition-all duration-300 hover:shadow-xl lg:col-span-3`}
        style={{ minHeight: "400px" }} // Ensures image area has a good minimum height
      ></div>
    </div>
  );
};

export default BannerText;
