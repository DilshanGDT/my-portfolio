import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      
      {/* Profile Image */}
      <motion.div
        initial={{scale: 0}}
        whileInView={{scale: 1}}
        transition={{duration: 0.8, type: "spring", stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </motion.div>

      {/* Heading and Subheading */}
      <motion.h3 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-outfit'>
          Hi! I'm Tharaka Dilshan 
            <Image src={assets.hand_icon} alt='' className='w-5' />
      </motion.h3>

      <motion.h1 
        initial={{y: -30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.5}}
        className='text-3xl sm:text-6xl lg:text-[66px] font-roboto'>
          Full Stack Web Developer in Sri Lanka
      </motion.h1>
      
      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='max-w-2xl mx-auto font-outfit'>
        I create responsive and user-friendly websites and applications using modern technologies.
      </motion.p>

      {/* Header Action Buttons */}
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        
        {/* Contact Me Button */}
        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1}}
          href='#contact' className={`px-10 py-3 border border-white rounded-full text-white flex items-center gap-2 ${isDarkMode ? "bg-transparent" : "bg-black"}`}>
            Contact Me
              <Image className='w-4' src={assets.right_arrow_white} alt='Contact' />
        </motion.a>

        {/* Download Resume Button */}
        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6, delay: 1.2}}
          href='/sample-resume' download className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white ${isDarkMode ? "text-black" : ""}`}>
            My Resume
              <Image className='w-4' src={assets.download_icon} alt='Contact' />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
