"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Work2 = () => {
  const route = useRouter();

  const handleClick = () => {
    route.back();
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-start w-full">
        <span>Back</span>
        <h1> WORK PAGE 2</h1>

        <span className="cursor-pointer text-red-400" onClick={handleClick}>
          Back
        </span>
        <Link className="text-blue-500" href={"/"}>
          Home
        </Link>
      </div>
    </div>
  );
};

export default Work2;
