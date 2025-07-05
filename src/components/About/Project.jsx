// File: Project.jsx
import React, { useRef } from "react";
import "./project.css";
import Kampung from "../../assets/ProjectImages/e-kampung.png";
import blog from "../../assets/ProjectImages/holidayFamily1.jpg";
import Placeholder from "../../assets/ProjectImages/placeholder.png";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "E-Kampung Website",
    description:
      "Sistem informasi desa berbasis web menggunakan Google Apps Script dan TailwindCSS.",
    image: Kampung,
    size: "landscape-wide",
    link: "https://script.google.com/macros/s/AKfycbxT9SpND17Kwym9Ju9unX2exh0QvDAf_Nof05bmdtPbuSVJQU1qlAWNENELadoGFpyT/exec",
  },
  {
    title: "Portfolio Website",
    description:
      "Website portofolio pribadi dibangun dengan ReactJS, TailwindCSS, dan Framer Motion.",
    image: Placeholder,
    size: "landscape",
    link: "#",
  },
  {
    type: "icon",
    icon: <FaReact className='spin hidden md:block opacity-20' size={98} />,
    size: "small",
  },
  {
    title: "Complaint Management App",
    description:
      "Aplikasi pengaduan warga menggunakan Google Apps Script dan Spreadsheet.",
    image: Placeholder,
    size: "portrait",
    link: "#",
  },
  {
    type: "icon",
    icon: <SiTailwindcss className='hidden md:block opacity-20' size={98} />,
    size: "small",
  },
  {
    title: "Frontend Library Showcase",
    description: "Halaman showcase stack teknologi frontend yang digunakan.",
    image: Placeholder,
    size: "landscape",
    link: "#",
  },
  {
    title: "Service Section Design",
    description:
      "Bagian services dengan animasi interaktif dan styling elegan.",
    image: Placeholder,
    size: "portrait",
    link: "#",
  },
  {
    title: "Blog Family Holiday design",
    description:
      "Eksperimen layout untuk halaman blog menggunakan grid modern.",
    image: blog,
    size: "portrait",
    link: "https://ridz-web.github.io/FamilyBlog/",
  },
  {
    title: "Login Page UI",
    description:
      "Tampilan login simple dan aman menggunakan React dan TailwindCSS.",
    image: Placeholder,
    size: "landscape-wide",
    link: "#",
  },
];

function Project() {
  return (
    <section className='bento-wrapper'>
      <h1 className='bento-title'>Latest Projects</h1>
      <div className='bento-grid'>
        {projects.map((proj, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });

          const motionProps = {
            ref,
            initial: { opacity: 0, scale: 0.8, y: 40 },
            animate: isInView ? { opacity: 1, scale: 1, y: 0 } : {},
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.05, // bubble-style stagger
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
                className={`icon-card ${proj.size}`}>
                {proj.icon}
              </motion.div>
            );
          }

          return (
            <motion.a
              {...motionProps}
              key={index}
              href={proj.link}
              target='_blank'
              rel='noopener noreferrer'
              className={`bento-card ${proj.size}`}>
              <img src={proj.image} alt={proj.title} className='bento-image' />
              <div className='bento-overlay'>
                <h2 className='bento-heading'>{proj.title}</h2>
                <p className='bento-desc'>{proj.description}</p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
