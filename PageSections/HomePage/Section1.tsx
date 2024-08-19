import React from "react";
import Link from "next/link";
import ImageComponent from "@/Components/ImageComponent/Image";
import Card from "@/Components/Card";
import { Blog } from "@/types";

const Section1 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <>
      <div className="w-full lg:w-[70%] flex flex-col-reverse md:flex-row md:gap-6">
        <div className="mt-6 md:mt-0 md:w-[30%]">
          <h1 className="text-2xl font-bold">Trending</h1>
          <div className="flex flex-col mt-6 gap-8 text-justify">
            {result.map((blog: Blog) => (
              <Card
                key={blog.title}
                title={blog.title}
                thumbnail={blog.thumbnail}
                description={blog.description}
                imgHeight={120}
                imgWidth={200}
                slug={blog.slug.current}
              />
            ))}
          </div>
        </div>
        <div className="flex-1">
          <div className="w-full mt-[20px] md:mt-[60px]">
            <Card
              title={imp.title}
              description={imp.description}
              thumbnail={imp.thumbnail}
              hideDescription={false}
              slug={imp.slug.current}
              imgHeight={280}
              imgWidth={400}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[40%]">
        <h2 className="text-2xl font-bold text-left">Latest</h2>
        <div className="flex flex-col mt-6 gap-4 text-justify">
          {[imp, ...result].map((blog: any) => (
            <div
              key={blog.title}
              className="flex flex-col sm:flex-row gap-4 justify-center sm:h-[120px] md:h-[160px] lg:h-[120px] w-full hover:bg-base-200 transition duration-750 rounded-md">
              <div className="w-full sm:w-[40%]">
                <ImageComponent
                  imgSrc={blog.thumbnail}
                  height={120}
                  width={200}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-2">
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className="hover:text-base-content/75 transition duration-200">
                  <h2 className="flex-1 font-semibold text-[12px] sm:text-sm">
                    {blog.title}
                  </h2>
                  <p className="hidden md:block lg:hidden text-sm mt-4">
                    {blog.description}
                  </p>
                </Link>
                <div className="flex text-[10px] sm:text= md:text-[12px] mt-2 justify-between">
                  <p className="bg-neutral-content rounded-md text-neutral px-2 font-semibold">
                    {blog.categories.title}
                  </p>
                  <p>{new Date(blog._createdAt).toDateString()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section1;
