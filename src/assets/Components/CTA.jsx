import React from 'react'


const CTA = () => {
  return (
    <div className='flex items-center w-full justify-center'>
      <div className="flex flex-col gap-5 items-center justify-center h-80 md:h-90 mx-6 md:mx-0 w-full md:w-3/4 mt-10 px-10 md:px-30 relative bg-black rounded-2xl" >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
          </div>
          <h1 className='text-3xl md:text-5xl text-white text-center'>Ready to collaborate or need a custom solution?</h1>
          <button class="main-button">
            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
            <span class="text">Let's Talk</span>
            <span class="circle"></span>
            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
            </svg>
          </button>
      </div>
    </div>
  )
} 

export default CTA