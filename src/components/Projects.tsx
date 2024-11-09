import { headerItems } from '@/Constants/Constant'
import Image from 'next/image'
import React from 'react'
import { projects } from '@/Constants/Constant'

const Projects = () => {
  return (
    <section 
            id={headerItems.projects.page} 
            className="flex flex-col text-center justify-center items-center my-40"
        >
            <h1 className={"text-6xl my-6"}>Projects</h1>
            <div className="flex break-words flex-wrap text-center justify-center items-center">
            {
             Object.keys(projects).map((project) => (
            <Image 
              key={project} 
              src={projects[project as keyof typeof projects].image} 
              alt=""  
              width={200}
              height={200}
              className="mt-4 md:m-1 cursor-pointer"
            />
          ))
        }
            </div>
        </section>
  )
}

export default Projects
