import React from 'react'
import Aurora from '../Components/ReactBits/Aurora';
import Header from './Header';
import Main from './Main';
import Scrollers from './Scrollers';

const Hero = () => {
  return (
    <div>
      <Aurora colorStops={["#ff964c","#f67e2a","#ff964c"]} blend={0.5} amplitude={1.0} speed={1}/>
      <Main/>
    </div>
  )
}

export default Hero