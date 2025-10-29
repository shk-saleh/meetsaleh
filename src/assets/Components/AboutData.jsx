    import React from 'react'
    import { useState, useEffect } from 'react'
    import { motion } from 'framer-motion'
    import figma from '../Images/figma.png'
    import photoshop from '../Images/adobe-photoshop.png'
    import canva from '../Images/canva.png'
    import react from '../Images/react.png'
    import javascript from '../Images/javascript.png'
    import bootstrap from '../Images/bootstrap.png'
    import tailwind from '../Images/tailwind.png'
    import mongodb from '../Images/mongo-db.png'
    import nodejs from '../Images/nodejs.png'
    import sql from '../Images/sql.png'
    import firebase from '../Images/firebase.webp'
    import wordpress from '../Images/wordpress.png'
    import vercel from '../Images/vercel.png'
    import git from '../Images/git.png'
    import github from '../Images/github.png'
    import netlify from '../Images/netlify.webp'
    import { Frame, Braces, Wrench, GitBranch, GraduationCap, Building } from 'lucide-react';
    import linkedin from '../Images/linkedin.png'
    import upwork from '../Images/upwork.png'
    import software from '../Images/software.png'
    

    const lines = [
    `Hey, I’m <span class="text-[var(--subtext-color)] font-normal">Muhammad Saleh</span> — a full-stack developer and UI/UX designer who thrives where logic dances with chaos. I craft web experiences that don’t just work — they vibe.`,
    `For over two years, I’ve been bending the <span class="text-[var(--subtext-color)] font-normal">MERN stack</span> to my will, transforming caffeine and wild concepts into clean, production-ready magic. Every project I touch is a little rebellion against boring code.`,
    
    `My playground began with <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Figma</span>, sketching ideas that evolved into sleek, human-friendly interfaces — and when those come alive using <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">React</span>, <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Tailwind</span>, and <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Framer Motion</span>, it feels like alchemy caught in motion. In the backend shadows, I wield <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Node.js</span>, <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Express</span>, and <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">MongoDB</span> to build systems that silently power the front-end fireworks. I love turning raw data chaos into calm, scalable architectures.`,
    
    `I’m obsessed with performance shaving milliseconds off load times, optimizing APIs until they purr, and crafting components so reusable they practically clone themselves. Clean code is my love language.`,
    
    `I’ve tested my craft in battle winning the <span class="text-[var(--subtext-color)] font-normal">Web-Craft Showdown</span> during my university’s Brain-Jam and surviving the grueling <span class="text-[var(--subtext-color)] font-normal">Web Dev Marathon</span>. Those arenas shaped my obsession: to build things that make people pause, grin, and whisper… “whoa.”`,
    
    `But beyond the code and chaos, I crave meaning — building tools that *matter*. Whether it’s helping small creators launch their dream platforms or designing SaaS products that make someone’s life easier, I want my work to ripple outwards.`,
    
    `So if you’re into clean logic, loud aesthetics, and a developer who codes like an artist and dreams like an engineer — you’ve just met your guy. Buckle up; I don’t just build websites. I build <em>experiences.<em/>`
    ]

    const experienceData = [
    {
        icon: upwork,
        company: "LinkedIn",
        role: "MERN Stack Developer",
        period: "2024 - Present",
        description:
        "Working as a MERN stack developer on different projects, currently building a full stack AI detector using React.js and Firebase."
    },
    {
        icon: linkedin,
        company: "Upwork",
        role: "Web Developer",
        period: "2023 - Present",
        description:
        "Providing freelance web development services including WordPress, React.js, and frontend projects to global clients."
    },
    {
        icon: software,
        company: "Nuexus",
        role: "Frontend Developer (Internship)",
        period: "Sep 2024 - Dec 2024",
        description:
        "Worked on frontend development using React, Tailwind, and Bootstrap. Created responsive landing pages and functional web solutions."
    },
    {
        icon: software,
        company: "Digital Empowerment Pakistan",
        role: "Frontend Developer",
        period: "June 2024 - July 2024",
        description:
        "Contributed to web development projects focusing on responsive UI/UX, enhancing performance, and building scalable frontend components."
    }
    ];

    const educationData = [
    {
        icon: <GraduationCap className='w-11 h-11' alt="" />,
        institute: "Riphah International University",
        period: "2023 - 2027",
        degree: "BSCS",
        description: "Pursuing a degree in Computer Science with focus on software engineering, MERN stack development, and AI-related projects."
    },
    {
        icon: <GraduationCap className='w-11 h-11' alt="" />,
        institute: "IMCB F-8/4 Islamabad",
        period: "2020 - 2022",
        degree: "ICS",
        description: "Completed college with core subjects in mathematics, physics, and computer science, strengthening programming fundamentals."
    }
    ];


    const designingTools = [
        {icon: figma, name : "Figma"}, 
        {icon: photoshop, name :"Photoshop"},
        {icon: canva, name: "Canva"}
    ];

    const devTools = [
        {icon: javascript, name : "Javascript"}, 
        {icon: react, name :"React"},
        {icon: tailwind, name: "Tailwind"},
        {icon: bootstrap, name: "Boostrap"},
        {icon: nodejs, name: "NodeJs/Expres"},
        {icon: mongodb, name: "MongoDB"},
        {icon: sql, name: "MYSQL"}
    ];

    const plateforms = [
        {icon: firebase, name : "Firebase"}, 
        {icon: wordpress, name :"WordPress"}
        // {icon: wix, name: "Wix"}
    ];

    const deployment = [
        {icon: git, name : "Git"}, 
        {icon: github, name :"Github"},
        {icon: netlify, name: "Netlify"},
        {icon: vercel, name: "Vercel"},
    ];

    

    const AboutData = () => {

    return (
        <section className="max-w-6xl mx-auto text-gray-200 py-18">
            <div className="border-b border-[var(--fade-color)]">
                <h2 className="text-4xl font-medium mb-10">
                <span className="text-[var(--secondary-color)]">— </span>
                About Me
                </h2>
                <div className="space-y-8 text-md text-[var(--subtext-color)]/50 mb-6">
                {lines.map((line, index) => (
                    <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    dangerouslySetInnerHTML={{ __html: line }}
                    className='mb-3 text-justify'
                    />
                ))}
                </div>
                <button class="main-button mb-4 opacity-70">
                    <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text">Download Resume</span>
                    <span class="circle">Downlaod it!</span>
                    <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                </button>
            </div>
            <div className='flex flex-col gap-10 py-10 border-b border-[var(--fade-color)]'>
                {/* <h3 className="text-2xl text-[var(--primary-color)]">My Tools</h3> */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-1'>
                            <Frame className='w-4 h-4 text-[var(--secondary-color)]' />
                            <span class="text-[var(--white-color)] font-normal">Designing Toolkit</span>
                        </div>
                        <div className='flex flex-row gap-4'>   
                            {designingTools.map((tool) => (
                                <div className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-[var(--subtext-color)]/10 rounded-lg'>      
                                    <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                    <span class="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-1'>
                            <Braces className='w-4 h-4 text-[var(--secondary-color)]' />
                            <span class="text-[var(--white-color)] font-normal">Developement Toolkit</span>
                        </div>
                        <div className='flex flex-row gap-4'> 
                            {devTools.map((tool) => (
                                <div className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-[var(--subtext-color)]/10 rounded-lg'>      
                                    <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                    <span class="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-1'>
                            <Wrench className='w-4 h-4 text-[var(--secondary-color)]' />
                            <span class="text-[var(--white-color)] font-normal">Platform / Service</span>
                        </div>
                        <div className='flex flex-row gap-4'> 
                            {plateforms.map((tool) => (
                                <div className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-[var(--subtext-color)]/10 rounded-lg'>      
                                    <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                    <span class="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-1'>
                            <GitBranch className='w-4 h-4 text-[var(--secondary-color)]' />
                            <span class="text-[var(--white-color)] font-normal">Deployment toolkit</span>
                        </div>
                        <div className='flex flex-row gap-4'> 
                            {deployment.map((tool) => (
                                <div className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-[var(--subtext-color)]/10 rounded-lg'>      
                                    <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                    <span class="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
            </div>
            {/* Education or Experience */}
            <div className='flex flex-row gap-10 py-10 relative'>
                <div className='w-1/2'>
                    <span class="text-xl text-(--primary-color) font-normal">Experience</span>
                    {experienceData.map((exp) => (
                        <div className='flex flex-row items-start justify-start p-8 gap-6 mt-6 font-normal border border-[var(--subtext-color)]/20 bg-gradient-to-tr from-(--primary-white)/5 to-(--secondary-color)/20 rounded-lg transform-all duration-300 hover:border-(--primary-color)/50 cursor-pointer'>      
                        <img src={exp.icon} className='w-[40px]' />
                            <div>
                                <span class="text-[var(--subtext-color)]/70 text-sm font-normal">{exp.period}</span>
                                <p className='text-xl'>{exp.company} | {exp.role}</p>
                                <p className='text-md font-light mt-4 text-[var(--subtext-color)]/70'>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-1/2'>
                    <span class="text-xl text-(--primary-color) font-normal">Education</span>
                    {educationData.map((edu) => (
                        <div className='relative flex flex-row items-start justify-start group p-8 gap-6 mt-6 font-normal border border-[var(--subtext-color)]/20 bg-black transition-all duration-300 rounded-lg hover:border-(--primary-color)/50 cursor-pointer'>      
                            <span>{edu.icon}</span>
                            <div>
                                <span class="text-[var(--subtext-color)]/70 text-sm font-normal">{edu.period}</span>
                                <p className='text-xl'>{edu.institute} | {edu.degree}</p>
                                <p className='text-md font-light mt-4 text-[var(--subtext-color)]/70'>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )

}

export default AboutData;