"use client";

import { footerData } from "@/customize/data";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const QuickLinks = () => {
  const pathname = usePathname();
  
  return (
    <div>
      <h3 className="text-gray-500 py-2 pl-1 text-2xl">Quick Links</h3>
      <div className="flex flex-wrap w-full -mt-2 -ml-3">
        {footerData.legalNavigation.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={classNames(
              "w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-lighter focus:text-primary-lighter focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700",
              pathname === item.href &&
                "text-primary-lighter bg-indigo-100 outline-none"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
