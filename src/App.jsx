import { useRef, useEffect } from 'react'
import React from 'react'
import './App.css'
import InteractiveBackground from './assets/Components/InteractiveBackground'
import { Game } from './assets/Components/Game'
import Navbar from './assets/Components/Navbar'
import Loading from './assets/Components/Loading'
import {createBrowserRouter, RouterProvider} from "react-router";
import Home from './assets/Pages/Home'
import Lenis from '@studio-freight/lenis'
import CustomCursor from './assets/Components/CustomCursor';


function App() {

  const cursor1 = useRef(null);
  const cursor2 = useRef(null);
  
  useEffect(() => {

    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleMouseMove = (e) => {
      if (cursor1.current && cursor2.current) {
        cursor1.current.style.left = `${e.clientX}px`;
        cursor1.current.style.top = `${e.clientY}px`;
        cursor2.current.style.left = `${e.clientX}px`;
        cursor2.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);


  return (
    <>
      <CustomCursor />
      <div className="min-h-[100vh] h-auto w-full bg-[var(--body-color)] relative overflow-hidden" >
        {/* Grid Pattern Background */}
        <div className="absolute bottom-0 left-0 right-0 top-0 h-[700px] bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]">
        </div>
        
        {/* Interactive Background */}
        <InteractiveBackground />
        
        {/* Main Content */}
        {/* <Game/> */}
        {/* <Loading/> */}
        {/* <Navbar/> */}
        <Home/>
        
        {/* Cursor */}
        {/* <span className='outer_cursor' ref={cursor1}></span>
        <span className='inner_cursor' ref={cursor2}></span> */}
      </div>
    </>
  )
}

export default App
