import React from 'react';
import Image, {StaticImageData} from 'next/image';

interface TeamCardProps {
    name: string;
    position: string;
    imageUrl: string | StaticImageData;
}
const TeamCard: React.FC<TeamCardProps> = ({name, position, imageUrl}) => {
    return (
        <div className='text-center mt-[50px] leading-[normal]'>
              <Image src={imageUrl} className="w-full object-cover"  alt="" /> 
              <p className='text-[#e56f20] text-[22px] font-extrabold mt-5  '>{name} </p>
            <p className='opacity-70 text-[#202020] text-lg mt-[10px]  '>{position} </p>
        </div>
    );
}

export default TeamCard;
