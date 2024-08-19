import Link from "next/link";
import ImageComponent from "@/Components/ImageComponent/Image";
import { Blog } from "@/types";
import RightArrow from "@/Icons/rightArrow";

const Section4 = ({ result, imp }: { result: Blog[]; imp: Blog }) => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Games</h2>
        <p className="flex gap-2 items-center">
          <span>View All</span>
          <RightArrow />
        </p>
      </div>
      <div className="lg:flex gap-8">
        <div className="w-full mt-[20px] lg:mt-0">
          <Link href={`/blog/${imp.slug.current}`}>
            <div>
              <ImageComponent imgSrc={imp.thumbnail} height={280} width={400} />
            </div>
          </Link>
          <Link
            href={`/blog/${imp.slug.current}`}
            className="hover:text-base-content/75 transition duration-200">
            <p className="mt-4 font-bold">{imp.title}</p>
            <p className="mt-2">{imp.description}</p>
          </Link>
        </div>
        <div className="mt-10 lg:mt-0 flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col gap-8">
            {result.map((blog: any) => (
              <Link
                href={`/blog/${blog.slug.current}`}
                key={blog.title}
                className="hover:text-base-content/75 transition duration-200">
                <div>
                  <ImageComponent
                    imgSrc={blog.thumbnail}
                    height={120}
                    width={200}
                  />
                </div>
                <p className="mt-4 font-semibold text-sm">{blog.title}</p>
                <p className="mt-2 md:hidden">{blog.description}</p>
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {result.map((blog: any) => (
              <Link href={`/blog/${blog.slug.current}`} key={blog.title}>
                <div>
                  <ImageComponent
                    imgSrc={blog.thumbnail}
                    height={120}
                    width={200}
                  />
                </div>
                <p className="mt-4 font-semibold text-sm">{blog.title}</p>
                <p className="mt-2 md:hidden">{blog.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
