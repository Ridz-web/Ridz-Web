import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPython } from "react-icons/si";
import { motion } from "framer-motion";
import "./SkillMobile.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 color='black' size={32} /> },
  { name: "CSS", icon: <FaCss3Alt color='black' size={32} /> },
  { name: "Bootstrap", icon: <FaBootstrap color='black' size={32} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color='black' size={32} /> },
  {
    name: "ReactJS",
    icon: <FaReact className='react-spin' color='black' size={32} />,
  },
  { name: "JavaScript", icon: <FaJs color='black' size={32} /> },
  { name: "ExpressJS", icon: <SiExpress color='black' size={32} /> },
  { name: "Python", icon: <SiPython color='black' size={32} /> },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const SkillMobile = () => {
  return (
    <div className='skill-mobile-container'>
      <h2 className='skill-mobile-title'>My Skills</h2>
      <motion.div
        className='skill-mobile-grid'
        variants={containerVariants}
        initial='hidden'
        animate='visible'>
        {skills.map((skill) => (
          <motion.div
            className='skill-mobile-item'
            key={skill.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 4px 16px rgba(30,30,30,0.25), 0 0 8px #333",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}>
            <div className='skill-mobile-icon'>{skill.icon}</div>
            <div className='skill-mobile-name'>{skill.name}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SkillMobile;
