import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Logo from "../../../public/Logo.jpg";
import "../../index.css";

// Daftar icon dan link yang tersedia
const items = [
  { icon: <FaGithub />, url: "https://github.com/Ridz-web" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/ridhz_kun" },
  { icon: <FaTiktok />, url: "https://www.tiktok.com/@ridzzkun" },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/ridho-budi-2b95b2332",
  },
  { icon: <FaXTwitter />, url: "https://x.com/@ridz_ecto" },
];

// Variants untuk animasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const lineVariants = {
  hidden: { width: 0 },
  visible: {
    width: "4rem",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 12,
    },
  },
};

// Kontak
const Contact = () => {
  const Navigate = useNavigate();
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { amount: 0.5, once: true });

  const [zoomedIndexes, setZoomedIndexes] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleMouseEnter = (index) => {
    const newZoomed = [...zoomedIndexes];
    newZoomed[index] = true;
    setZoomedIndexes(newZoomed);
  };

  const handleMouseLeave = (index) => {
    const newZoomed = [...zoomedIndexes];
    newZoomed[index] = false;
    setZoomedIndexes(newZoomed);
  };

  return (
    <>
      <div id='contact' className='relative' ref={contactRef}>
        <div className='flex contactContainer flex-col max-w-2xl m-auto p-6 justify-center lg:text-left text-center text-black h-[100dvh]'>
          {/* Title Section */}
          <motion.div
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}>
            <motion.div
              style={{ fontFamily: "Akira" }}
              className='font-bold text-4xl text-black mb-4'
              variants={childVariants}>
              Stay In Touch
            </motion.div>

            <motion.div
              style={{ marginTop: "15px" }}
              className='h-2 w-16 bg-black mb-2'
              variants={lineVariants}></motion.div>

            <motion.div
              style={{ marginTop: "10px", marginLeft: "30px" }}
              className='h-2 w-16 bg-black mb-2'
              variants={lineVariants}></motion.div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            style={{ marginTop: "20px" }}
            className='flex flex-col text-[#5B4634] mb-6 text-lg font-serif'>
            <motion.p variants={childVariants}>
              Address: JL.Jangli Gabeng, Semarang. Indonesia
            </motion.p>
            <motion.a
              className='flex items-center gap-2'
              target='_blank'
              rel='noopener noreferrer'
              href='https://wa.me/6285770715562'
              variants={childVariants}>
              Whatsapp : +6285770715562 <FaArrowRight />
            </motion.a>
            <motion.p variants={childVariants}>
              Email : mutaalibudi@gmail.com
            </motion.p>
            <motion.p variants={childVariants}>
              © Copyright {new Date().getFullYear()} Ridho. All rights reserved.
            </motion.p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
            style={{ marginTop: "20px", display: "flex", gap: "10px" }}
            className='flex space-x-6'>
            {items.map((item, index) => (
              <motion.a
                key={index}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
                variants={iconVariants}>
                <div
                  style={{
                    transform: zoomedIndexes[index] ? "scale(1.3)" : "scale(1)",
                  }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className='transition transform duration-300 text-black text-3xl hover:text-black'>
                  {item.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            className='absolute lg:block hidden bottom-[13rem] left-[56rem]'
            initial='hidden'
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}>
            <motion.div variants={childVariants}>
              <img
                width='220px'
                height='200px'
                className='rounded-md grayscale hover:grayscale-0 transition-all duration-500 lg:-mt-8 mt-28 shadow-xl'
                src={Logo}
                alt=''
                style={{
                  transition: "transform 0.3s",
                }}
              />
            </motion.div>

            <motion.div variants={lineVariants}></motion.div>

            <motion.div variants={lineVariants}></motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
