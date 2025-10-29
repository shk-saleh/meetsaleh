import React from 'react'
import { Facebook, Instagram, Linkedin, Github, SendHorizontal } from "lucide-react";


const ContactForm = () => {
  return (
    <section className="max-w-6xl mx-auto text-gray-200 py-18">
        {/* <div className="border-b border-[var(--fade-color)]">
            <h2 className="text-4xl font-medium mb-10">
            <span className="text-[var(--secondary-color)]">— </span>
                Contact Me
            </h2>
        </div> */}

        <div className='flex items-start justify-between gap-10 py-10'>
            <div className='w-3/4'>
                <h2 className='text-5xl text-gray-400'><span className='text-(--primary-color)'> Lets's create </span> something <br/> remarkable together!</h2>
                <form className="flex flex-col gap-6 mt-10">
                    <div className="flex flex-col md:flex-row gap-6">
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"/>
                        <input type="email" placeholder="Your Email" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"/>
                    </div>
                    <input type="text" placeholder="Subject" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"/>
                    <textarea rows="6" placeholder="Your Message" className="w-full p-4 bg-[var(--input-bg)] border border-[var(--fade-color)] rounded-md text-gray-200 focus:outline-none focus:border-[var(--secondary-color)] transition"></textarea>
                    <button type="submit" className="flex w-70 justify-center items-center gap-6 px-6 py-3 bg-(--secondary-color)/20  border border-(--secondary-color) cursor-pointer text-(--primary-color) font-medium rounded-md hover
                        transition">Send Message <SendHorizontal /> </button>
                </form>
            </div>
            <div>
                <p className="text-gray-400 mb-2 max-w-2xl">I'm available for freelance work and collaborations — feel free to reach out.</p>
                <p className="text-gray-400 mb-2 max-w-2xl">Have an idea or a project? Describe it briefly and I'll get back to you within 2 business days.</p>
                <p className="text-gray-400 max-w-2xl">Prefer email? Use the form or message me directly at <span className='text-(--primary-color)'>salehshazli786@gmail.com</span></p>
                <span className="text-gray-400 max-w-2xl py-20">Local Time: Islamabad Pakistan </span>
                <div className='flex gap-4 my-10'>
                    <Instagram className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>
                    <Linkedin className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer' />
                    <Github className='hover:text-[var(--secondary-color)] transition ease-linear cursor-pointer'/>     
                </div>
            </div>
        </div>

    </section>
  )
}

export default ContactForm