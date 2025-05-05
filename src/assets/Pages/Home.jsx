import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Header from '../Components/Header'
import Scrollers from '../Components/Scrollers'
import Parallex from '../Components/Parallex'
import ChooseUs from '../Components/ChooseUs'
import Testimonial from '../Components/Testimonial'
import CTA from '../Components/CTA'


const Home = () => {
  return (
    <div className='font-body flex flex-col w-[100%] min-h-[100vh] pt-10'>
        <Header/>
        <Main/>
        <Navbar/>
        <Scrollers/>
        <Parallex/>
        <ChooseUs/>
        <Testimonial/>
        <CTA/>
    </div>
  )
}

export default Home