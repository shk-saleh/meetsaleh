import { useRef, useEffect } from "react";
import React, { useState } from "react";
import "./App.css";
import { Game } from "./assets/Components/Game";
import Navbar from "./assets/Components/Navbar";
import Loading from "./assets/Components/Loading";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Project from "./assets/Pages/Project";
import Lenis from "@studio-freight/lenis";
import ProjectDetail from "./assets/Components/ProjectDetail";
import Contact from "./assets/Pages/Contact";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const [loadingDone, setLoadingDone] = useState(false);
  const cursor1 = useRef(null);
  const cursor2 = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
      <AnimatePresence mode="wait">
        {!loadingDone && (
          <Loading 
            key="loading" 
            onFinish={() => setLoadingDone(true)} 
          />
        )}
      </AnimatePresence>

      {loadingDone && (
        <div className="p-3 h-full w-full bg-(--body-color) relative overflow-y-auto scrollbar-hide">
          <div className="relative overflow-hidden bg-black flex flex-col justify-start w-[100%] min-h-[98vh] h-auto md:rounded-4xl rounded-xl">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Project />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Game />} />
            </Routes>
          </div>
        </div>
       )}
    </>
  );
};

export default App;
