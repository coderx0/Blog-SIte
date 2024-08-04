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
  description
}
`;

export default async function Home() {
  const [imp, ...result] = await client.fetch(CONTENT_QUERY);

  return (
    <div className="">
      <div className="h-[650px] flex gap-4 pt-4">
        <div className="w-[20%]">
          <h1 className="text-3xl font-bold">Trending</h1>
          <div className="flex flex-col mt-6 gap-8 text-justify">
            {result.map((blog: any) => (
              <div key={blog.title}>
                <img
                  src={urlFor(blog.thumbnail).width(200).height(120).url()}
                  alt="Thumbnail"
                  className="w-full"
                />
                <p className="mt-4">{blog.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%] px-8 ">
          <div className="w-full mt-[60px]">
            <img
              src={urlFor(imp.thumbnail).width(400).height(280).url()}
              alt="Thumbnail"
              className="w-full"
            />
            <p className="mt-4 font-bold">{imp.title}</p>
            <p className="mt-2">{imp.description}</p>
          </div>
        </div>
        <div className="w-[30%]">
          <h2 className="text-3xl font-bold text-right">Latest</h2>
          <div className="flex flex-col mt-6 gap-8 text-justify">
            {[imp, ...result].map((blog: any) => (
              <div
                key={blog.title}
                className="flex gap-4 justify-center h-[120px]">
                <div className="w-[200px]">
                  <img
                    src={urlFor(blog.thumbnail).width(140).height(140).url()}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-1 justify-center items-center">
                  <h2 className="">{blog.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
