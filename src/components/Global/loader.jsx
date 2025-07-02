import React from "react";
import { motion } from "framer-motion";
import "../../index.css";

const Loader = () => {
  return (
    <motion.section
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: 0,
        transition: { delay: 2, duration: 1 },
        transitionEnd: { display: "none" },
      }}
      className='loaderSection z-50 bg-[#c2a680]'>
      <div className='loaderContainer text-black'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5 },
            transitionEnd: { display: "none" },
          }}
          className='loaderText'>
          Selamat Datang
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8 },
            transitionEnd: { display: "none" },
          }}
          className='loaderText'>
          Welcome
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.1 },
            transitionEnd: { display: "none" },
          }}
          className='loaderText'>
          جی آیاں نوں کہنا
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4 },
            transitionEnd: { display: "none" },
          }}
          className='loaderText'>
          ДОБРО ПОЖАЛОВАТЬ
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.7 },
            transitionEnd: { display: "none" },
          }}
          className='loaderText'>
          いらっしゃいませ
        </motion.span>
      </div>
    </motion.section>
  );
};

export default Loader;
