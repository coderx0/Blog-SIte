import { client } from "../utils/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import RightArrow from "@/Icons/rightArrow";
import Link from "next/link";
import ImageComponent from "@/Components/ImageComponent/Image";
import Card from "@/Components/Card";
import { Blog } from "@/types";
import Section1 from "@/Components/PageSections/HomePage/Section1";
import Section2 from "@/Components/PageSections/HomePage/Section2";
import Section3 from "@/Components/PageSections/HomePage/Section3";
import Section4 from "@/Components/PageSections/HomePage/Section4";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const CONTENT_QUERY = `*[_type == "post"][0...3] {
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
      <Section1 result={result} imp={imp} />
      <Section2 result={result} imp={imp} />
      <Section4 result={result} imp={imp} />
      <Section3 result={result} imp={imp} />
    </>
  );
}
