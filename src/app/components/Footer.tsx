import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerMenu = [
    { path: "/about", title: "About" },
    { path: "/privacy-policy", title: "Privacy Policy" },
    { path: "/licensing", title: "Licensing" },
    { path: "/contact", title: "Contact" },
  ];
  return (
    <footer className=" flex items-center justify-center w-full mt-auto m-4">
      <div className="w-[90%] bg-white rounded-lg shadow dark:bg-gray-800 mx-auto p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            Muhammad Sohail
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          {footerMenu &&
            footerMenu.map((item, idx) => (
              <li>
                <Link
                  href={`${item.path}`}
                  className="hover:underline me-4 md:me-6"
                >
                  {item.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
