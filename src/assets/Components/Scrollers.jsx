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
            className='relative overflow-hidden'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            {/* First Marquee */}
            <div className='bg-white/5 w-full p-4 my-20 rotate-4'>
                <Marquee speed={60} className='flex flex-row w-full text-white text-lg'>
                    <div className="inline-flex items-center">
                        {services.map((item, index) => (
                            <div key={index} className="flex items-center space-x-1">
                                <Sparkle className="text-[var(--secondary-color)]" />
                                <span className='pe-5 text-[var(--primary-color)]'>{item}</span>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* Second Marquee */}
            <div className='bg-black w-full p-4 my-20 absolute top-0 z-1 -rotate-4'>
                <Marquee speed={60} direction="right" className='flex flex-row w-full text-white text-lg'>
                    <div className="inline-flex items-center">
                        {services.map((item, index) => (
                            <div key={`reverse-${index}`} className="flex items-center space-x-1">
                                <Sparkle className="text-[var(--secondary-color)]" />
                                <span className='pe-5 text-[var(--primary-color)]'>{item}</span>
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </motion.div>
    )
}

export default Scrollers
