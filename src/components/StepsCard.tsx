import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface StepsCardProps {
    title: string;
    description: string;
    imgSrc?: string | StaticImageData;
}
const StepsCard: React.FC<StepsCardProps> = ({title, description, imgSrc}) => {
    return (
        <div className='pt-5 md:pt-[35px] rounded-[20px] bg-[#FCF1E9] px-[15px] lg:px-[35px]'>
      <div className='px-[0px] mb-[26px] md:px-[33px]'>
      <h2 className="text-[22px] font-[700] text-[#202C2F] mb-2 md:text-[30px] ">{title} </h2>
      <p className="text-[#202020] text-[16px] md:text-lg opacity-70 ">{description} </p>
      </div>
            {imgSrc && (
            <Image
              src={imgSrc}
              alt="Card img"
              className=" rounded-t-[20px] w-full"
            />
          )}
        </div>
    );
}

export default StepsCard;
