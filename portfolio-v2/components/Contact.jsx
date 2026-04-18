import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'

const Contact = ({ isDarkMode }) => {

  const [toast, setToast] = useState(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (message, type) => {
    setToast({ message, type });
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 3200);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bdc4bddf-138b-4e24-94e5-67d76f1d238a");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        showToast("Form Submitted Successfully", "success");
        event.target.reset();
      } else {
        console.log("Error", data);
        showToast(data.message || "Failed to send message", "error");
      }
    } catch (error) {
      console.log("Error", error);
      showToast("Network error. Please try again.", "error");
    }
  };

  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-size-[90%_auto] ${isDarkMode ? "bg-none" : 'bg-[url("/footer-bg-color.png")]'}`}>
      
      {toast && (
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] px-5 py-3 rounded-lg text-white shadow-lg ${toast.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {toast.message}
        </motion.div>
      )}
      
      {/* Heading & Subheading */}
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        className='text-center mb-2 text-lg font-outfit'>
        Connect with me
      </motion.h4>

      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className={`text-center text-5xl font-roboto ${isDarkMode ? "text-[#9CD5FF]" : "text-[#355872]"}`}>Get In Touch</motion.h2>

      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-outfit'>
          I would love to hear from you! If you have any questions, comments or feedback, please use the form below to get in touch with me. Thank you for visiting my portfolio. 
      </motion.p>

      {/* Contact Form */}
      <motion.form 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.9}}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>

        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>

            <motion.input 
              initial={{opacity: 0, x: -50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: 1.1}}
              name='name' type='text' placeholder='Enter your Name' required className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? "border-white/90 bg-(--color-darkHover)/30 text-white placeholder:text-white/70" : "border-gray-400 bg-white text-gray-900 placeholder:text-gray-500"}`} />
            
            <motion.input 
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              transition={{duration: 0.6, delay: 1.2}}
              name='email' type='email' placeholder='Enter your Email' required className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? "border-white/90 bg-(--color-darkHover)/30 text-white placeholder:text-white/70" : "border-gray-400 bg-white text-gray-900 placeholder:text-gray-500"}`} />
        </div>

        <motion.textarea 
          initial={{opacity: 0, y: 100}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 1.3}}
          name='message' rows='6' placeholder='Enter your Message' required className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${isDarkMode ? "border-white/90 bg-(--color-darkHover)/30 text-white placeholder:text-white/70" : "border-gray-400 bg-white text-gray-900 placeholder:text-gray-500"}`}>
        </motion.textarea>
        
        {/* Send Button */}
        <motion.button 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          type='submit' className={`py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto duration-500 ${isDarkMode ? "bg-transparent border-[0.5px] hover:bg-(--color-darkHover)" : "bg-black/80 hover:bg-black"}`}>
            Send Message 
              <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.button>
      </motion.form>
    </motion.div>
  )
}

export default Contact
