import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RightIcon, LeftIcon } from "@/utils/svgicons";

interface CardProps {
  id: string;
  title: string;
  description: string;
  buttonLink: string;
  imgSrc?: string | StaticImageData;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
}

const ProductDesc: React.FC<CardProps> = ({
  id,
  title,
  description,
  buttonLink,
  imgSrc,
  icon1,
  icon2,
}) => {
  return (
   <div id={id} className="card-wrapper !pt-[0px] md:sticky md:!top-[100px]">
     <div className="grid grid-cols-1 items-center gap-[15px] bg-[#F5F5F5] rounded-[20px] py-[30px] pr-[20px] pl-[20px] md:px-[60px] md:py-[60px] mb-5 md:grid-cols-2 lg:px-[85px]">
      <div className="pr-2 pl-[40px] pb-[20px] md:pl-0 md:pb-0">
        <h2 className="title-icon relative text-[#202C2F] text-[22px] font-[700] md:text-[30px]">
          {" "}
          {title}
        </h2>
        <p className="text-[#818181] text-[16px] mt-2 mb-[35px] md:mb-[85px] md:text-lg">{description} </p>
        <Link href={buttonLink} className="button">
          Try Now{" "}
        </Link>
      </div>
      <div>
        <div className=" relative md:pl-[70px]">
          {imgSrc && (
            <Image
              src={imgSrc}
              alt="Card img"
              className="rounded-[20px] w-full"
            />
          )}
          <div className="hidden md:block absolute top-[64px] right-[-46px] bg-white/10 rounded-full backdrop-blur-[19.30px] p-3">
            {icon1}
          </div>
          <div className="hidden md:block  absolute bottom-[28px] left-[-12px] ">{icon2}</div>
          <p className="hidden md:block  absolute right-[20px] top-[50px] ">
            <RightIcon />{" "}
          </p>
          <p className="hidden md:block  absolute left-[100px] top-[40%] translate-y-[-40%] ">
            <LeftIcon />{" "}
          </p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ProductDesc;
