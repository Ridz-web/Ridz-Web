import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { IoCodeSlashSharp } from "react-icons/io5";
import "./AboutLoader.css";

const techIcons = [
  { id: 1, icon: <FaPython />, x: "-40vw", y: "-35vh" },
  { id: 2, icon: <SiTailwindcss />, x: "-30vw", y: "-10vh" },
  { id: 3, icon: <FaBootstrap />, x: "30vw", y: "-25vh" },
  { id: 4, icon: <SiExpress />, x: "35vw", y: "10vh" },
  { id: 5, icon: <FaJs />, x: "-20vw", y: "30vh" },
  { id: 6, icon: <FaReact />, x: "20vw", y: "35vh" },
  { id: 7, icon: <FaHtml5 />, x: "-35vw", y: "15vh" },
  { id: 8, icon: <FaCss3Alt />, x: "25vw", y: "-5vh" },
];

const AboutLoader = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [hideCodeTag, setHideCodeTag] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => setStartAnimation(true), 500);
    const shrinkTag = setTimeout(() => setHideCodeTag(true), 3500);
    const end = setTimeout(() => setShowLoader(false), 4500);
    return () => {
      clearTimeout(start);
      clearTimeout(shrinkTag);
      clearTimeout(end);
    };
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className='absorb-loader-container'
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}>
          {/* Tag </> di tengah */}
          <motion.div
            className='code-tag'
            initial={{ scale: 1, opacity: 1 }}
            animate={
              hideCodeTag
                ? {
                    scale: 0,
                    opacity: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  }
                : {}
            }>
            <IoCodeSlashSharp className='code-icon' />
          </motion.div>

          {/* Animasi icon teknlogi */}
          {techIcons.map(({ id, icon, x, y }, i) => (
            <motion.div
              key={id}
              className='tech-icon'
              initial={{ x, y, opacity: 0, scale: 1 }}
              animate={
                startAnimation
                  ? {
                      x: 0,
                      y: 0,
                      scale: 0.1,
                      opacity: 1,
                      transition: {
                        opacity: { duration: 0.2, delay: i * 0.25 },
                        x: { duration: 1, delay: i * 0.25 },
                        y: { duration: 1, delay: i * 0.25 },
                        scale: { duration: 1, delay: i * 0.25 },
                      },
                      transitionEnd: { display: "none" },
                    }
                  : {}
              }>
              {icon}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutLoader;
