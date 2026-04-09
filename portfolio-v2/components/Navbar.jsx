import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='' className='w-full h-full' />
    </div>

      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href='#top'> 
            <Image src={assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opaciy-50'>
            <li><a className='font-roboto' href='#top'>Home</a></li>
            <li><a className='font-roboto' href='#about'>About Me</a></li>
            <li><a className='font-roboto' href='#services'>Services</a></li>
            <li><a className='font-roboto' href='#work'>My Work</a></li>
            <li><a className='font-roboto' href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

            <button>
                <Image src={assets.moon_icon} alt='' className='w-5' />
            </button>

            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>
                Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
            </a>

            
        </div>
      </nav>
    </>
  )
}

export default Navbar
