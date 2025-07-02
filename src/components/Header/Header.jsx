import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Dock from "../Global/BottomNavbar";
import HeaderIdentity from "./HeaderIdentity";
import { VscHome, VscAccount } from "react-icons/vsc";
import { FaPhone, FaDumbbell } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import Ridho1 from "../../assets/images/Ridho1.jpg";
import "../../index.css";

const items = [
  {
    icon: <VscHome size={18} color='#fff' />,
    label: "Home",
    onClick: () =>
      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <VscAccount size={18} color='#fff' />,
    label: "About",
    onClick: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <FaDumbbell size={18} color='#fff' />,
    label: "Motivation",
    onClick: () =>
      document
        .getElementById("motivation")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <RiCustomerService2Fill size={18} color='#fff' />,
    label: "Services",
    onClick: () =>
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <FaPhone size={18} color='#fff' />,
    label: "Contact",
    onClick: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
];

const FirstText = () => {
  const { scrollYProgress } = useScroll();
  const right = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <>
      <motion.h1
        style={{ x: right }}
        className='font-Akira lg:text-[8rem] text-[70px] font-extrabold absolute text-nowrap italic z-1'
        initial={{ x: -2000 }}
        animate={{ x: 0, transition: { duration: 1, delay: 2.5 } }}>
        FRONTEND DEVELOPER
      </motion.h1>
      <motion.h1
        style={{ x: right }}
        className='font-Akira lg:text-[8rem] text-[70px] font-extrabold absolute text-nowrap italic z-5 textOutLine'
        initial={{ x: -2000 }}
        animate={{ x: 0, transition: { duration: 1, delay: 2.5 } }}>
        FRONTEND DEVELOPER
      </motion.h1>
    </>
  );
};

const SecondText = () => {
  const { scrollYProgress } = useScroll();
  const left = useTransform(scrollYProgress, [0, 1], [0, -400]);
  return (
    <>
      <motion.h1
        style={{ x: left }}
        className='font-Akira secondText lg:text-[8rem] text-[70px] font-extrabold absolute text-nowrap italic z-1'
        initial={{ x: 2000 }}
        animate={{ x: 0, transition: { duration: 1, delay: 2.5 } }}>
        CODING WITH ME
      </motion.h1>
      <motion.h1
        style={{ x: left }}
        className='font-Akira secondText lg:text-[8rem] text-[70px] font-extrabold absolute text-nowrap italic z-5 textOutLine'
        initial={{ x: 2000 }}
        animate={{ x: 0, transition: { duration: 1, delay: 2.5 } }}>
        CODING WITH ME
      </motion.h1>
    </>
  );
};

const Header = () => {
  const [isDockVisible, setIsDockVisible] = useState(true);

  return (
    <div id='home' className='min-h-[100dvh] bg-[#c4a580] relative gap-8 mt-32'>
      {/* Header Identity */}
      <div className=' absolute'>
        <HeaderIdentity />
      </div>

      {/* Hero Section */}
      <div className='flex headerContainer flex-col justify-center h-[100dvh] items-center'>
        <div className='headerImages flex justify-center items-center'>
          <FirstText />
          <SecondText />
          <motion.img
            className='headerImage z-4 lg:w-[400px] lg:h-[430px] w-[300px] h-[250px]'
            src={Ridho1}
            alt='Ridho1'
            initial={{ scaleY: 0.1, scaleX: 1.2, opacity: 0 }}
            animate={{ scaleY: 1, scaleX: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 2.5,
            }}
          />
        </div>
      </div>

      {/* Tombol Toggle Dock (selalu terlihat) */}
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
        className=' justify-center flex  fixed bottom-[4.5rem] left-0 w-full z-5'>
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

      {/* Dock */}
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
        className=' fixed bottom-0 left-0 w-full z-30'>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </motion.div>
    </div>
  );
};

export default Header;
