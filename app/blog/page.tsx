// import { client } from "../utils/sanity/client";
// import {
//   PortableText,
//   PortableTextMarkComponentProps,
// } from "@portabletext/react";
// import imageUrlBuilder from "@sanity/image-url";

// const builder = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source);
// }

// const ptComponents = {
//   types: {
//     image: ({ value }: { value: any }) => {
//       if (!value?.asset?._ref) {
//         return null;
//       }
//       return (
//         <div className="w-full flex justify-center items-center my-6">
//           <img
//             alt={value.alt || " "}
//             loading="lazy"
//             src={urlFor(value)
//               .width(320)
//               .height(240)
//               .fit("max")
//               .auto("format")
//               .url()}
//             className="w-full h-[340px] object-cover"
//           />
//         </div>
//       );
//     },
//   },
//   marks: {
//     link: ({ children, value }: PortableTextMarkComponentProps<any>) => {
//       return (
//         <a
//           href={value?.href}
//           rel={"noindex nofollow"}
//           target="_blank"
//           className="text-blue-700">
//           {children}
//         </a>
//       );
//     },
//   },
// };

// // Fetch content with GROQ
// const CONTENT_QUERY = `*[_type == "post"] {
//   ...,
//   author->,
//   categories[]->,
//   tags[],
//   content[] {
//     _type,
//     ...,
//     defined(string) => string
//   }
// }
// `;

// export default async function Home() {
//   const result = await client.fetch(CONTENT_QUERY);
//   return (
//     <main className="w-full">
//       <div className="mx-12 md:mx-[300px] mt-12 text-justify flex flex-col gap-4 text-lg">
//         <PortableText value={result[2].content} components={ptComponents} />
//       </div>
//     </main>
//   );
// }

import React from "react";

const BlogDetails = () => {
  return <div>BlogDetails</div>;
};

export default BlogDetails;
