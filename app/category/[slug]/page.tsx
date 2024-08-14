import ImageComponent from "@/Components/ImageComponent/Image";
import { client } from "../../../utils/sanity/client";

const QUERY = `*[_type == "post" && categories->title == $categoryTitle] | order(_createdAt desc)[0...10]{
  title,
  slug,
  author->{
    name
  },
  thumbnail,
  tags,
  description,
  content
}`;

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const result = await client.fetch(QUERY, { categoryTitle: params.slug });

  return (
    <div>
      <h2 className="text-xl md:text-2xl md:mt-8 text-center font-bold mb-12">
        Latest Blogs in {params.slug}
      </h2>

      <div className="flex flex-col md:flex-row md:flex-wrap gap-8 w-full">
        {result.map((result: any) => (
          <div key={result.title} className="m-auto md:w-[400px] min-h-[400px]">
            <div className="h-full">
              <ImageComponent
                imgSrc={result.thumbnail}
                height={220}
                width={370}
              />
            </div>
            <div className="my-4 flex flex-col gap-4">
              <h3 className="text-md font-bold">{result.title}</h3>
              <p className="text-sm">{result.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
