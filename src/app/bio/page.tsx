"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const name = "Lucas Bertani";
const about =
  `i am a passionate front-end developer\nspecializing in reactjs, nextjs, typescript,\nand modern ui/ux frameworks.\ni love building beautiful, accessible,\nand performant web applications\nwith a focus on clean code and great user experience.`;
const skills: string[] = [
  "ReactJS",
  "NextJS",
  "TypeScript",
  "JavaScript",
  "TailwindCSS",
  "HTML",
  "CSS",
  "UI/UX",
];

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
};

const BioPage = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key="bio"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="relative min-h-screen bg-white text-black font-sans overflow-x-hidden"
        aria-label="Bio Page"
      >
        {/* Navigation - Corners */}
        <div className="absolute top-0 left-0 m-4 md:m-8 text-sm md:text-xl font-normal font-sans lowercase select-none pointer-events-none">bio</div>
        <nav className="absolute top-0 right-0 m-4 md:m-8">
          <Link
            href="/"
            className="text-sm md:text-xl font-normal font-sans lowercase focus:outline-none focus:ring-2 focus:ring-black"
            tabIndex={0}
            aria-label="Go to Home page"
          >
            home
          </Link>
        </nav>

        {/* Main Layout */}
        <section className="flex flex-col md:flex-row items-center justify-center w-full min-h-[60vh] pt-24 md:pt-32 px-4 md:px-24 gap-12 md:gap-24">
          {/* Left column: Social/Design boxes */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-6 items-center justify-center h-full mb-4 md:mb-0">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 sm:w-16 sm:h-16 bg-gray-200 rounded-[8px]"
                aria-hidden="true"
              />
            ))}
          </div>

          {/* Avatar + Name/Skills */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-24 w-full max-w-5xl">
            {/* Avatar Placeholder */}
            <div className="flex-shrink-0 mb-4 md:mb-0">
              <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-[340px] md:h-[340px] bg-gray-200 rounded-[16px] md:rounded-[32px]" aria-label="Avatar placeholder" />
            </div>
            {/* Name, About, Skills */}
            <div className="flex flex-col items-start justify-center w-full max-w-xl gap-6 md:gap-8">
              <h1 className="caps tight text-[2.5rem] sm:text-[4rem] md:text-[5rem] mb-2 accent" tabIndex={0} aria-label={`Name: ${name}`}>{name.split(" ").map((n, i) => <span key={i} className="block">{n}</span>)}</h1>
              <pre className="text-base sm:text-lg font-sans lowercase whitespace-pre-line leading-snug tracking-normal mb-2" tabIndex={0} aria-label="About">{about}</pre>
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-2">
                {skills.map((skill, i) => (
                  <div
                    key={skill}
                    className={`w-10 h-10 sm:w-16 sm:h-16 bg-gray-200 rounded-[8px] flex items-center justify-center text-xs sm:text-lg font-mono text-gray-500 ${i === 0 ? 'bg-accent text-white font-bold' : ''}`}
                    tabIndex={0}
                    aria-label={skill}
                  >
                    {i === 0 ? skill : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <footer className="w-full text-center py-8 text-xs font-sans lowercase text-gray-500 tracking-wide">© lucas bertani {new Date().getFullYear()}</footer>
      </motion.main>
    </AnimatePresence>
  );
};

export default BioPage; 