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
    <div className="">
      <div className="lg:h-[650px] flex flex-col lg:flex-row gap-4 md:pt-4">
        <Section1 result={result} imp={imp} />
      </div>
      <div className="flex flex-col-reverse justify-between lg:flex-row mt-16 lg:mt-0">
        <Section2 result={result} imp={imp} />
      </div>
      <div className="mt-10 flex flex-col-reverse lg:flex-row justify-between ">
        <Section3 result={result} imp={imp} />
      </div>
      <div className="mt-10 lg:mt-20">
        <Section4 result={result} imp={imp} />
      </div>
    </div>
  );
}
