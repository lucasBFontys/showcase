"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const name = "Lucas Bertani";
const about =
  `welcome to my portfolio.\ni'm lucas bertani,\na creative front-end developer\nfocused on functional, honest design\nand modern web experiences.\nexplore my work and bio to learn more.`;
const projects = Array.from({ length: 9 }).map((_, i) => ({
  number: "01",
  title: "Tittle",
  spec: "Specification · Specification",
}));

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
};

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame: number;
    let start: number | null = null;
    const duration = 1200;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const percent = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(percent);
      if (elapsed < duration) {
        frame = requestAnimationFrame(animate);
      } else {
        setProgress(100);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white" aria-busy="true" aria-label="Loading">
      <span className="sr-only">Loading…</span>
      <div className="w-80 h-16 bg-black rounded-none border-4 border-black flex items-center overflow-hidden mb-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: 'linear', duration: 0.1 }}
          className="h-full bg-white"
          style={{ borderRight: '4px solid black' }}
        />
      </div>
      <div className="text-black text-4xl font-mono tracking-widest">{progress}%</div>
    </div>
  );
};

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="home"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="relative min-h-screen bg-white text-black font-sans overflow-x-hidden"
        aria-label="Home Page"
      >
        {/* Navigation - Corners */}
        <nav className="absolute top-0 left-0 m-4 md:m-8">
          <Link
            href="/bio"
            className="text-sm font-normal lowercase font-sans tracking-wide focus:outline-none focus:ring-2 focus:ring-black"
            tabIndex={0}
            aria-label="Go to Bio page"
          >
            bio
          </Link>
        </nav>
        <div className="absolute top-0 right-0 m-4 md:m-8 text-sm font-normal lowercase font-sans tracking-wide select-none pointer-events-none">home</div>
        <nav className="absolute bottom-0 left-0 m-4 md:m-8">
          <Link
            href="/bio"
            className="text-sm font-normal lowercase font-sans tracking-wide focus:outline-none focus:ring-2 focus:ring-black"
            tabIndex={0}
            aria-label="Go to Bio page"
          >
            bio
          </Link>
        </nav>
        <div className="absolute bottom-0 right-0 m-4 md:m-8 text-sm font-normal lowercase font-sans tracking-wide select-none pointer-events-none">home</div>

        {/* Hero Section */}
        <section className="flex flex-col md:flex-row w-full max-w-7xl mx-auto pt-24 pb-8 px-4 md:px-24 gap-12 items-start md:items-center justify-between min-h-[220px] md:min-h-[320px]">
          <div className="flex flex-col gap-8 max-w-full md:max-w-lg">
            <h1 className="caps tight text-[2.5rem] sm:text-[4rem] md:text-[5rem] mb-2 accent" tabIndex={0} aria-label={`Name: ${name}`}>{name.split(" ").map((n, i) => <span key={i} className="block">{n}</span>)}</h1>
            <pre className="text-base font-normal lowercase font-sans whitespace-pre-line leading-snug tracking-normal" tabIndex={0} aria-label="About">{about}</pre>
          </div>
          <div className="flex-1 flex items-center justify-end w-full mt-4 md:mt-0">
            <span className="caps tight text-2xl sm:text-4xl md:text-5xl font-bold font-sans whitespace-nowrap accent">portfolio</span>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-24 pb-24 md:pb-32">
          <h2 className="caps tight text-2xl sm:text-3xl md:text-5xl font-bold font-sans mb-12 accent" tabIndex={0} aria-label="Projecten">projecten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-2 w-full max-w-xs mx-auto bg-gray-200 border border-gray-300 rounded-[8px] p-6 transition-transform duration-200 hover:scale-[1.03] hover:bg-accent hover:text-white"
                tabIndex={0}
                aria-label={`Project: ${project.title}`}
              >
                <div className="w-full aspect-[3/4] bg-gray-100 border border-gray-300 rounded-[4px] flex items-center justify-center mb-2">
                  <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/checkered-light-emboss.png')] bg-repeat opacity-40" />
                </div>
                <span className="text-xs font-sans lowercase">{project.number}</span>
                <span className="text-lg font-bold font-sans caps tight">{project.title}</span>
                <span className="text-xs text-gray-600 font-sans lowercase">{project.spec}</span>
              </div>
            ))}
          </div>
        </section>
        <footer className="w-full text-center py-8 text-xs font-sans lowercase text-gray-500 tracking-wide">© lucas bertani {new Date().getFullYear()}</footer>
      </motion.main>
    </AnimatePresence>
  );
};

export default HomePage;
