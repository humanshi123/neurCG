import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface StepsCardProps {
    title: string;
    description: string;
    imgSrc?: string | StaticImageData;
}
const StepsCard: React.FC<StepsCardProps> = ({title, description, imgSrc}) => {
    return (
        <div className='pt-[35px] rounded-[20px] bg-[#FCF1E9] px-[35px] '>
      <div className='px-[33px] mb-[26px]'>
      <h2 className="text-[30px] font-[700] text-[#202C2F] mb-2 ">{title} </h2>
      <p className="text-[#202020] text-lg  ">{description} </p>
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
