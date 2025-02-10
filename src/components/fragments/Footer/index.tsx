import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 w-full bg-emerald-900 lg:mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <!--Grid--> */}
        <div className="mx-auto grid max-w-sm grid-cols-2 justify-between gap-3 gap-y-8 py-10 sm:max-w-3xl sm:grid-cols-4 md:gap-8 lg:max-w-full lg:grid-cols-6">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <a
              href="https://bookery.io/"
              className="flex justify-center font-italiana text-yellow-500 lg:justify-start lg:text-3xl"
            >
              Bookery
            </a>
            <p className="py-8 text-center text-sm text-neutral-400 lg:max-w-xs lg:text-left">
              Trusted in more than 100 countries & 5 million buyers. Have any
              question ?
            </p>
            <a
              href="javascript:;"
              className="mx-auto block h-9 w-fit rounded-full bg-emerald-600 px-5 py-2.5 text-xs text-white shadow-sm transition-all duration-500 hover:bg-emerald-700 lg:mx-0"
            >
              Contact us
            </a>
          </div>
          {/* <!--End Col--> */}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-yellow-500">
              Bookery
            </h4>
            <ul className="text-sm transition-all duration-500">
              <Link href="/">
                <li className="mb-6 text-neutral-400 hover:text-yellow-500">
                  Home
                </li>
              </Link>
              <Link href="/AboutUs">
                <li className="mb-6 text-neutral-400 hover:text-yellow-500">
                  About Us
                </li>
              </Link>
              <Link href="/Event">
                <li className="mb-6 text-neutral-400 hover:text-yellow-500">
                  Event
                </li>
              </Link>
            </ul>
          </div>
          {/* <!--End Col--> */}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-yellow-500">
              Explore
            </h4>
            <ul className="text-sm transition-all duration-500">
              <Link href="/">
                <li className="mb-6 text-neutral-400 hover:text-yellow-500">
                  Find a Book
                </li>
              </Link>
              <Link href="/Author">
                <li className="mb-6 text-neutral-400 hover:text-yellow-500">
                  Author
                </li>
              </Link>
              <Link href="/Genres">
                <li className="mb-6 text-neutral-400 hover:text-yellow-500">
                  Genres
                </li>
              </Link>
            </ul>
          </div>
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-yellow-500">
              Social Media
            </h4>
            <ul className="flex flex-col gap-4 text-sm transition-all duration-500">
              <div className="flex gap-4">
                <Link href="/">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    className="fill-current text-neutral-400 hover:text-yellow-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    className="fill-current text-neutral-400 hover:text-yellow-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>YouTube</title>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    className="fill-current text-neutral-400 hover:text-yellow-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </Link>
              </div>
              <div className="flex gap-4">
                <Link href="/">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    className="fill-current text-neutral-400 hover:text-yellow-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    className="fill-current text-neutral-400 hover:text-yellow-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>TikTok</title>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </Link>
                <Link href="/">
                  <svg
                    role="img"
                    width="24"
                    height="24"
                    className="fill-current text-neutral-400 hover:text-yellow-500"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Goodreads</title>
                    <path d="M11.43 23.995c-3.608-.208-6.274-2.077-6.448-5.078.695.007 1.375-.013 2.07-.006.224 1.342 1.065 2.43 2.683 3.026 1.583.496 3.737.46 5.082-.174 1.351-.636 2.145-1.822 2.503-3.577.212-1.042.236-1.734.231-2.92l-.005-1.631h-.059c-1.245 2.564-3.315 3.53-5.59 3.475-5.74-.054-7.68-4.534-7.528-8.606.01-5.241 3.22-8.537 7.557-8.495 2.354-.14 4.605 1.362 5.554 3.37l.059.002.002-2.918 2.099.004-.002 15.717c-.193 7.04-4.376 7.89-8.209 7.811zm6.1-15.633c-.096-3.26-1.601-6.62-5.503-6.645-3.954-.017-5.625 3.592-5.604 6.85-.013 3.439 1.643 6.305 4.703 6.762 4.532.591 6.551-3.411 6.404-6.967z" />
                  </svg>
                </Link>
              </div>
            </ul>
          </div>
          {/* <!--End Col--> */}
          {/* <!--End Col--> */}
          <div className="text-left lg:mx-auto">
            <h4 className="mb-7 text-lg font-medium text-yellow-500">
              Subscribe
            </h4>
            <p className="mb-7 text-sm leading-6 text-neutral-400">
              Subscribe to get the latest news from us
            </p>
            <a
              href="javascript:;"
              className="flex w-fit items-center justify-center gap-2 rounded-full bg-yellow-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:bg-yellow-500 lg:mx-0"
            >
              Get In Touch
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                  stroke="#fff"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* <!--Grid--> */}
        <div className="border-t border-gray-200 py-7">
          <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
            <span className="text-sm text-gray-500">
              ©<a href="https://bookery.io/">bookery</a> 2024, All rights
              reserved.
            </span>
            <div className="mt-4 flex space-x-4 sm:justify-center lg:mt-0"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
