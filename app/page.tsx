import { client } from "./utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";

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
    <div className="">
      <div className="lg:h-[650px] flex flex-col lg:flex-row gap-4 md:pt-4">
        <div className="w-full flex flex-col-reverse md:flex-row">
          <div className="mt-6 md:mt-0 md:w-[30%]">
            <h1 className="text-2xl font-bold">Trending</h1>
            <div className="flex flex-col mt-6 gap-8 text-justify">
              {result.map((blog: any) => (
                <div key={blog.title}>
                  <img
                    src={urlFor(blog.thumbnail).width(200).height(120).url()}
                    alt="Thumbnail"
                    className="w-full"
                  />
                  <p className="mt-4 font-semibold">{blog.title}</p>
                  <p className="mt-2 md:hidden">{blog.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 md:pl-8">
            <div className="w-full mt-[20px] md:mt-[60px]">
              <img
                src={urlFor(imp.thumbnail).width(400).height(280).url()}
                alt="Thumbnail"
                className="w-full"
              />
              <p className="mt-4 font-bold">{imp.title}</p>
              <p className="mt-2">{imp.description}</p>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-bold text-left">Latest</h2>
          <div className="flex flex-col mt-6 gap-8 text-justify">
            {[imp, ...result].map((blog: any) => (
              <div
                key={blog.title}
                className="flex gap-4 justify-center h-[90px] sm:h-[120px] w-full">
                <div className="w-[40%]">
                  <img
                    src={urlFor(blog.thumbnail).width(140).height(140).url()}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="flex-1 font-semibold text-[12px] sm:text-sm">
                      {blog.title}
                    </h2>
                    <p className="hidden md:block lg:hidden text-sm mt-4">
                      {blog.description}
                    </p>
                  </div>
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
      <div className="flex flex-col-reverse justify-between lg:flex-row mt-16">
        <div className="w-full lg:w-[75%] flex flex-col gap-24">
          <div className="">
            <div className="flex justify-between">
              <h2 className="text-xl md:text-3xl font-bold mb-6">Gadgets</h2>
              <span className="text-sm">View All</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {[imp, ...result].map((blog: any) => (
                <div
                  key={blog.title}
                  className="flex flex-col gap-4 md:w-[400px]">
                  <div className="w-full">
                    <img
                      src={urlFor(blog.thumbnail).width(400).height(240).url()}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col-reverse md:flex-col gap-4">
                    <h2 className="font-bold md:text-sm">{blog.title}</h2>
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
            <div className="flex justify-between">
              <h2 className="text-xl md:text-3xl font-bold mb-6">Gadgets</h2>
              <span className="text-sm">View All</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              {[imp, ...result].map((blog: any) => (
                <div
                  key={blog.title}
                  className="flex flex-col gap-4 md:w-[400px]">
                  <div className="w-full">
                    <img
                      src={urlFor(blog.thumbnail).width(400).height(240).url()}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col-reverse md:flex-col gap-4">
                    <h2 className="font-bold md:text-sm">{blog.title}</h2>
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
    </div>
  );
}
