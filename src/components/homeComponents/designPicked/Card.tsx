import { HeartIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  author: string;
  ratio: number;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, author, ratio }) => {
  return (
    <div className="w-full rounded-2xl overflow-hidden relative border-2 border-[#A4A4A4] hover:shadow-xl shadow-gray-600">
        <div className='flex justify-center items-center pt-4 pb-2'>
            <Image className="w-60 2xl:w-80 2xl:h-80 h-60 rounded-full" width={268} height={268} src={imageUrl} alt={title} />
        </div>
      
      <div className="px-4 py-2 bg-gray-100 text-center font-semibold">
        <div className="text-lg mb-2">{title}</div>
        <p className='text-sm'>By <span className='text-gray-500'> {author} </span></p>
        <p className='text-sm'>{ratio} Products</p>
      </div>
      <div className="absolute top-4 right-4 text-gray-700">
        <HeartIcon className="w-6 h-6"/>
      </div>
    </div>
  );
};

export default Card;
