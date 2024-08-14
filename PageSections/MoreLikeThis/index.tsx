import ImageComponent from "@/Components/ImageComponent/Image";
import { client } from "../../utils/sanity/client";
import Link from "next/link";

const QUERY = `*[_type == "post" && categories._ref == $categoryId && slug.current != $slug] | order(_createdAt desc)[0...3]{
    title,
    slug,
    thumbnail,
    description
  }`;

type Props = {
  category: string;
  slug: string;
};
const MoreLikeThisSection = async (props: Props) => {
  const results = await client.fetch(QUERY, {
    categoryId: props.category,
    slug: props.slug,
  });
  //   console.log(results);

  return (
    <div className="mt-6">
      <div className="flex flex-col md:flex-row gap-8">
        {results.map((result: any) => (
          <div key={result.slug.current} className="flex-1">
            <Link href={`/blog/${result.slug.current}`}>
              <div className="">
                <ImageComponent
                  imgSrc={result.thumbnail}
                  height={220}
                  width={370}
                />
              </div>
            </Link>
            <Link href={`/blog/${result.slug.current}`}>
              <div className="mt-4 hover:text-base-content/75 transition duration-200">
                <p>{result.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreLikeThisSection;
