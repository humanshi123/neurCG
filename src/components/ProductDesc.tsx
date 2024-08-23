import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RightIcon, LeftIcon } from "@/utils/svgicons";

interface CardProps {
  title: string;
  description: string;
  buttonLink: string;
  imgSrc?: string | StaticImageData;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
}

const ProductDesc: React.FC<CardProps> = ({
  title,
  description,
  buttonLink,
  imgSrc,
  icon1,
  icon2,
}) => {
  return (
    <div className="grid grid-cols-2 items-center gap-[15px] bg-[#F5F5F5] rounded-[20px] px-[85px] py-[60px] mb-5">
      <div className="pr-2">
        <h2 className="title-icon relative text-[#202C2F] text-[30px] font-[700] ">
          {" "}
          {title}
        </h2>
        <p className="text-[#818181] text-lg mt-2 mb-[85px]">{description} </p>
        <Link href={buttonLink} className="button">
          Try Now{" "}
        </Link>
      </div>
      <div>
        <div className="pl-[70px] relative">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="Card img"
              className="rounded-[20px] w-full"
            />
          )}
          <div className="absolute top-[64px] right-[-46px] bg-white/10 rounded-full backdrop-blur-[19.30px] p-3">
            {icon1}
          </div>
          <div className="absolute bottom-[28px] left-[-12px] ">{icon2}</div>
          <p className="absolute right-[20px] top-[50px] ">
            <RightIcon />{" "}
          </p>
          <p className="absolute left-[100px] top-[40%] translate-y-[-40%] ">
            <LeftIcon />{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
