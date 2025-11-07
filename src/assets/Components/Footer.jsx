import React from 'react'

const Footer = () => {
  return (
    <div className="relative flex flex-col gap-5 items-center justify-center w-full pt-10 pb-50 md:pb-70 z-1" >
        <h2 className='text-5xl mb-4 md:text-9xl absolute bottom-30 text-transparent bg-clip-text bg-gradient-to-b from-25% from-[var(--fade-color)] to-[var(--primary-color)] to-90% opacity-15'>Muhammad Saleh</h2>
        <span className='text-md md:text-lg absolute bottom-25 opacity-15'>&copy; copyright reversed 2025 | Made with ❤️</span>
    </div>
  )
}

export default Footer