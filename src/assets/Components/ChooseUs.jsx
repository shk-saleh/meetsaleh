import React from 'react'
import { Rocket, SearchCode, Handshake } from "lucide-react";


const ChooseUs = () => {

    return (
        <div className='pt-22 px-28'>
            <h1 className='text-4xl text-(--primary-color) font-bold text-center'>Why to Choose <span className='text-[var(--secondary-color)] font-bold'>me ?</span></h1>
            <div className='flex flex-row w-full pt-20 pb-10 justify-center gap-6 items-center'>
                <div className='flex flex-col items-center border border-gray-500 bg-white/5 rounded-2xl p-8 text-center'>
                    <Rocket className='w-16 h-16 my-10 text-[var(--secondary-color)] text-center stroke-1' />
                    <h3 className='text-2xl font-semibold text-[var(--primary-color)] mb-4'>Clean & Scalable Code</h3>
                    <p className='text-md text-[var(--subtext-color)] font-light'>I follow modern coding standards with best practices to ensure your website is clean, optimized, and scalable. Whether it's a small landing page or a full-fledged web app, I write code that's easy to maintain and extend.</p>
                </div>
                <div className='flex flex-col items-center border border-gray-500 bg-white/5 rounded-2xl p-8 text-center'>
                    <SearchCode className='w-16 h-16 my-10 text-[var(--secondary-color)] text-center stroke-1' />
                    <h3 className='text-2xl font-semibold text-[var(--primary-color)] mb-4'>Transparent Workflow</h3>
                    <p className='text-md text-[var(--subtext-color)] font-light'>From project kickoff to delivery, I maintain clear communication and complete transparency. You’ll always be updated about the progress, timelines, and any changes—no surprises, just results.</p>
                </div>
                <div className='flex flex-col items-center border border-gray-500 bg-white/5 rounded-2xl p-8 text-center'>
                    <Handshake className='w-16 h-16 my-10 text-[var(--secondary-color)] text-center stroke-1' />
                    <h3 className='text-2xl font-semibold text-[var(--primary-color)] mb-4'>Ongoing Support</h3>
                    <p className='text-md text-[var(--subtext-color)] font-light'>My work doesn’t end at delivery. I offer continuous post-launch support, bug fixes, and improvements. Whether you need minor tweaks or regular updates, I’m here to help your website grow with your business.</p>
                </div>  
            </div>  
        </div>
    )
}

export default ChooseUs