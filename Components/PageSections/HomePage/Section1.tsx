import React from "react";
import Link from "next/link";
import ImageComponent from "@/Components/ImageComponent/Image";
import Card from "@/Components/Card";
import { Blog } from "@/types";
import { BodyFont } from "@/fonts";

const Section1 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="lg:h-[650px] flex flex-col lg:flex-row gap-10 md:pt-4">
      <div className="lg:w-[70%]">
        <Card
          title={imp.title}
          description={imp.description}
          thumbnail={imp.thumbnail}
          imgHeight={280}
          imgWidth={400}
          hideDescription={false}
          slug={imp.slug.current}
        />
      </div>
      <div className="flex flex-col gap-8">
        {[imp, ...result].map((blog: Blog) => (
          <div key={blog.title} className="flex flex-col md:flex-row md:gap-6 ">
            <Link
              href={`/blog/${blog.slug.current}`}
              className="w-full md:w-[260px]">
              <div className="w-full h-full">
                <ImageComponent
                  imgSrc={blog.thumbnail}
                  height={120}
                  width={200}
                />
              </div>
            </Link>
            <Link href={`/blog/${blog.slug.current}`} className="flex-1">
              <div className="flex flex-col gap-2 md:gap-4">
                <h3 className="mt-4 md:mt-0 font-semibold  hover:text-base-content/75 transition duration-200 text-[18px]">
                  {blog.title}
                </h3>
                <p
                  className={`text-[14px] text-base-content/80 ${BodyFont.className}`}>
                  {blog.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
