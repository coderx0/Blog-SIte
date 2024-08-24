import { Blog } from "@/types";
import RightArrow from "@/Icons/rightArrow";
import Card2 from "../../Card2";

const Section4 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <>
      <div className="mt-24">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Tech</h2>
          <p className="flex gap-2">
            <span>View All</span>
            <RightArrow />
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 md:justify-between">
          {[imp, ...result].map((blog: Blog) => (
            <div key={blog.title} className="flex flex-col gap-4 md:w-[400px]">
              <Card2 blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Section4;
