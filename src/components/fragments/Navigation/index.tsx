/* eslint-disable @typescript-eslint/no-unused-vars */
import Link from "next/link";
import {
  UserRound,
  Menu,
  Search,
  ShoppingCart,
  LogOut,
  CircleUserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import SeparatorElement from "@/components/elements/SeparatorElement";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
export const description =
  "A settings page. The settings page has a sidebar navigation and a main content area. The main content area has a form to update the store name and a form to update the plugins directory. The sidebar navigation has links to general, security, integrations, support, organizations, and advanced settings.";

function Navigation() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const { data } = useSession();
  const cart = useSelector((state: RootState) => state.cart.items);
  const [totalCart, setTotalCart] = useState(0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      const encodedQuery = encodeURIComponent(query);
      router.push(`/Search?query=${encodedQuery}`); // Pindah ke halaman search dengan query
    }

    setQuery("");
  };

  useEffect(() => {
    const newTotalCart = cart.reduce((acc, item) => acc + item.quantity, 0);
    setTotalCart(newTotalCart);
  }, [cart]);

  return (
    <>
      <header className="sticky top-0 z-20 flex h-20 items-center bg-emerald-900 px-4 lg:px-14">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="mx-5 shrink-0 bg-transparent text-yellow-600 md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="h-full w-full bg-emerald-800 lg:right-12 lg:top-5 lg:h-[450px] lg:w-[540px] lg:rounded-xl"
          >
            <nav className="grid gap-6 p-6">
              <form
                className="relative mx-auto flex w-full max-w-md items-center lg:ms-4"
                onSubmit={handleSearch}
              >
                <div className="relative flex w-full">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Find your next favorite book"
                    value={query}
                    className="text-smtransition w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </form>
              <SeparatorElement />

              {["About Us", "Events", "Contact Us"].map((text) => (
                <Link
                  key={text}
                  href={`/${text.replace(" ", "")}`}
                  className="text-4xl font-thin text-yellow-600 md:text-xl"
                >
                  {text}
                </Link>
              ))}
              <SeparatorElement />
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link
          href="/"
          className="font-italiana text-2xl font-semibold uppercase text-yellow-600 lg:flex-grow lg:text-3xl"
        >
          BOOKERY
        </Link>
        {/* Search Bar */}
        {router.pathname !== "/" && (
          <form
            className="relative mx-auto hidden w-full max-w-md items-center lg:ms-4 lg:flex"
            onSubmit={handleSearch}
          >
            <div className="relative flex w-full">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Find your next favorite book"
                value={query}
                className="text-smtransition w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </form>
        )}

        {/* Desktop Navigation */}
        <div className="hidden w-full items-center justify-center gap-6 text-neutral-400 lg:flex">
          {["About Us", "Events", "Contact Us"].map((text) => (
            <Link
              key={text}
              href={`/${text.replace(" ", "")}`}
              className="text-md font-thin hover:text-yellow-600"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-4">
          {/* Cart for Desktop */}
          {data ? (
            <button className="hidden items-center bg-transparent text-yellow-600 hover:bg-opacity-50 lg:flex">
              <span className="absolute flex items-center justify-center rounded-full bg-red-500 text-white lg:right-[9.5rem] lg:top-6 lg:h-5 lg:w-5">
                {totalCart}
              </span>
              <Link
                href="/Cart"
                className="flex items-center gap-2 rounded-lg p-2 text-yellow-600"
              >
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </button>
          ) : (
            <button className="hidden items-center bg-transparent text-yellow-600 hover:bg-opacity-50 lg:flex">
              <span className="absolute flex items-center justify-center rounded-full bg-red-500 text-white lg:right-[6rem] lg:top-6 lg:h-5 lg:w-5">
                0
              </span>
              <Link
                href="/Cart"
                className="flex items-center gap-2 rounded-lg p-2 text-yellow-600"
              >
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </button>
          )}

          {/* User Account */}
          <DropdownMenu>
            {data ? (
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="hidden items-center rounded-lg bg-transparent p-2 lg:flex">
                      {data?.user?.image && (
                        <div className="hidden items-center gap-2 rounded-md bg-yellow-600 p-2 text-white transition-transform hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 lg:flex">
                          <CircleUserRound className="h-6 w-6" />
                        </div>
                      )}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="hidden flex-col space-y-2 p-2 lg:flex">
                      <Link
                        href="/Profile"
                        className="flex items-center gap-2 rounded-lg p-2 text-yellow-600 hover:bg-emerald-800"
                      >
                        <CircleUserRound className="h-5 w-5" />
                        Profile
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="flex items-center gap-2 rounded-lg p-2 text-yellow-600 hover:bg-emerald-800"
                      >
                        <LogOut className="h-5 w-5" />
                        Logout
                      </button>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ) : (
              <button
                onClick={() => signIn()}
                className="hidden items-center text-yellow-600 hover:bg-opacity-50 lg:flex"
              >
                <UserRound className="h-6 w-6" />
              </button>
            )}
          </DropdownMenu>

          {/* Mobile Icons */}
          <Sheet>
            <div className="absolute right-4 flex md:hidden">
              <SheetTrigger asChild>
                <button className="mr-5 text-yellow-600">
                  <span className="absolute right-24 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white">
                    1
                  </span>
                  <Link
                    href="/Cart"
                    className="flex items-center gap-2 rounded-lg p-2 text-yellow-600"
                  >
                    <ShoppingCart className="h-6 w-6" />
                  </Link>
                </button>
              </SheetTrigger>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="items-center rounded-lg bg-transparent p-2 lg:flex">
                      {data?.user?.image && (
                        <div className="items-center gap-2 rounded-md bg-yellow-600 p-2 text-white transition-transform hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 lg:flex">
                          <CircleUserRound className="h-6 w-6" />
                        </div>
                      )}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="block flex-col space-y-2 p-2 lg:flex">
                      <Link
                        href="/Profile"
                        className="flex items-center gap-2 rounded-lg p-2 text-xs text-yellow-600 hover:bg-emerald-800"
                      >
                        <CircleUserRound className="h-4 w-4" />
                        Profile
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="flex items-center gap-2 rounded-lg p-2 text-xs text-yellow-600 hover:bg-emerald-800"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <SheetContent
              side="left"
              className="h-full w-full bg-emerald-800 lg:right-12 lg:top-5 lg:h-[450px] lg:w-[540px] lg:rounded-xl"
            >
              <nav className="grid gap-6 p-6 font-medium">
                List Items
                <SeparatorElement />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <header className="sticky z-50 hidden h-10 items-center justify-center bg-emerald-900 px-4 lg:top-20 lg:flex lg:px-14">
        <div className="flex gap-4">
          {[
            "Fiction",
            "Self-Help",
            "Biography",
            "Science",
            "Romance",
            "Business & Economics",
            "Children's",
            "Mystery & Suspense",
          ].map((subject) => (
            <Link
              key={subject}
              href={`/Search?query=subject:${encodeURIComponent(subject)}`}
              className="text-4xl font-thin text-yellow-600 md:text-xl lg:text-base"
            >
              {subject}
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}

export default Navigation;
