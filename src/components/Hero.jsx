

import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Hero() {
    const [text,count] = useTypewriter({
        words:["Hi My name is Samad",'Guy-who-loves-Coffee.tsx',"<ButLovesToCodeMore/>"],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img src='/samad.jpg' width={150} height={150} className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-500 p-2 mt-2 tracking-[15px]'>Software Engineer</h2>
          <h1 className='mt-2 text-4xl lg:text-5xl font-semibold px-10'>
              <span className='font-serif mr-3'>{text}</span>
              <Cursor cursorColor='#F7AB0A'/>
          </h1>
          <div className='pt-5'>
            <a href="#about">
            <button className="heroButton">About</button>
            </a>
            <a href="#experience">
            <button className="heroButton">Experience</button>
            </a>
            <a href="#skills">
            <button className="heroButton">Skills</button>
            </a>
            <a href="#projects">
            <button className="heroButton">Projects</button>
            </a>
          </div>
        </div>

    </div>
  )
}