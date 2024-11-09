"use client"
import { headerItems, userInfo } from '@/Constants/Constant'
import Image from 'next/image'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Intro = () => {
  return (
    <section
      id={headerItems.home.page}
      className="min-h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start px-4"
    >
      <div className="mt-20 md:mt-0">
        <Image
          src={userInfo.pictures}
          alt=""
          width={300}
          height={300}
          className="rounded-full shadow-2xl"
        />
      </div>
      <div className="md:ml-20 sm:ml-12 md:w-1/2">
        <h1 className="text-7xl uppercase hidden md:block">Frontend Developer</h1>
        <h1 className="text-2xl mt-5 md:text-3xl">
          Hi,I&#39;m <span className="text-red-600 text-3xl md:text-4xl">Ubaid Alam</span>
        </h1>
        <p className="mt-4 mb-4" dangerouslySetInnerHTML={{ __html: userInfo.heading }} />
        <ScrollLink
          to={headerItems.projects.page}
          className="bg-teal-600 rounded text-neutral-100 flex w-28 h-10 m-auto items-center justify-center md:m-0 cursor-pointer"
          spy={true}
          smooth={true}
        >
          Projects
        </ScrollLink>
      </div>
    </section>
  )
}

export default Intro
