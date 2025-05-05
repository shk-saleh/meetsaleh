import React from 'react'
import logo from '../Images/logo.svg'
import { Facebook,Instagram,Linkedin,Github  } from "lucide-react";

const Header = () => {
  return (
    <header className='w-full flex justify-between px-28'>
        <div>
            <img src={logo} alt="" width="50px" />
        </div>
        <div className='text-gray-300 flex gap-4 z-10'>
          <Facebook className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
          <Instagram className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
          <Linkedin className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
          <Github className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
        </div>
    </header>
  )
}

export default Header