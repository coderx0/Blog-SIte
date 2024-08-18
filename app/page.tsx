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

// type Blog = {
//   thumbnail: {
//     _type: string;
//     asset: {
//       _ref: string;
//       _type: string;
//     };
//   };
//   description: string;
//   _createdAt: string;
//   categories: { title: string };
//   title: string;
//   slug: {
//     current: string;
//     _type: string;
//   };
// };

export default async function Home() {
  const [imp, ...result] = await client.fetch(CONTENT_QUERY);
  return (
    <div className="">
      <Section1 result={result} imp={imp} />
      <Section2 result={result} imp={imp} />
      <Section3 result={result} imp={imp} />
      <Section4 result={result} imp={imp} />
    </div>
  );
}
