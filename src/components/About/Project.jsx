// File: Project.jsx
import React, { useRef } from "react";
import "./project.css";
import portofolio from "../../assets/ProjectImages/portofolio.png";
import Kampung from "../../assets/ProjectImages/e-kampung.png";
import Placeholder from "../../assets/ProjectImages/placeholder.png";
import school from "../../assets/ProjectImages/schoolweb.jpeg";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "E-Kampung Website",
    description:
      "A village information system built with Google Apps Script and TailwindCSS.",
    image: Kampung,
    size: "landscape-wide",
    link: "https://script.google.com/macros/s/AKfycbxT9SpND17Kwym9Ju9unX2exh0QvDAf_Nof05bmdtPbuSVJQU1qlAWNENELadoGFpyT/exec",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with ReactJS, TailwindCSS, and Framer Motion.",
    image: portofolio,
    size: "landscape-wide",
    link: "#",
  },
  {
    title: "School Website",
    description:
      "A school website for SMKN 9 Semarang, developed with ReactJS, TailwindCSS, and Framer Motion.",
    image: school,
    size: "landscape-wide",
    link: "#",
  },
  {
    title: "Frontend Library Showcase",
    description:
      "A showcase page highlighting the frontend technologies used in development.",
    image: Placeholder,
    size: "landscape-wide",
    link: "#",
  },
  {
    title: "Login Page UI",
    description:
      "A clean and secure login interface built with React and TailwindCSS.",
    image: Placeholder,
    size: "landscape-wide",
    link: "#",
  },
];

function Project() {
  return (
    <section className="bento-wrapper">
      <h1 className="bento-title">Latest Projects</h1>
      <div className="bento-grid">
        {projects.map((proj, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          const motionProps = {
            ref,
            initial: { opacity: 0, scale: 0.9, y: 40 },
            animate: isInView ? { opacity: 1, scale: 1, y: 0 } : {},
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.05,
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
          };

          if (proj.type === "icon") {
            return (
              <motion.div
                {...motionProps}
                key={index}
                className={`bento-card ${proj.size} border-2 border-black flex items-center justify-center`}
              >
                {proj.icon}
              </motion.div>
            );
          }

          return (
            <motion.a
              {...motionProps}
              key={index}
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`bento-card ${proj.size} border-2 border-black`}
            >
              <img src={proj.image} alt={proj.title} className="bento-image" />
              <div className="bento-overlay">
                <h2 className="bento-heading">{proj.title}</h2>
                <p className="bento-desc">{proj.description}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
