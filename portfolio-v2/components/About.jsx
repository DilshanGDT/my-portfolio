import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({ isDarkMode }) => {
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='about' className='w-full px-[12%] py-10 scroll-mt-20'>

      {/* Heading & Subheading */}  
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-outfit'>Introduction
      </motion.h4>

      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='text-center text-5xl font-roboto'>About Me
      </motion.h2>

      <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>

        {/* Image */}
        <motion.div 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.6}}
          className='w-64 sm:w-80 rounded-3xl max-w-none'
        >
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
        </motion.div>

        {/* Info Section */}
        <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.8}}
          className='flex-1'
        >

            <p className='mb-10 max-w-2xl font-outfit'>I am a bla bla bla bla bla lba ka nkn j jkb kjb k b bh bh b b jkn jkb n
                I am a bla bla bla bla bla lba ka nkn j jkb kjb k b bh bh b b jkn jkb n
                I am a bla bla bla bla bla lba ka nkn j jkb kjb k b bh bh b b jkn jkb n
            </p>

            {/* Info Cards */}
            <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 0.8, delay: 1}}
              className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index)=>(

                    <motion.li 
                      whileInView={{scale: 1.05}}
                      className={`border-[0.5px] rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500 ${isDarkMode ? "border-white hover:shadow-(--box-shadow-light) hover:bg-(--color-darkHover)/50" : "border-gray-400 hover:bg-(--color-lightHover) hover:shadow-(--box-shadow-black)"}`} key={index}>
                        <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                        <h3 className={`my-4 font-semibold ${isDarkMode ? "text-white" : "text-gray-700"}`}>{title}</h3>
                        <p className={`text-sm ${isDarkMode ? "text-white/80" : "text-gray-600"}`}>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>

            <motion.h4 
              initial={{y: 20, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1.3, delay: 0.5}}
              className={`my-6 font-font-outfit ${isDarkMode ? "text-white/80" : "text-gray-700"}`}>
                Tools I use
            </motion.h4>

            {/* Tools List */}
            <motion.ul 
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 1.5, delay: 0.6}}
              className='flex items-center gap-3 sm:gap-5'>
                {toolsData.map((tool, index)=>(

                    <motion.li 
                      whileHover={{scale: 1.02}}
                      key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursorpointer hover:-translate-y-1 duration-500'>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                        <span className='font-outfit'>{tool.name}</span>
                    </motion.li>
                ))}
            </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
