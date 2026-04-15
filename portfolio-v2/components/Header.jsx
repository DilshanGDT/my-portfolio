import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = ({ isDarkMode }) => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <div>
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </div>
      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-outfit    '>Hi! I'm Tharaka Dilshan 
            <Image src={assets.hand_icon} alt='' className='w-5' />
      </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-roboto'>Full Stack Web Developer in Sri Lanka</h1>
      <p className='max-w-2xl mx-auto font-outfit'>
        I create responsive and user-friendly websites and applications using modern technologies.
      </p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href='#contact' className={`px-10 py-3 border border-white rounded-full text-white flex items-center gap-2 ${isDarkMode ? "bg-transparent" : "bg-black"}`}>Contact Me
          <Image className='w-4' src={assets.right_arrow_white} alt='Contact' />
        </a>

        <a href='/sample-resume' download className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white ${isDarkMode ? "text-black" : ""}`}>My Resume
          <Image className='w-4' src={assets.download_icon} alt='Contact' />
        </a>
      </div>
    </div>
  )
}

export default Header
