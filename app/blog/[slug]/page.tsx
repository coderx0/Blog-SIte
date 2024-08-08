import ImageComponent from "@/Components/ImageComponent/Image";
import { client } from "../../../utils/sanity/client";
import {
  PortableText,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const ptComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="w-full flex justify-center items-center my-6 h-[220px]">
          <img
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value)
              .width(370)
              .height(220)
              .fit("max")
              .auto("format")
              .url()}
            className="w-full h-full object-cover"
          />
        </div>
      );
    },
  },
  marks: {
    link: ({ children, value }: PortableTextMarkComponentProps<any>) => {
      return (
        <a
          href={value?.href}
          rel={"noindex nofollow"}
          target="_blank"
          className="text-blue-400">
          {children}
        </a>
      );
    },
  },
};

const QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  slug,
  content,
  authorName,
  tags,
  thumbnail
}
`;

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const result = await client.fetch(QUERY, { slug: params.slug });
  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-12">
      <div className="flex-1">
        <h2 className="text-2xl font-bold">{result.title}</h2>
        <div className="my-12 md:px-12">
          <ImageComponent imgSrc={result.thumbnail} height={220} width={370} />
        </div>
        <div className="text-justify text-lg lg:text-xl">
          <PortableText value={result.content} components={ptComponents} />
        </div>
      </div>
      <div className="w-[30%] bg-blue-100 mt-20">Hello wolrd</div>
    </div>
  );
};

export default BlogDetails;
