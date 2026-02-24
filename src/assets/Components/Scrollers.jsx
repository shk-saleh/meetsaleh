import React from 'react'
import { motion } from 'framer-motion'
import Marquee from "react-fast-marquee";
import { Sparkle } from "lucide-react";

const Scrollers = () => {
    const services = [
        "Landing Pages", "SAAS Solutions", "SPA's", "UI/UX Design",
        "Figma", "MERN Stack App", "React App", "CMS", 
        "Wordpress", "Woo-Commerce"
    ];

    return (
        <motion.div 
            className='relative pb-10 bg-zinc-900 rounded-xl mx-20 mt-30'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            {/* First Marquee */} 
            <div className='w-full flex items-center p-2 rounded-3xl opacity-5 -mb-26'>
                <Marquee speed={50} className='flex flex-row w-full text-white text-lg'>
                    <div className="inline-flex items-center">
                        {services.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <Sparkle className="text-(--primary-color) w-10 h-10 fill-(--primary-color)" />
                                <span className=' pe-5 text-(--primary-color) text-9xl'>{item}</span>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            <div className='w-full flex items-center p-2 rounded-3xl opacity-80'>
                <Marquee speed={50} direction="right" className='flex flex-row w-full text-white text-lg'>
                    <div className="inline-flex items-center">
                        {services.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3">
                                <Sparkle className="text-(--primary-color) w-10 h-10 fill-(--primary-color)" />
                                <span className=' pe-5 text-(--primary-color) text-6xl'>{item}</span>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </motion.div>
    )
}

export default Scrollers
