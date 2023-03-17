import Link from "next/link";
import fluxCodify from "../assets/FluxCodify.png";
import Image from "next/image";
import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-light-blue to-lighter-blue border-gray-200 px-2 sm:px-4 py-6 sticky top-0 z-50 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className="text-3xl  font-bold ml-12">FluxCodify</h1>
        {/* <Image src = {fluxCodify} width={200} height={150}/> */}

        <ul className="flex flex-row space-x-6">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              onClick={() => setDropDown(!dropDown)}
              data-dropdown-toggle="dropdownNavbar"
              className="flex items-center justify-between w-full py-2 hover:text-white pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:white md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-blue-500 dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              More{" "}
              <svg
                className="w-5 h-5 ml-1"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
           
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {dropDown && (
              <div
                id="dropdownNavbar" onMouseLeave={()=>setDropDown(!dropDown)}
                className=" absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-light-blue dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-light-blue dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Portfolio
                    </a>
                  </li>
                
                </ul>
               
              </div>
            )}
          </li>

          <li>
            <Link
              href="/contact"
              className="bg-black p-2 px-3 rounded-md text-white mr-12"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
