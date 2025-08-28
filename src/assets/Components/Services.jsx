import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

export default function Services() {
    const services = [
        {
            idx: '1',
            title: 'Web Development',
            desc: 'I build fully responsive and modern websites tailored to your business needs. Using clean code and the latest technologies, I ensure speed, scalability, and performance in every project I develop.',
        },
        {
            idx: '2',
            title: 'UI/UX Design',
            desc: 'I design user-centric interfaces that are not only visually appealing but also functional. Using Figma and Adobe tools, I craft smooth, intuitive layouts that align with the user journey and brand identity.',
        },
        {
            idx: '3',
            title: 'MERN Stack Apps',
            desc: 'From idea to deployment, I develop dynamic and data-driven web applications using MongoDB, Express, React, and Node.js. I ensure seamless frontend/backend integration with real-time features and API connections.',
        },
        {
            idx: '4',
            title: 'WordPress Solutions',
            desc: 'Whether it is a blog or business site, I develop fast and manageable CMS websites. You will get a fully editable dashboard so you can update your content anytime without touching code.'
        },
        {
            idx: '5',
            title: 'Landing Pages',
            desc: 'I design and build high-converting landing pages that guide users straight to your call-to-action. With responsive layouts, fast load speed, and compelling UI, I ensure your product or service gets the spotlight it deserves.'
        }
    ]

    return (
        <div className="flex items-center justify-center w-full mx-20 my-10">
            <div className='flex flex-col gap-4 w-1/4'>
                <h1 className='text-4xl text-[var(--primary-color)] font-normal text-left'>Solutions I <span className='text-[var(--secondary-color)] font-medium'>Provide ?</span></h1>
                <p className='text-[var(--primary-color)]/80 text-start'>Offering services in custom website development, design conversions, and performance optimization. </p>
            </div>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper w-1/2"
            >
                {services.map((service) => (
                    <SwiperSlide key={service.idx}>
                        <Card {...service} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

function Card({ idx, title, desc }) {
    
    const cardVariants = {
        offscreen: {
            y: 150,
            opacity: 1
        },
        onscreen: {
            y: 10,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
            },
        },
    }

    return (
        <motion.div 
            className="overflow-hidden relative mb-[30px]"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >

            <div className="overflow-hidden p-8 pb-0">
                <motion.div 
                    variants={cardVariants} 
                    className="h-auto w-full flex flex-col gap-4 text-white border bg-gradient-to-b from-(--secondary-color) to-(--body-color) border-orange-200 rounded-2xl py-8 px-4"
                >
                    <div className="text-5xl font-bold text-black">{idx}</div>
                    <div className="text-2xl text-white font-semibold">{title}</div>
                    <div className="text-orange-100 text-sm font-normal leading-relaxed">{desc}</div>
                </motion.div>
            </div>
        </motion.div>
    )
}
