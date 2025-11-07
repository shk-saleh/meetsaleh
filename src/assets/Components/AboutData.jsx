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
    `I'm <span class="text-[var(--subtext-color)] font-normal">Muhammad Saleh</span>, a full-stack developer and UI/UX designer with over two years of experience building web applications that balance functionality with intuitive design. My approach combines technical precision with creative problem-solving, translating complex ideas into production-ready solutions that users genuinely enjoy interacting with.`,
    
    `My journey started in <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Figma</span>, where I learned to transform concepts into user-centered interfaces before bringing them to life with <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">React</span>, <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Tailwind CSS</span>, and <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Framer Motion</span>. On the backend, I work with <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Node.js</span>, <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Express</span>, and <span class="text-[var(--subtext-color)] font-normal border border-gray-700 px-1 py-0.5 rounded-lg">MongoDB</span> to build scalable architectures that power seamless user experiences. Throughout my career with the <span class="text-[var(--subtext-color)] font-normal">MERN stack</span>, I've developed a deep appreciation for writing clean, maintainable code and creating reusable components that streamline development workflows.`,
    
    `Performance optimization drives much of my work—whether it's reducing <span class="text-[var(--subtext-color)] font-normal">API response times</span>, minimizing <span class="text-[var(--subtext-color)] font-normal">load speeds</span>, or refactoring code for better <span class="text-[var(--subtext-color)] font-normal">scalability</span>. I believe the best applications are those where the technology fades into the background, allowing users to focus entirely on their tasks. This philosophy has guided me through competitive challenges like winning the <span class="text-[var(--subtext-color)] font-normal">Web-Craft Showdown</span> at my university's Brain-Jam and completing the intensive <span class="text-[var(--subtext-color)] font-normal">Web Dev Marathon</span>, experiences that sharpened both my technical skills and my ability to deliver under pressure.`,
    
    `Beyond the code, I'm motivated by building tools that create real value—whether that's helping creators launch their platforms or developing <span class="text-[var(--subtext-color)] font-normal">SaaS products</span> that simplify everyday workflows. I'm drawn to projects where thoughtful design and solid engineering converge to make a meaningful difference in how people work and interact online.`
    ];


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
        <section className="md:max-w-6xl px-6 mx-0 md:mx-auto text-gray-200 py-12 md:py-18">
            <div className="border-b border-[var(--fade-color)]">
                <h2 className="text-3xl md:text-4xl font-medium mb-10">
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
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-1'>
                            <Frame className='w-4 h-4 text-[var(--secondary-color)]' />
                            <span class="text-[var(--white-color)] font-normal">Designing Toolkit</span>
                        </div>
                        <div className='flex flex-wrap gap-4'>   
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
                        <div className='flex flex-wrap gap-4'> 
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
                        <div className='flex flex-wrap gap-4'> 
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
                        <div className='flex flex-wrap gap-4'> 
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
            <div className='flex md:flex-row flex-col gap-10 py-10 relative'>
                <div className='md:w-1/2 w-full'>
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
                <div className='md:w-1/2 w-full'>
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