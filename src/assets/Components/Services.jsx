import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { motion } from "framer-motion";
import { Send } from 'lucide-react';


const SERVICES = [
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
];

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center w-full my-12 h-auto px-6">
      {/* Header */}
      <div className='flex flex-col items-center gap-4 mb-16 md:mb-24 text-center'>
        <h1 className='text-3xl text-[var(--primary-color)] font-normal'>
          Solutions I <span className='text-[var(--secondary-color)] font-medium'>Provide?</span>
        </h1>
        <p className='text-[var(--primary-color)]/80 font-light'>
          Offering services in custom website development, design conversions, and performance optimization.
        </p>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={20}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        coverflowEffect={{
          rotate: 50,      
          stretch: 0,       
          depth: 100,      
          modifier: 1,   
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full max-w-5xl mb-6"
      >
        {SERVICES.map((service) => (
          <SwiperSlide
            key={service.idx}
            className="flex justify-center items-center w-[330px] md:w-[350px]"
          >
            <Card {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function Card({ idx, title, desc }) {
  return (
    <motion.div
      className="w-full h-full flex flex-col gap-4 text-white border border-gray-800 rounded-2xl bg-gradient-to-bl from-(--fade-color) via-(--secondary-color)/30 to-(--body-color)
      py-8 px-6 shadow-2xl"
    >
      <span className="text-4xl md:text-5xl h-10 w-10 md:w-16 md:h-16 flex justify-center items-center rounded-full font-bold bg-(--primary-color) text-(--body-color)">{idx}</span>
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-(--subtext-color) text-sm font-light leading-relaxed">{desc}</div>
      <button className='flex justify-center items-center border border-(--fade-color) bg-(--primary-color) text-(--body-color) rounded-lg py-2 w-auto shadow-lg'>Request Service <Send className='ms-5 w-5 h-5' /></button>
    </motion.div>
  );
}
