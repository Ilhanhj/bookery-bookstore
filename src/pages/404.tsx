import { Button } from "@/components/ui/button";

export default function Custom404() {
  return (
    <div className="mx-auto flex size-full max-w-[50rem] flex-col">
      {/* <!-- ========== END HEADER ========== --> */}

      {/* <!-- ========== MAIN CONTENT ========== --> */}
      <main id="content">
        <div className="px-4 py-10 text-center sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-gray-800 dark:text-white sm:text-9xl">
            404
          </h1>
          <p className="mt-3 text-gray-600 dark:text-neutral-400">
            Oops, something went wrong.
          </p>
          <p className="text-gray-600 dark:text-neutral-400">
            Sorry, we couldn`t find your page.
          </p>
          <Button className="mt-10 bg-gradient-to-br from-emerald-700 to-emerald-900 hover:bg-emerald-700">
            Back to Home
          </Button>
        </div>
      </main>
      {/* <!-- ========== END MAIN CONTENT ========== --> */}

      {/* <!-- ========== FOOTER ========== --> */}
      <footer className="mt-auto py-5 text-center">
        <div className="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            © 2024 BOOKERY. All rights reserved.
          </p>
        </div>
      </footer>
      {/* <!-- ========== END FOOTER ========== --> */}
    </div>
  );
}
