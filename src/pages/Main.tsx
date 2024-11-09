import React from 'react'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

const Main = () => {
  return (
    <div className='lg:mx-32 md:mx-4'>
     <Intro/>
     <About/>
     <Projects />
     <Contact />
    </div>
  )
}

export default Main
