import { HeartIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import React from 'react'
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import type { ItemStyles } from '@smastrom/react-rating'

const Star = (
  <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
)

const myStyles: ItemStyles = {
  itemShapes: Star,
  activeFillColor: '#DBD000',
  inactiveFillColor: '#F6F6F6'
}

interface CardProps {
    imgUrl: string;
    title: string;
    content: string;
    reviews: number;
    price: number;
    sold: number;
  }

  const Card: React.FC<CardProps> = ({ imgUrl, title, content, reviews, price, sold }) => {
  return (
    <div className='bg-gray-100 p-3 rounded-lg w-full h-full'>
        <div className='flex justify-center items-center pb-2 relative'>
            <Image className="w-72 2xl:w-96 h-44 2xl:h-52 rounded-lg" width={500} height={300} src={imgUrl} alt={title} />
            <div className="absolute top-3 right-3 text-gray-800">
        <HeartIcon className="w-5 h-5"/>
      </div>
        </div>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <div className='flex justify-between items-center text-sm'>
            <div> <Rating
            style={{ maxWidth: 100 }}
            itemStyles={myStyles}
            value={reviews}
            readOnly/><span className='text-gray-600 font-semibold'>Review</span> </div>
            <div className='text-end text-gray-400'><span className='text-black text-lg font-semibold'> {sold.toLocaleString()}</span> <br />Sold Total</div>
        </div>
        <p className='w-full text-gray-500'>{content}</p>
        <div className='flex justify-between items-center pt-4'>
            <div className='text-lg font-bold'>$ {price}</div>
            <div className='border-2 rounded-full border-gray-600 px-4 py-1 text-xs font-bold cursor-pointer'>Add To Cart </div>
        </div>

    </div>
  );
}
export default Card
