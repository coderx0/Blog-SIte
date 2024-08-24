import { Blog } from "@/types";
import Link from "next/link";
import React from "react";
import ImageComponent from "../ImageComponent/Image";

const Card2 = ({ blog }: { blog: Blog }) => {
  return (
    <>
      <Link href={`/blog/${blog.slug.current}`} className="w-full">
        <ImageComponent imgSrc={blog.thumbnail} height={240} width={400} />
      </Link>
      <div className="flex flex-col gap-2 h-full">
        <p className="text-[12px]">
          {new Date(blog._createdAt).toDateString()}
        </p>
        <Link href={`/blog/${blog.slug.current}`} className="flex flex-col">
          <h2 className="font-bold md:text-[18px] hover:text-base-content/75 transition duration-200">
            {blog.title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default Card2;
