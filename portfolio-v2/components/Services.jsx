import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

      {/* Heading & Subheading */}
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-outfit'>What I Offer
      </motion.h4>

      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className={`text-center text-5xl font-roboto ${isDarkMode ? "text-[#9CD5FF]" : "text-[#355872]"}`}>My Services
      </motion.h2>

      {/* Description */}
      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-outfit'>
          I am a bla bla bla bla bla lba ka nkn j jkb kjb k b bh bh b b jkn jkb n
          I am a bla bla bla bla bla lba ka nkn j jkb kjb k b bh bh b b jkn jkb n
          I am a bla bla bla bla bla lba ka nkn j jkb kjb k b bh bh b b jkn jkb n
      </motion.p>

      {/* Services Cards */}
      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
        className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            
            <motion.div
              whileHover={{scale: 1.02}}
              key={index} className={`border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? "hover:bg-(--color-darkHover) hover:shadow-(--box-shadow-light)" : "hover:bg-(--color-lightHover) hover:shadow-(--box-shadow-black)"}`}>
                <Image src={icon} alt={title} className='w-10' />
                <h3 className={`text-lg my-4 ${isDarkMode ? "text-white" : "text-gray-700"}`}>{title}</h3>
                <p className={`text-sm leading-5 ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>{description}</p>
                <a href={link} className='flex items-center gap-2 mt-5 text-sm'>
                    Read More <Image src={assets.right_arrow} alt='' className='w-4' />
                </a>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
