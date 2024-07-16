import React from 'react'
import { ModeToggle } from './theme-button'
import { Input } from './ui/input'

const Navbar = () => {
  return (
    <div className="flex  mt-4  items-center border-b mb-4 pb-2">
<div className="flex ml-auto gap-2">
<ModeToggle/>
<Input placeholder="Search for city" />
</div>
</div>
  )
}

export default Navbar