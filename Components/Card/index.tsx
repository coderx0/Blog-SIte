import React from "react";
import ImageComponent from "../ImageComponent/Image";
import Link from "next/link";

type CardProps = {
  title: string;
  thumbnail: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
  description: string;
  imgHeight: number;
  imgWidth: number;
  hideDescription?: boolean;
  slug: string;
};
const Card = ({
  title,
  description,
  thumbnail,
  imgHeight,
  imgWidth,
  hideDescription = true,
  slug,
}: CardProps) => {
  return (
    <div className="">
      <Link href={`/blog/${slug}`}>
        <div
          // style={{ maxHeight: imgHeight, maxWidth: imgWidth }}
          className="w-full h-full">
          <ImageComponent
            imgSrc={thumbnail}
            height={imgHeight}
            width={imgWidth}
          />
        </div>
      </Link>
      <Link href={`/blog/${slug}`}>
        <div>
          <p className="mt-4 font-semibold text-sm hover:text-base-content/75 transition duration-200">
            {title}
          </p>
          {hideDescription ? (
            <p className="mt-2 md:hidden">{description}</p>
          ) : (
            <p className="mt-2">{description}</p>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
