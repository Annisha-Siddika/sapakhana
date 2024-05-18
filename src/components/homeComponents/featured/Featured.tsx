import React from 'react'
import Container from '../Container'
import Headings from '../Headings'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Featured() {
  return (
    <Container>
        <div className='relative'>
            <Headings heading={'Featured Brands'}/>
            <div className='flex absolute top-5 right-0 font-bold text-2xl text-gray-500'>
    <MdKeyboardArrowLeft/>
    <MdKeyboardArrowRight/>
    </div>
        </div>
        
    </Container>
  )
}
