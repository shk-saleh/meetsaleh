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
import InteractiveBackground from '../Components/InteractiveBackground'



const Home = () => {
  return (
    <div className='flex flex-col w-[100%] min-h-[100vh]'>
      {/* <div className="absolute bottom-0 left-0 right-0 top-0 h-[700px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
        {/* Interactive Background */}
        <Header/>
        <Main/>
        <Navbar/>
        <Scrollers/>
        <Services/>
        {/* <Testimonial/> */}
        <CTA/>
        <Footer/>
        <InteractiveBackground />
    </div>
  )
}

export default Home