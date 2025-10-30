import { useRef, useEffect } from "react";
import React , {useState} from "react";
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
      <div className={`min-h-[100vh] h-auto w-full bg-[var(--body-color)] relative overflow-hidden ${!loadingDone ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fun" element={<Game />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
      {!loadingDone && <Loading onFinish={() => setLoadingDone(true)} />}
    </>
  );
}

export default App;
