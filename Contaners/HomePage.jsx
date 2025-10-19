"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Footer from "../Components/HomePageComponent/Footer";
import Hero from "../Components/HomePageComponent/hero";
import Skills from "../Components/HomePageComponent/skills";
import About from "../Components/HomePageComponent/About";
import Contact from "../Components/HomePageComponent/Contact";
import Projects from "../Components/HomePageComponent/Project";
import TechStack from "../Components/HomePageComponent/tecnecalSkills";
import ExperienceSection from "../Components/HomePageComponent/Education";
import Nave from "./Nave";
import "../src/app/globals.css";
import AOS from "aos";
import Certificates from "../Components/Certificates";
gsap.registerPlugin(ScrollToPlugin);

export default function HomePage() {
  const bgRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });

    const handleMouseMove = (e) => {
      const rect = bgRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      gsap.to(bgRef.current, {
        backgroundImage: `radial-gradient(circle at ${x}% ${y}%, rgba(200,200,200,0.05), rgba(248,249,252,0))`,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setShowScrollBtn(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power3.out" });
  };

  return (
    <>
      <Nave />
      <div ref={bgRef} className="fixed inset-0 -z-10"></div>

      <div className="container mx-auto px-4 py-8 mt-25 relative">
        <Hero />
      </div>
      <About />
      <div className="container mx-auto px-4 py-8 relative">
        <Skills />
      </div>

      <Projects />
      <TechStack />
      <ExperienceSection />
      <Certificates />
      <Contact />
      <Footer />

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
          showScrollBtn ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{
          backgroundColor: "white",
          backgroundImage: `conic-gradient(#3b82f6 ${scrollProgress}%, #d1d5db ${scrollProgress}%)`,
          border: "4px solid #3b82f6",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}
