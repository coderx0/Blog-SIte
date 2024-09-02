import ImageComponent from "@/app/Components/ImageComponent/Image";
import { client } from "../../../utils/sanity/client";
import {
  PortableText,
  PortableTextMarkComponentProps,
} from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { BodyFont } from "@/fonts";
import MoreLikeThisSection from "@/app/Components/PageSections/MoreLikeThis";
import type { Metadata, ResolvingMetadata } from "next";
import { Blog } from "@/types";
import Image from "next/image";

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
          <Image
            alt={value.alt || " "}
            loading="lazy"
            src={urlFor(value)
              .width(800)
              .height(520)
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
    strong: ({ children }: any) => (
      <em className="font-semibold">{children}</em>
    ),
    underline: ({ children }: any) => (
      <u className="font-semibold block my-2">{children}</u>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="mt-xl px-8">{children}</ul>,
    number: ({ children }: any) => (
      <ol className="mt-lg pl-6 md:pl-12 flex flex-col gap-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li style={{ listStyleType: "disc" }}>{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="" style={{ listStyleType: "decimal" }}>
        {children}
      </li>
    ),
  },
  block: {
    h3: ({ children }: any) => (
      <h3 className="text-2xl text-primary mt-8">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl text-primary mt-8">{children}</h4>
    ),
  },
};

const QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  description,
  slug,
  content,
  authorName,
  tags,
  thumbnail,
  categories->{
  ...,
  }
}
`;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "post"][0...100].slug.current`);

  return slugs.map((slug: string) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const result: Blog = await client.fetch(QUERY, { slug: params.slug });

  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: result.title,
    description: result.description,
    openGraph: {
      images: [
        urlFor(result.thumbnail)
          .width(500)
          .height(320)
          .fit("max")
          .auto("format")
          .url(),
      ],
    },
  };
}

const BlogDetails = async ({ params }: { params: { slug: string } }) => {
  const result = await client.fetch(QUERY, { slug: params.slug });
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:gap-8 mt-12">
        <div className="flex-1">
          <h2 className="text-2xl font-bold">{result.title}</h2>
          <div className="my-12 md:px-12">
            <ImageComponent
              imgSrc={result.thumbnail}
              width={700}
              height={400}
              animate={false}
            />
          </div>
          <div
            className={` text-lg lg:text-xl flex flex-col gap-4 ${BodyFont.className}`}>
            <PortableText value={result.content} components={ptComponents} />
          </div>
        </div>
        <div className="w-full lg:w-[30%] bg-blue-100 mt-20">Hello wolrd</div>
      </div>
      <div className="mt-12 lg:mt-24">
        <h2 className="text-xl font-bold">More Like This</h2>
        <MoreLikeThisSection
          category={result.categories._id}
          slug={result.slug.current}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
