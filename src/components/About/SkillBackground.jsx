import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPython } from "react-icons/si";
import "./Skill.css";

const SkillBackground = () => {
  return (
    <>
      <div className='SkillBackroundContainer'>
        <div className='html'>
          <FaHtml5 color='black' size={70} />
        </div>
        <div className='css'>
          <FaCss3Alt color='black' size={58} />
        </div>
        <div className='bootstrap'>
          <FaBootstrap color='black' size={88} />
        </div>
        <div className='tailwindcss'>
          <SiTailwindcss color='black' size={88} />
        </div>
        <div className='react'>
          <FaReact color='black' size={90} />
        </div>
        <div className='javascript'>
          <FaJs color='black' size={38} />
        </div>
        <div className='express'>
          <SiExpress color='black' size={38} />
        </div>
        <div className='python'>
          <SiPython color='black' size={48} />
        </div>
      </div>
    </>
  );
};

export default SkillBackground;
