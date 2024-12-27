"use client";
import { Disclosure } from "@headlessui/react";
import { navigation } from "../customize/data";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="component:Navbar w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-1">
        {/* Logo  */}
        <a href="/">
          <span className={classNames("flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100")}>
            <span>
              <img
                src="/custom/logo.svg"
                style={{ width: 32, height: 32 }}
                alt="logo-company"
                className="w-8"
              />
            </span>
          </span>
        </a>

        {/* get started  */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          {/* <ThemeChanger /> */}
          <div className="hidden mr-3 lg:flex nav__item">
          <a
              href="/login"
              className="px-6 py-2 text-white bg-primary rounded-md md:ml-5"
            >
              Login now
            </a>
          
          </div>
        </div>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-primary-lighter focus:text-primary-lighter focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-lighter focus:text-primary-lighter focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.label}
                    </a>
                  ))}
                  <a
                    href="/login"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                  >
                    Login now
                  </a>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <a
                  href={menu.href}
                  className={classNames("inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-lighter focus:outline-none dark:focus:bg-gray-800", pathname === menu.href && 'text-primary-lighter bg-indigo-100 outline-none')}
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
