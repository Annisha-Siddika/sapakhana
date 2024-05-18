import React from 'react'


interface CardProps {
    name: string;
    title: string;
    testimonial: string;
    date: string;
  }
  const Card: React.FC<CardProps> = ({ name, title, testimonial, date }) => {
    return (
    <div className='bg-[#F2F2F2] px-4 w-64 pt-6 h-80 flex flex-col justify-between rounded-md'>
        <h1 className='text-2xl font-semibold'>{name}</h1>
        <h3 className='text-lg text-gray-700 font-bold py-2'>{title}</h3>
        <p className='text-lg text-gray-500'>{testimonial}</p>
        <div className='text-sm text-[#009FDB] py-4 font-semibold flex-end'>{date}</div>
    </div>
  )
}

export default Card;