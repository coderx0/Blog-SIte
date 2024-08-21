import Link from "next/link";
import ImageComponent from "@/Components/ImageComponent/Image";
import { Blog } from "@/types";
import RightArrow from "@/Icons/rightArrow";
import Card from "@/Components/Card";
import Card2 from "@/Components/Card2";

const Section2 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="flex flex-col-reverse justify-between lg:flex-row mt-16 lg:mt-0">
      <div className="w-full lg:w-[75%] flex flex-col gap-12 lg:gap-24">
        <div className="">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Games</h2>
            <p className="flex gap-2">
              <span>View All</span>
              <RightArrow />
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {[imp, ...result].map((blog: Blog) => (
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
            <h2 className="text-2xl md:text-3xl font-bold">Movies</h2>
            <p className="flex gap-2">
              <span>View All</span>
              <RightArrow />
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {[imp, ...result].map((blog: Blog) => (
              <div
                key={blog.title}
                className="flex flex-col gap-4 md:w-[400px]">
                <Card2 blog={blog} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[20%] h-[200px] lg:h-[800px] bg-red-100 text-3xl flex justify-center items-center font-bold text-black mb-8">
        {" "}
        AD
      </div>
    </div>
  );
};

export default Section2;
