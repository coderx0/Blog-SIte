import { client } from "../utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import RightArrow from "@/Icons/rightArrow";
import Link from "next/link";
import ImageComponent from "@/Components/ImageComponent/Image";
import Card from "@/Components/Card";
import { Blog } from "@/types";
import Section1 from "@/PageSections/HomePage/Section1";
import Section2 from "@/PageSections/HomePage/Section2";
import Section3 from "@/PageSections/HomePage/Section3";
import Section4 from "@/PageSections/HomePage/Section4";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const CONTENT_QUERY = `*[_type == "post"] {
  title,
  slug,
  thumbnail,
  description,
  _createdAt,
  categories->{
  title
  }
}
`;

export default async function Home() {
  const [imp, ...result] = await client.fetch(CONTENT_QUERY);
  return (
    <>
      <div className="lg:h-[650px] flex flex-col lg:flex-row gap-4 md:pt-4">
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
      </div>
      <div className="flex flex-col-reverse justify-between lg:flex-row mt-16 lg:mt-0">
        <div className="w-full lg:w-[75%] flex flex-col gap-12 lg:gap-24">
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Gadgets</h2>
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
                  <Link href={`/blog/${blog.slug.current}`} className="w-full">
                    <ImageComponent
                      imgSrc={blog.thumbnail}
                      height={240}
                      width={400}
                    />
                  </Link>
                  <div className="flex flex-col-reverse md:flex-col gap-4">
                    <Link href={`/blog/${blog.slug.current}`}>
                      <h2 className="font-bold md:text-sm hover:text-base-content/75 transition duration-200">
                        {blog.title}
                      </h2>
                    </Link>
                    <div className="flex text-[12px] justify-between">
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
          <div className="">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold">Movies</h2>
              <p className="flex gap-2">
                <span>View All</span>
                <RightArrow />
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {[imp, ...result].map((blog: any) => (
                <div
                  key={blog.title}
                  className="flex flex-col gap-4 md:w-[400px]">
                  <Link href={`/blog/${blog.slug.current}`} className="w-full">
                    <ImageComponent
                      imgSrc={blog.thumbnail}
                      height={240}
                      width={400}
                    />
                  </Link>
                  <div className="flex flex-col-reverse md:flex-col gap-4">
                    <Link href={`/blog/${blog.slug.current}`}>
                      <h2 className="font-bold md:text-sm hover:text-base-content/75 transition duration-200">
                        {blog.title}
                      </h2>
                    </Link>
                    <div className="flex text-[12px] justify-between">
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
        </div>

        <div className="w-full lg:w-[20%] h-[200px] lg:h-[800px] bg-red-100 text-3xl flex justify-center items-center font-bold text-black mb-8">
          {" "}
          AD
        </div>
      </div>
      <div className="mt-10 flex flex-col-reverse lg:flex-row justify-between ">
        <div className="w-full lg:w-[75%]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Technology</h2>
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
        <div className="w-full h-[200px] lg:h-[620px] lg:w-[20%] bg-red-100 mb-10">
          <h2>AD</h2>
        </div>
      </div>
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
                <ImageComponent
                  imgSrc={imp.thumbnail}
                  height={280}
                  width={400}
                />
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
    </>
  );
}
