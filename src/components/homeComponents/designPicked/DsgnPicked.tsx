import React from 'react'
import Container from '../Container'
import Card from './Card'
import { designs } from '@/lib/data'
import Headings from '../Headings'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";  

export default function DesignPicked() {
  return (
    <Container>
        <div className='relative'>
            <Headings heading={"Design Picked for You"}/>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-items-center">
      {designs.map((design, index) => (
        <Card
          key={index}
          imageUrl={design.imageUrl}
          title={design.title}
          author={design.author}
          ratio={design.ratio}
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
