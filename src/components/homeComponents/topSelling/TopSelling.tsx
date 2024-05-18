import React from 'react'
import Container from '../Container'
import Card from './Card'
import { topSelling } from '@/lib/data'
import Headings from '../Headings'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; 

export default function TopSelling() {
  return (
    <Container>
        <div className='relative'>
            <Headings heading={"Top Selling Products"}/>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-items-center">
      {topSelling.map((design, index) => (
        <Card
          key={index}
          imgUrl={design.imgUrl}
          title={design.title}
          content={design.content}
          reviews={design.reviews}
          price={design.price}
          sold={design.sold}
        />
      ))}
    </div>
    <div className='flex absolute top-5 right-0 font-bold text-2xl text-gray-500'>
    <MdKeyboardArrowLeft />
    <MdKeyboardArrowRight/>
    </div>
        </div>
        
    </Container>
  )
}
