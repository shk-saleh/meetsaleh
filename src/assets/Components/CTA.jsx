import React from 'react'

const CTA = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center min-h-[60vh] h-auto w-full bg-white/8 my-20 py-10 px-50 relative" >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div>
        <h1 className='text-5xl text-white text-center'>Ready to collaborate or need a custom solution?</h1>
        <button className='main-button flex'>Let's Collaborate</button>
    </div>
  )
}

export default CTA