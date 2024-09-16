// app/category/[slug]/not-found.tsx

import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
      <p className="text-lg mb-8">
        The category you are looking for does not exist. Please check the URL or
        select from our available categories.
      </p>
      <div className="flex flex-col gap-4">
        <Link href="/category/Tech" passHref>
          <div className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
            Go to Tech
          </div>
        </Link>
        <Link href="/category/Games" passHref>
          <div className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
            Go to Games
          </div>
        </Link>
        <Link href="/category/Personal%20Development" passHref>
          <div className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
            Go to Personal Development
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
