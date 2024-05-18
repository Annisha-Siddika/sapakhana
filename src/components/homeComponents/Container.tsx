import React from 'react'

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='max-w-[1920px] mx-auto px-10 lg:px-20 2xl:px-40'>
      {children}
    </div>
  )
}
