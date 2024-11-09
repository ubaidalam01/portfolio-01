"use client"
import { NavItems } from '@/app/models/Header'
import { userInfo, headerItems } from '@/Constants/Constant'
import { IoMenu } from "react-icons/io5";
import React, { useState } from 'react'
import {Link as ScrollLink} from 'react-scroll'

const Header = () => {
  const [navItems, showNavItems] = useState<boolean>(false);

  return (
    <header className='bg-[#25141f] p-6 justify-between fixed top-0 w-full z-10 md:flex'>
        <div className='flex justify-between'>
            <h2 className='text-2xl font-bold'>{userInfo.name}</h2>
            <IoMenu 
            size={30}
            className='md:hidden'
            onClick={()=> showNavItems(prevState => !prevState)}  />
        </div>
        <div className={`mr-8 md:space-x-6  md:block ${navItems ? 'block' : 'hidden'}`}>
            {
              Object.keys(headerItems).map(item => (
                <ScrollLink 
                    to={headerItems[item as keyof NavItems].page} 
                    key={headerItems[item as keyof NavItems].label}
                    className="block md:inline-block cursor-pointer"
                    spy={true}
                    smooth={true}
                >
                    {headerItems[item as keyof NavItems].label}
                </ScrollLink>
            ))
            }
        </div>
    </header>
  )
}

export default Header
