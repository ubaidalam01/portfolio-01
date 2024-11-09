import { headerItems,userInfo } from '@/Constants/Constant'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section 
        id={headerItems.about.page}
        className='min-h-screen flex flex-col md:flex-row text-center justify-center items-center md:text-start mt-20'>

        <div className='m-4 md:ml-20 sm:ml-12 md:w-1/2'> 
            <h1 className='text-6xl'>About</h1>
            <h2 className='text-3xl my-4'>Get to know about me</h2>
            <p className="">
          {userInfo.about}
        </p>
          </div>
        <div className='flex flex-col justify-center items-center text-center'>
            <Image  
               src={userInfo.pictures} 
               alt="Profile Pic"     
               width={300}                
               height={300} 
               className='m-auto'   
            />
            <div className='mt-3'>
              {
                userInfo.skills.map(skill => (  
                  <span className='bg-gray-300 m-1 p-2 text-sm inline-block text-black break-words  '>{skill}</span>
                ))
              } 
            </div>
        </div>
    </section>
  )
}

export default About
