import { Blog } from "@/types";
import RightArrow from "@/Icons/rightArrow";
import Card2 from "../../Card2";

import { client } from "../../../../utils/sanity/client";
import Link from "next/link";

const QUERY = `*[_type == "post" && categories->title == $categoryTitle] | order(_createdAt desc)[0...3]{
  title,
  slug,
  author->{
    name
  },
  thumbnail,
  tags,
  description,
  categories->{
    title
  },
  _createdAt
}`;

const TechBlogs = async () => {
  const result = await client.fetch(QUERY, { categoryTitle: "Tech" });

  return (
    <>
      <div className="mt-24">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Tech</h2>
          <Link href={"/category/Tech"}>
            <p className="flex gap-2">
              <span>View More</span>
              <RightArrow />
            </p>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between">
          {result.map((blog: Blog) => (
            <div key={blog.title} className="flex flex-col gap-4 md:w-[400px]">
              <Card2 blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechBlogs;
