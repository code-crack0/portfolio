

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {AnimatePresence,motion} from 'framer-motion'


export default function Header() {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div initial={{x:-500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}}className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon target='_blank' url='https://www.github.com/code-crack0' fgColor='gray' bgColor='transparent'/>
        <SocialIcon target='_blank' url='https://www.linkedin.com/in/samadsayed' fgColor='gray' bgColor='transparent'/>
      </motion.div>
      <motion.div initial={{x:500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}} className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <a href='#contact'>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </a>
      </motion.div>

    </header>
  )
}