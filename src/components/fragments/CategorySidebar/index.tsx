import SeparatorElement from "@/components/elements/SeparatorElement";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const categories = [
  {
    genre: "Fiction",
    subcategories: [
      { name: "Action and Adventure", href: "/categories/action-adventure" },
      {
        name: "Crime, Thriller & Mystery",
        href: "/categories/crime-thriller-mystery",
      },
      { name: "Classics", href: "/categories/classics" },
      { name: "Fantasy", href: "/categories/fantasy" },
      { name: "Historical Fiction", href: "/categories/historical-fiction" },
      { name: "Horror", href: "/categories/horror" },
      { name: "Romance", href: "/categories/romance" },
      { name: "Science Fiction", href: "/categories/science-fiction" },
      { name: "Literary Fiction", href: "/categories/literary-fiction" },
    ],
  },
  {
    genre: "Non-Fiction",
    subcategories: [
      { name: "Biographies", href: "/categories/biographies" },
      { name: "Self-help", href: "/categories/self-help" },
      { name: "History", href: "/categories/history" },
      { name: "Science", href: "/categories/science" },
      { name: "Travel", href: "/categories/travel" },
      { name: "Philosophy", href: "/categories/philosophy" },
      { name: "Psychology", href: "/categories/psychology" },
      { name: "Business & Economics", href: "/categories/business-economics" },
      { name: "Health & Fitness", href: "/categories/health-fitness" },
      { name: "Politics", href: "/categories/politics" },
    ],
  },
];

const CategorySidebar = () => {
  return (
    <>
      <div className="hidden w-full rounded-xl bg-neutral-100 p-4 shadow-md lg:flex lg:flex-col">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-yellow-600">Categories</h1>
          <SeparatorElement />
        </div>

        {categories.map((category, index) => (
          <div key={index} className="mb-6">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-medium text-yellow-600">
                {category.genre}
              </h2>
            </div>
            <ul className="mt-4 space-y-2 lg:ms-4">
              {category.subcategories.map((subcategory, link) => (
                <li key={link}>
                  <Link
                    href={subcategory.href}
                    className="text-md font-light text-neutral-600 hover:text-yellow-600 hover:underline"
                  >
                    - {subcategory.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-auto lg:hidden">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="text-2xl font-semibold text-yellow-600">
                Categories
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              <div className="">
                {categories.map((category, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-medium text-yellow-600">
                        {category.genre}
                      </h2>
                    </div>
                    <ul className="mt-4 space-y-2 lg:ms-4">
                      {category.subcategories.map((subcategory, link) => (
                        <li key={link}>
                          <Link
                            href={subcategory.href}
                            className="text-md font-light text-neutral-600 hover:text-yellow-600 hover:underline"
                          >
                            - {subcategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}{" "}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CategorySidebar;
