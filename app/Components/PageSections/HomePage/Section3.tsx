import Link from "next/link";
import ImageComponent from "../../ImageComponent/Image";
import { Blog } from "@/types";
import RightArrow from "@/Icons/rightArrow";

const Section3 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="mt-10 md:mt-24 flex flex-col-reverse lg:flex-row justify-between ">
      <div className="w-full lg:w-[75%]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Latest</h2>
          <p className="flex gap-2">
            <span>View All</span>
            <RightArrow />
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {[imp, ...result].map((blog: any) => (
            <div
              key={blog.title}
              className="flex flex-col md:flex-row gap-4 lg:gap-12">
              <Link
                href={`/blog/${blog.slug.current}`}
                className="w-full md:max-w-[35%]">
                <ImageComponent
                  imgSrc={blog.thumbnail}
                  height={240}
                  width={400}
                />
              </Link>
              <div className="flex flex-col-reverse md:flex-col gap-4">
                <Link
                  href={`/blog/${blog.slug.current}`}
                  className="flex flex-col gap-2 md:gap-4 hover:text-base-content/75 transition duration-200">
                  <h2 className="font-bold md:text-sm lg:text-xl">
                    {blog.title}
                  </h2>
                  <p className="text-[12px] lg:text-sm">{blog.description}</p>
                </Link>
                <div className="flex text-[12px] justify-between md:justify-start md:gap-8">
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
      <div className="w-full h-[200px] lg:h-[620px] lg:w-[22%] bg-red-100 mb-10">
        <h2>AD</h2>
      </div>
    </div>
  );
};

export default Section3;
