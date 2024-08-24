import React from "react";
import ImageComponent from "../ImageComponent/Image";
import Link from "next/link";
import { BodyFont } from "@/fonts";

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
        <div className="w-full h-full">
          <ImageComponent
            imgSrc={thumbnail}
            height={imgHeight}
            width={imgWidth}
          />
        </div>
      </Link>
      <Link href={`/blog/${slug}`}>
        <div>
          <h3 className="mt-4 font-semibold  hover:text-base-content/75 transition duration-200 text-[18px] md:text-[24px]">
            {title}
          </h3>
          {hideDescription ? (
            <h4 className={`mt-2 md:hidden text-[14px] ${BodyFont.className}`}>
              {description}
            </h4>
          ) : (
            <h4
              className={`mt-2 text-sm text-[14px] md:text-[16px] ${BodyFont.className}`}>
              {description}
            </h4>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
