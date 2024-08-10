import Link from "next/link";
import React from "react";

const Header = () => {
  const navManu = [
    { path: "/", title: "Home" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
    { path: "/profile", title: "Profile" },
    { path: "/testimonial", title: "Testimonial" },
    { path: "/work", title: "Work" },
  ];

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className="flex justify-center items-center w-[90%] h-[4rem] bg-white rounded-lg shadow m-4 dark:bg-gray-800"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {navManu &&
            navManu.map((item, idx) => (
              <li key={idx}>
                <Link href={`${item.path}`}>{item.title}</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
