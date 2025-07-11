import React, { useState } from "react";
import AboutBackground from "./AboutBackground";
import "../../index.css";
import Stack from "../Header/stack";
import { VscHome } from "react-icons/vsc";
import Dock from "../Global/BottomNavbar";
import { motion, useInView } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Ridho1 from "../../assets/images/Ridho1.jpg";
import Ridho2 from "../../assets/images/Ridho2.jpg";
import Ridho3 from "../../assets/images/Ridho3.jpg";
import Ridho4 from "../../assets/images/Ridho4.jpg";

const items = [
  {
    icon: <VscHome size={18} color='#fff' />,
    label: "Home",
    onClick: () => {
      window.top.location.href = "/";
    },
  },
];

const images = [
  { id: 1, img: Ridho1 },
  { id: 2, img: Ridho2 },
  { id: 3, img: Ridho3 },
  { id: 4, img: Ridho4 },
];

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [isDockVisible, setIsDockVisible] = useState(true); // tombol toggle

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

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 4,
      },
    },
  };

  return (
    <>
      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        ref={ref}
        id='about'
        className='relative z-4 min-h-[100dvh] bg-[#c4a580] flex items-center justify-center py-8 sm:py-12 px-4'>
        {/* Background About */}
        <div
          style={{ width: "100%" }}
          className='z-1 text-center items-center text-4xl font-extrabold py-0  px-0 justify-center absolute'>
          <AboutBackground />
        </div>

        {/* Konten utama */}
        <motion.div className='max-w-6xl w-full grid grid-cols-1  md:grid-cols-2 items-center gap-8 md:gap-0 rounded-3xl p-4 sm:p-8 md:p-16'>
          <motion.div
            variants={itemVariants}
            className='flex flex-col relative gap-6 sm:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 max-w-xl'>
            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: "Akira" }}
              className='font-akira font-extrabold text-4xl sm:text-5xl md:text-6xl text-center md:text-left'>
              About Me
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className='leading-relaxed text-sm sm:text-base text-center md:text-left'>
              "Hello, I'm Ridho Budi Muta'ali, a frontend and web developer with
              a passion for turning ideas into functional digital experiences.
              You can call me Ridho. With hands-on experience in collaborating
              with clients, I specialize in translating their vision into
              responsive websites using HTML, CSS, JavaScript, and modern
              frameworks like React. My journey includes delivering small-scale
              projects that prioritize user-centric design and seamless
              interactivity, ensuring clients achieve their goals while
              maintaining clean, maintainable code. Let's build something
              meaningful together!"
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='flex flex-col justify-center items-center lg:gap-2 gap-8 px-4 sm:px-6 md:px-8 lg:px-12'>
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className='relative stack-wrapper w-[250px] h-[250px] sm:w-[280px] sm:h-[280px] md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] rounded-3xl overflow-hidden'>
              <Stack
                randomRotation={true}
                sensitivity={180}
                sendToBackOnClick={false}
                cardDimensions={{ width: 250, height: 250 }}
                cardsData={images}
              />
            </motion.div>
          </motion.div>

          {/* Tombol Toggle Dock */}
          <motion.div
            initial={false}
            animate={{
              y: isDockVisible ? 0 : 80,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            className='justify-center flex fixed bottom-[4.5rem] left-0 w-full z-50'>
            <button
              style={{ marginLeft: "14px", marginBottom: "10px" }}
              onClick={() => setIsDockVisible((prev) => !prev)}
              className='bg-transparent text-black p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300'>
              {isDockVisible ? (
                <FaChevronDown size={20} />
              ) : (
                <FaChevronUp size={20} />
              )}
            </button>
          </motion.div>

          {/* Dock panel */}
          <motion.div
            initial={false}
            animate={{
              y: isDockVisible ? 0 : 100,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
            }}
            className='fixed bottom-0 left-0 w-full z-30'>
            <Dock
              items={items}
              panelHeight={68}
              baseItemSize={50}
              magnification={70}
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default About;
