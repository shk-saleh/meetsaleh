import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Parallax = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const [index, setIndex] = useState(0);
  
  
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

  useEffect(() => {

    const handleScroll = () => {

        const scrollPosition = window.scrollY
        const windowHeight = window.innerHeight
        
        // Calculate progress through the entire scrollable area
        const totalScrollHeight = windowHeight * services.length
        const scrollProgress = scrollPosition / totalScrollHeight
        
        const sectionIndex = Math.floor(scrollProgress * services.length)
        
        // Clamp the index to valid range
        const clampedIndex = Math.max(0, Math.min(sectionIndex, services.length - 1))
        
        if (clampedIndex !== activeIndex) {
          setActiveIndex(clampedIndex)
        }

    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  }, [activeIndex, services.length])

  
  return (
      <div style={{ height: `${services.length * 80}vh` }}>
        <h1 className='text-4xl text-[var(--primary-color)]  text-center pt-15'>Solutions I <span className='text-[var(--secondary-color)] font-medium'>Provide ?</span></h1>
        <div className="sticky top-30 left-0 w-full h-[40vh] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              className="flex flex-row text-left items-top max-w-3xl mx-auto py-5 gap-6  border border-t-gray-500 border-b-gray-500 border-r-0 border-l-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
                <span className='text-8xl text-[var(--primary-color)]'>{services[activeIndex].idx}</span>
                <div>
                    <motion.h2 
                    className="text-[var(--primary-color)] text-3xl font-normal mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    >
                    {services[activeIndex].title}
                    </motion.h2>
                
                    <motion.p
                    className="text-[var(--subtext-color)] text-md font-light"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    >
                    {services[activeIndex].desc}
                    </motion.p>
                </div>
              
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
  )
}

export default Parallax