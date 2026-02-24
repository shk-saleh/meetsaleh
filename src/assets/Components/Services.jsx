import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { motion } from "framer-motion";
import { ArrowBigLeftDash, ArrowBigRightDash, Redo, Send, Undo } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SpotlightCard from '../Components/ReactBits/SpotlightCard';

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
    <motion.div
      className="relative z-50 flex flex-col items-center justify-center w-full py-12 h-auto px-6 md:mt-0 -mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Header */}
      <motion.div
        className='flex flex-col items-center gap-4 mb-16 md:mb-24 text-center'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className='text-3xl md:text-6xl text-[var(--primary-color)] font-normal md:mb-1'>
          Solutions I <span className='text-grad-orange' style={{ fontFamily: "Playfair Display", fontStyle: "italic", fontWeight: "500" }}>Provide!</span>
        </h1>
        <p className='text-xs md:text-md text-(--subtext-color) font-light'>
          Offering services in custom website development, design conversions, and performance optimization.
        </p>
      </motion.div>

      <button className="swiper-button-prev-custom absolute md:left-[46%] left-[36%] bottom-0 z-50 w-12 h-12 rounded-full bg-(--primary-color)/70 hover:bg-(--primary-color) text-(--body-color) flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer">
        <ArrowBigLeftDash className="w-6 h-6" />
      </button>
      <button className="swiper-button-next-custom absolute md:right-[46%] right-[36%] bottom-0 z-50 w-12 h-12 rounded-full bg-(--primary-color)/70 hover:bg-(--primary-color) text-(--body-color) flex items-center justify-center shadow-lg hover:scale-105 transition cursor-pointer">
        <ArrowBigRightDash className="w-6 h-6" />
      </button>

      {/* Swiper*/}
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
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
        navigation={{
          prevEl: '.swiper-button-prev-custom',
          nextEl: '.swiper-button-next-custom',
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="md:max-w-6xl max-w-xs mb-12 relative md:!right-10 right-4"
      >

        {SERVICES.map((service, index) => (
          <SwiperSlide
            key={`${service.idx}-${index}`}
            className="flex justify-center w-auto h-auto md:!w-[380px] md:!h-[400px]"
          >
            <Card {...service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

function Card({ idx, title, desc }) {
  return (
    <SpotlightCard className="w-full h-full flex flex-col justify-between gap-4 text-white border border-zinc-800 rounded-2xl bg-gradient-to-bl from-(--body-color) to-(--secondary-color)/20 py-8 px-6 shadow-2xl" spotlightColor="rgba(255, 136, 0, 0.3)">
      <div>
        <span className="text-4xl h-10 w-10 md:w-14 md:h-14 flex justify-center items-center rounded-full font-bold bg-(--primary-color) text-(--body-color) mb-4">
          {idx}
        </span>
        <div className="text-2xl font-semibold mb-2">{title}</div>
        <div className="text-(--subtext-color) text-sm font-normal leading-relaxed">{desc}</div>
      </div>
      <button className='flex justify-center items-center border border-(--fade-color) bg-(--primary-color) text-(--body-color) rounded-lg py-2 w-auto shadow-lg cursor-pointer'>
        Request Service
        <Send className='ms-5 w-5 h-5' />
      </button>
    </SpotlightCard>
  );
}