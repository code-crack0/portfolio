

import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {AnimatePresence,motion} from 'framer-motion'
import { IoMdDownload } from "react-icons/io";


export default function Header() {
  const handleDownloadClick = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set its href attribute to the path of the PDF file in the public folder
    link.href = '/resume.pdf';
    // Set the download attribute to force download
    link.setAttribute('download', 'your-pdf-file.pdf');
    // Append the link to the document body
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Clean up by removing the link from the document body
    document.body.removeChild(link);
  };
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div initial={{x:-500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}}className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon target='_blank' url='https://www.github.com/code-crack0' fgColor='gray' bgColor='transparent'/>
        <SocialIcon target='_blank' url='https://www.linkedin.com/in/samadsayed' fgColor='gray' bgColor='transparent'/>
      </motion.div>
      <motion.div initial={{x:500,opacity:0,scale:0.5}} animate={{x:0,opacity:1,scale:1}} transition={{duration:1.5}} className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <button onClick={handleDownloadClick} data-tooltip-target="tooltip-default" type="button" className="text-white bg-grey-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><IoMdDownload/></button>
      
        <a href='#contact'>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </a>
      </motion.div>

    </header>
  )
}