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
import { Frame, Braces, Wrench, GitBranch, GraduationCap } from 'lucide-react';
import linkedin from '../Images/linkedin.png'
import upwork from '../Images/upwork.png'
import software from '../Images/software.png'
import resume from '../doc/Muhammad_Saleh_Resume.pdf'
import SpotlightCard from '../Components/ReactBits/SpotlightCard';


const lines = [
    `I'm <span class="text-(--primary-color) font-normal">Muhammad Saleh</span>, a full-stack developer and UI/UX designer with over two years of experience building web applications that balance functionality with intuitive design. My approach combines technical precision with creative problem-solving, translating complex ideas into production-ready solutions that users genuinely enjoy interacting with.`,

    `My journey started in <span class="text-(--primary-color) font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Figma</span>, where I learned to transform concepts into user-centered interfaces before bringing them to life with <span class="text-(--primary-color) font-normal border border-gray-700 px-1 py-0.5 rounded-lg">React</span>, <span class="text-(--primary-color) font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Tailwind CSS</span>, and <span class="text-(--primary-color) font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Framer Motion</span>. On the backend, I work with <span class="text-(--primary-color) font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Node.js</span>, <span class="text-(--primary-color) font-normal border border-gray-700 px-1 py-0.5 rounded-lg">Express</span>, and <span class="text-(--primary-color) font-normal border border-gray-700 px-1 py-0.5 rounded-lg">MongoDB</span> to build scalable architectures that power seamless user experiences. Throughout my career with the <span class="text-(--primary-color) font-normal">MERN stack</span>, I've developed a deep appreciation for writing clean, maintainable code and creating reusable components that streamline development workflows.`,

    `Beyond the code, I'm motivated by building tools that create real value—whether that's helping creators launch their platforms or developing <span class="text-(--primary-color) font-normal">SaaS products</span> that simplify everyday workflows. I'm drawn to projects where thoughtful design and solid engineering converge to make a meaningful difference in how people work and interact online.`
];

const experienceData = [
    {
        icon: linkedin,
        company: "LinkedIn",
        role: "MERN Stack Developer",
        period: "2024 - Present",
        description:
            "Working as a MERN stack developer on different projects, currently collaborating on Full Stack AI detector project with tech stack of React.js + Zustand + FastAPI ."
    },
    {
        icon: upwork,
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
    { icon: figma, name: "Figma" },
    { icon: photoshop, name: "Photoshop" },
    { icon: canva, name: "Canva" }
];

const devTools = [
    { icon: javascript, name: "Javascript" },
    { icon: react, name: "React" },
    { icon: tailwind, name: "Tailwind" },
    { icon: bootstrap, name: "Boostrap" },
    { icon: nodejs, name: "NodeJs/Expres" },
    { icon: mongodb, name: "MongoDB" },
    { icon: sql, name: "MYSQL" }
];

const plateforms = [
    { icon: firebase, name: "Firebase" },
    { icon: wordpress, name: "WordPress" }
];

const deployment = [
    { icon: git, name: "Git" },
    { icon: github, name: "Github" },
    { icon: netlify, name: "Netlify" },
    { icon: vercel, name: "Vercel" },
];

const AboutData = () => {
    return (
        <section className="md:max-w-6xl px-6 mx-0 md:mx-auto text-gray-200 py-12 md:pt-18">
            {/* About Section */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-12">
                <filter id="noise">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" fill="#ffffff" filter="url(#noise)" />
            </svg>
            <div className="border-b border-[var(--fade-color)]">
                <motion.h2
                    className="text-3xl md:text-5xl font-medium mb-10"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}

                >
                    My
                    <span
                        className='text-grad-orange'
                        whileHover={{ scale: 1.1, display: "inline-block" }}
                        style={{ fontFamily: "Playfair Display", fontStyle: "italic", fontWeight: "500" }}
                    >
                        &nbsp;Story!
                    </span>
                </motion.h2>

                <div className="space-y-8 text-md text-(--subtext-color) mb-6">
                    {lines.map((line, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            dangerouslySetInnerHTML={{ __html: line }}
                            className='mb-3 text-justify leading-6 md:leading-7'
                        />
                    ))}
                </div>
                <a href={resume} download="Muhammad_Saleh_Resume.pdf">
                    <motion.button
                        className="main-button mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileHover={{ opacity: 1, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}

                    >
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                        <span className="text">Download Resume</span>
                        <span className="circle">Download it!</span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                        </svg>
                    </motion.button>
                </a>
            </div>

            {/* Tools Section */}
            <motion.div
                className='flex flex-col gap-10 py-10 border-b border-[var(--fade-color)]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                {/* Designing Tools */}
                <motion.div
                    className='flex flex-col gap-4'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className='flex items-center gap-1'>
                        <Frame className='w-4 h-4 text-[var(--secondary-color)]' />
                        <span className="text-[var(--white-color)] font-normal">Designing Toolkit</span>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        {designingTools.map((tool, index) => (
                            <motion.div
                                key={index}
                                className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-(--primary-color)/10 rounded-lg'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                <span className="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Development Tools */}
                <motion.div
                    className='flex flex-col gap-4'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <div className='flex items-center gap-1'>
                        <Braces className='w-4 h-4 text-[var(--secondary-color)]' />
                        <span className="text-[var(--white-color)] font-normal">Development Toolkit</span>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        {devTools.map((tool, index) => (
                            <motion.div
                                key={index}
                                className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-[var(--subtext-color)]/10 rounded-lg'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                <span className="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Platforms */}
                <motion.div
                    className='flex flex-col gap-4'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className='flex items-center gap-1'>
                        <Wrench className='w-4 h-4 text-[var(--secondary-color)]' />
                        <span className="text-[var(--white-color)] font-normal">Platform / Service</span>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        {plateforms.map((tool, index) => (
                            <motion.div
                                key={index}
                                className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-[var(--subtext-color)]/10 rounded-lg'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                <span className="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Deployment */}
                <motion.div
                    className='flex flex-col gap-4'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className='flex items-center gap-1'>
                        <GitBranch className='w-4 h-4 text-[var(--secondary-color)]' />
                        <span className="text-[var(--white-color)] font-normal">Deployment toolkit</span>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        {deployment.map((tool, index) => (
                            <motion.div
                                key={index}
                                className='flex flex-col gap-2 items-center font-normal px-4 py-2 border border-[var(--subtext-color)]/10 rounded-lg'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <img src={tool.icon} className='w-12 h-12 hover:scale-105 transition duration-300 cursor-pointer opacity-70 hover:opacity-100' alt="" />
                                <span className="text-[var(--subtext-color)]/70 text-xs font-normal">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>

            {/* Experience & Education */}
            <div className='flex md:flex-row flex-col gap-10 py-10 relative'>
                {/* Experience */}
                <div className='md:w-1/2 w-full'>
                    <motion.span
                        className="text-xl text-(--primary-color) font-normal"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Experience
                    </motion.span>
                    {experienceData.map((exp, index) => (
                        <SpotlightCard className="flex md:flex-row flex-col items-start justify-start p-8 gap-6 mt-6 font-normal text-white border border-zinc-800 rounded-xl bg-(--body-color) py-8 px-6 shadow-2xl cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.1)"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            key={index}
                        >
                            <img src={exp.icon} className='w-[40px]' alt="" />
                            <div>
                                <span className="text-[var(--subtext-color)]/70 text-sm font-normal">{exp.period}</span>
                                <p className='text-xl'>{exp.company} | {exp.role}</p>
                                <p className='text-md font-light mt-4 text-[var(--subtext-color)]/70'>{exp.description}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>

                {/* Education */}
                <div className='md:w-1/2 w-full'>
                    <motion.span
                        className="text-xl text-(--primary-color) font-normal"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Education
                    </motion.span>
                    {educationData.map((edu, index) => (
                        <SpotlightCard className="flex md:flex-row flex-col items-start justify-start p-8 gap-6 mt-6 font-normal text-white border border-zinc-800 rounded-xl bg-(--body-color) py-8 px-6 shadow-xl cursor-pointer" spotlightColor="rgba(255, 255, 255, 0.1)"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            key={index}
                        >
                            <span>{edu.icon}</span>
                            <div>
                                <span className="text-[var(--subtext-color)]/70 text-sm font-normal">{edu.period}</span>
                                <p className='text-xl'>{edu.institute} | {edu.degree}</p>
                                <p className='text-md font-light mt-4 text-[var(--subtext-color)]/70'>{edu.description}</p>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AboutData;
