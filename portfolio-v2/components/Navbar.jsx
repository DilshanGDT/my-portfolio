import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'

const Navbar = ({ isDarkMode, setIsDarkMode }) => {

  const [isScrolled, setIsScrolled] = useState(false);

  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  };

  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScrolled(true);
      } else{
        setIsScrolled(false);
      }
    })
  }, [])

  return (
    <>
    <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] ${isDarkMode ? "hidden" : ""}`}>
        <Image src={assets.header_bg_color} alt='' className='w-full h-full' loading="eager" />
    </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScrolled ? (isDarkMode ? "bg-(--color-darkTheme) shadow-[0_1px_8px_rgba(255,255,255,0.2)]" : "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm") : ""}`}>
        <a href='#top'> 
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 cursor-pointer mr-14' />
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScrolled ? "" : isDarkMode ? "border border-white/50 bg-transparent text-white" : "bg-white shadow-sm bg-opacity-50 text-gray-800"}`}>
            <li><a className='font-roboto' href='#top'>Home</a></li>
            <li><a className='font-roboto' href='#about'>About Me</a></li>
            <li><a className='font-roboto' href='#services'>Services</a></li>
            <li><a className='font-roboto' href='#work'>My Work</a></li>
            <li><a className='font-roboto' href='#contact'>Contact Me</a></li>
        </ul>

        <div className='flex items-center gap-4'>

            <button onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-5' />
            </button>

            <motion.a 
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              href='#contact' className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 ${isDarkMode ? "border-white/50" : "border-gray-500"}`}>
                Contact 
                  <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' />
            </motion.a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-5' />
            </button>
        </div>

        {/* Mobile Menu */}

        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transition duration-500 ${isDarkMode ? "bg-(--color-darkHover) text-white" : "bg-rose-50"}`}>

          <div className='absolute top-5 right-5' onClick={closeMenu}>
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

            <li><a className='font-roboto' onClick={closeMenu} href='#top'>Home</a></li>
            <li><a className='font-roboto' onClick={closeMenu} href='#about'>About Me</a></li>
            <li><a className='font-roboto' onClick={closeMenu} href='#services'>Services</a></li>
            <li><a className='font-roboto' onClick={closeMenu} href='#work'>My Work</a></li>
            <li><a className='font-roboto' onClick={closeMenu} href='#contact'>Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
