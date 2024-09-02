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

const GameBlogs = async () => {
  const gameBlogs = await client.fetch(QUERY, { categoryTitle: "Games" });
  const developmentBlogs = await client.fetch(QUERY, {
    categoryTitle: "Personal Development",
  });

  return (
    <div className="flex flex-col-reverse justify-between lg:flex-row mt-16 lg:mt-0">
      <div className="w-full lg:w-[75%] flex flex-col gap-12 lg:gap-24">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Games</h2>
            <Link href={"/category/Games"}>
              <p className="flex gap-2">
                <span>View More</span>
                <RightArrow />
              </p>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {gameBlogs.map((blog: Blog) => (
              <div
                key={blog.title}
                className="flex flex-col gap-4 md:w-[400px]">
                <Card2 blog={blog} />
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Personal Development
            </h2>
            <Link href={"/category/Personal Development"}>
              <p className="flex gap-2">
                <span>View More</span>
                <RightArrow />
              </p>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {developmentBlogs.map((blog: Blog) => (
              <div
                key={blog.title}
                className="flex flex-col gap-4 md:w-[400px]">
                <Card2 blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[22%] h-[200px] lg:h-[800px] bg-red-100 text-3xl flex justify-center items-center font-bold text-black mb-8">
        {" "}
        AD
      </div>
    </div>
  );
};

export default GameBlogs;
