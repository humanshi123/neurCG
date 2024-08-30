import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { RightIcon, LeftIcon, PlayIcon } from "@/utils/svgicons";
import lang1 from "../assets/images/lang1.png"
import lang2 from "../assets/images/lang2.png"
import lang3 from "../assets/images/lang3.png"
import lang4 from "../assets/images/lang4.png"
import lang5 from "../assets/images/lang5.png"
import LanguageCard from "./LanguageCard";

const langData =[
  {
    id: 1,
    image: lang1,
  },
  {
    id: 2,
    image: lang2,
  },
  {
    id: 3,
    image: lang3,
  },
  {
    id: 4,
    image: lang4,
  },
  {
    id: 5,
    image: lang5,
  },
]
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
<div id={id} className="card-wrapper md:sticky md:!top-[100px]">
<div id={id} className="py-[30px] bg-[#F5F5F5] rounded-[20px] pr-[20px] pl-[20px] md:px-[60px] md:py-[60px] mb-5 lg:px-[85px]">
     <div className="grid grid-cols-1 items-center gap-[15px] pt-[53px]  md:grid-cols-2 ">
      <div className="pr-2 pl-[40px] pb-[20px] md:pl-0 md:pb-0">
        <h2 className="title-icon relative text-[#202C2F] text-[22px] font-[700] md:text-[30px]">
          {" "}
          {title}
        </h2>
        <p className="text-[#818181] text-[16px] mt-2 mb-[20px] md:mb-[85px] md:text-lg">{description} </p>
        <div>
        <Link href={buttonLink} className="custom-button button md:min-w-[146px] ">
          Try Now{" "}
        </Link>
        </div>
      </div>
      <div className=" md:pl-[70px]">
        <div className="iamge-shadow relative z-[2] ">
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
          <div className="hidden md:block  absolute bottom-[28px] left-[-78px] ">{icon2}</div>
          <p className="hidden md:block  absolute right-[20px] top-[50px] ">
            <RightIcon />{" "}
          </p>
          <p className="hidden md:block  absolute left-[19px] top-[40%] translate-y-[-40%] ">
            <LeftIcon />{" "}
          </p>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "><PlayIcon /> </p>
        </div>
      </div>

    </div>
    <div className="language-imges grid grid-cols-2 md:flex mt-[30px] md:mt-[60px] gap-3 md:gap-[22px]">
    {langData.map((data)=>(
    <LanguageCard 
    key={data.id}
    image={data.image}/>
    ))}
    </div>
   </div>
</div>
  );
};

export default ProductDesc;
