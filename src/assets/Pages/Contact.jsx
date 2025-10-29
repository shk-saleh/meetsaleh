import React from 'react'
import Footer from '../Components/Footer'
import CTA from '../Components/CTA'
import ContactForm from '../Components/ContactForm'


const Contact = () => {
  return (
    <div className='font-body flex flex-col w-[100%] min-h-[100vh] pt-4'>
        <ContactForm/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Contact