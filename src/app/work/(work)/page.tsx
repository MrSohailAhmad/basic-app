import Link from "next/link";
import React from "react";

const Work = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-start w-full">
        {/* <span>Back</span> */}
        <h1> WORK PAGE 1</h1>

        <Link href="/work/work2" className="text-blue-500">
          Work page 2
        </Link>
      </div>
    </div>
  );
};

export default Work;
