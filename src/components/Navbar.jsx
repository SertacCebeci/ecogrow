import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navImageSize = 40;
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center justify-center">
          <Image
            src="/ico.png"
            alt="icon"
            width={navImageSize}
            height={navImageSize}
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-2">
            EcoGrow
          </span>
        </div>
        <div className="items-center justify-between flex w-auto order-1">
          <ul className="flex space-x-8 mt-0 text-lg font-medium">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
