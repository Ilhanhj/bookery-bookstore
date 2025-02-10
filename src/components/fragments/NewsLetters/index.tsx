import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsLetters = () => {
  return (
    <div className="px-6">
      <div className="mx-auto mt-8 flex w-full flex-col justify-center space-y-6 rounded-md border border-gray-200 bg-transparent p-6 px-6 shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl lg:mt-14 lg:w-[60%] lg:p-8">
        <h1 className="text-start text-4xl font-bold leading-tight text-gray-800">
          Sign up to our Newsletter
        </h1>
        <p className="text-base leading-relaxed text-neutral-500">
          Stay updated with the latest news and promotions. Sign up to receive
          updates directly in your inbox!
        </p>
        <Input
          type="text"
          placeholder="Enter your email address"
          className="rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <Button className="mt-4 w-full rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-800 py-3 text-white shadow-md transition-all duration-300 ease-in-out hover:from-emerald-700 hover:to-emerald-900 lg:mt-6">
          Subscribe
        </Button>
        <p className="text-sm text-neutral-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsLetters;
