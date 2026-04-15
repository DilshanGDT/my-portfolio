import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = ({ isDarkMode }) => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bdc4bddf-138b-4e24-94e5-67d76f1d238a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className={`w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-size-[90%_auto] ${isDarkMode ? "bg-none" : 'bg-[url("/footer-bg-color.png")]'}`}>
      <h4 className='text-center mb-2 text-lg font-outfit'>Connect with me</h4>
      <h2 className='text-center text-5xl font-roboto'>Get In Touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-outfit'>I would love to hear from you! If you have any questions, comments or feedback, please use the form below to get in touch with me. Thank you for visiting my portfolio. 
      </p>

      <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
            <input name='name' type='text' placeholder='Enter your Name' required className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? "border-white/90 bg-(--color-darkHover)/30 text-white placeholder:text-white/70" : "border-gray-400 bg-white text-gray-900 placeholder:text-gray-500"}`} />
            <input name='email' type='email' placeholder='Enter your Email' required className={`flex-1 p-3 outline-none border-[0.5px] rounded-md ${isDarkMode ? "border-white/90 bg-(--color-darkHover)/30 text-white placeholder:text-white/70" : "border-gray-400 bg-white text-gray-900 placeholder:text-gray-500"}`} />
        </div>
        <textarea name='message' rows='6' placeholder='Enter your Message' required className={`w-full p-4 outline-none border-[0.5px] rounded-md mb-6 ${isDarkMode ? "border-white/90 bg-(--color-darkHover)/30 text-white placeholder:text-white/70" : "border-gray-400 bg-white text-gray-900 placeholder:text-gray-500"}`}></textarea>
        <button type='submit' className={`py-3 px-8 w-max flex items-center justify-between gap-2 text-white rounded-full mx-auto duration-500 ${isDarkMode ? "bg-transparent border-[0.5px] hover:bg-(--color-darkHover)" : "bg-black/80 hover:bg-black"}`}>
            Send Message <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
