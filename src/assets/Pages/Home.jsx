import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Header from '../Components/Header'
import Scrollers from '../Components/Scrollers'
import ChooseUs from '../Components/ChooseUs'
import Testimonial from '../Components/Testimonial'
import CTA from '../Components/CTA'
import Footer from '../Components/Footer'
import Services from '../Components/Services'


const Home = () => {
  return (
    <div className='font-body flex flex-col w-[100%] min-h-[100vh] pt-10'>
        <Header/>
        <Main/>
        <Navbar/>
        <Scrollers/>
        <Services/>
        <Testimonial/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Home