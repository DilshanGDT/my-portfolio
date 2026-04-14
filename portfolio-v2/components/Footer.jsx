import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6' />
            tharakadilshan506@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2026 Tharaka Dilshan. All rights reserved.</p>
        <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
            <li><a href="https://www.linkedin.com/in/tharaka-dilshan" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://github.com/tharaka-dilshan" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.instagram.com/tharaka_dilshan/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
