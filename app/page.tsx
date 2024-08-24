import { client } from "../utils/sanity/client";
import Section1 from "./Components/PageSections/HomePage/Section1";
import GameBlogs from "./Components/PageSections/HomePage/Section2";
import Section3 from "./Components/PageSections/HomePage/Section3";
import TechBlogs from "./Components/PageSections/HomePage/Section4";

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
      <GameBlogs />
      <TechBlogs />
      <Section3 result={result} imp={imp} />
    </>
  );
}
