import React from 'react'
import { Facebook, Instagram, Linkedin, Github, SendHorizontal, Copy } from "lucide-react";


const ContactForm = () => {
  return (
    <section className="max-w-7xl mx-auto text-gray-200 py-0 md:py-18">

        <div className='flex items-start flex-col md:flex-row justify-between gap-10 md:gap-20 mx-6 md:mx-10 py-10'>
            <div className='w-full md:w-2/2'>
                <h2 className='text-3xl md:text-5xl text-gray-400 mb-10'><span className='text-(--primary-color)'> Lets's create </span> something <br/> remarkable together!</h2>      
                <p className="text-gray-400 mb-2 max-w-2xl">I'm available for freelance work and collaborations — feel free to reach out.</p>
                {/* <p className="text-gray-400 mb-2 max-w-2xl">Have an idea or a project? Describe it briefly and I'll get back to you within 2 business days.</p> */}
                <p className="text-gray-400 max-w-2xl py-6">Prefer email? Use the form or message me directly at <br/> <span className='flex items-center py-2 gap-2 text-(--primary-color)'>salehshazli786@gmail.com <Copy className='w-4 h-4 cursor-pointer' /></span> </p>
                <span className="text-gray-400 max-w-2xl py-20">Local Time <br/> UTC + 5 Islamabad, Pakistan. </span>
                <div className='flex gap-4 my-10'>
                    <Instagram className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
                    <Linkedin className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
                    <Github className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>     
                </div>
            </div>
            <div className='w-full'>
                <form className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-6">
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"/>
                        <input type="email" placeholder="Your Email" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"/>
                    </div>
                    <input type="text" placeholder="Subject" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"/>
                    <textarea rows="6" placeholder="Your Message" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"></textarea>
                    <button type="submit" className="flex w-70 justify-center items-center gap-6 px-6 py-3 bg-(--fade-color)/20  border border-gray-800 cursor-pointer text-(--primary-color) font-medium rounded-md hover
                        transition">Send Message <SendHorizontal /> </button>
                </form>
            </div>
        </div>

    </section>
  )
}

export default ContactForm