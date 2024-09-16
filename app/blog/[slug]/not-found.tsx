import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-lg mb-8">
        Oops! The blog post you are looking for does not exist. It may have been
        removed or the URL might be incorrect.
      </p>
      <Link href="/" passHref>
        <div className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">
          Explore Blogs
        </div>
      </Link>
    </div>
  );
};

export default NotFoundPage;
