import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Header() {
  return (
    <div>
      {/* header */}
        <div className='flex justify-between items-center w-full'>
          {/* Logo */}
        <Logo></Logo>
        {/* Search Button */}
        <div>
        <Input></Input>
        </div>
        {/* Create design btn  */}
        <div>
          <Button> Create design</Button>
        </div>
        </div>

        {/* Menu */}
        <div></div>
    </div>
  )
}
