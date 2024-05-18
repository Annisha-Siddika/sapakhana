import Link from 'next/link'
import React from 'react'

export default function Inspiration() {
  return (
    <div className='max-w-[1920px] bg-black text-white text-center py-8 my-8'>
        <h2 className='text-3xl font-bold pb-4'>Inspiration Beyond Boundaries</h2>
        <p className='text-[#BFBFBF] text-lg'>At <Link href="#" className='text-[#009FDB]'>{'sapakhana.com'}</Link> , we believe in the power of imagination. Our platform is not just <br /> a marketplace; it is a canvas where your ideas come to life. Whether you are a <br /> designer, a brand, or a customer seeking unique creations, we invite you to <br /> explore a world of endless possibilities.</p>
    </div>
  )
}
