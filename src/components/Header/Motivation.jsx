import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../../index.css";

const Motivation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true, threshold: 0.1 });

  // Animasi untuk huruf-huruf dalam judul
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    }),
  };

  // Animasi untuk garis pembatas
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1,
        ease: [0.19, 1, 0.22, 1],
      },
    },
  };

  // Animasi untuk teks kutipan
  const quoteVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // Animasi untuk kata-kata dalam kutipan
  const wordVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Pisahkan teks menjadi kata-kata untuk animasi
  const quoteText =
    "The greatest risk is not taking any risk… in a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.";
  const words = quoteText.split(" ");
  const author = "- Mark Zuckerberg";

  return (
    <div
      ref={ref}
      id='motivation'
      className='relative flex flex-col justify-center items-center min-h-[100dvh] bg-[#c4a580] overflow-hidden'>
      {/* Background decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.8 }
        }
        transition={{ duration: 1.5, ease: "easeOut" }}
        className='absolute inset-0 flex justify-center items-center'>
        <div className='text-[200px] sm:text-[300px] font-bold opacity-70 text-center'>
          CODE
        </div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            scale: 0,
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  scale: 1,
                  opacity: 0.3,
                }
              : {}
          }
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.1)",
            zIndex: 0,
          }}
        />
      ))}

      <div className='relative z-10 w-full max-w-4xl px-4 py-12 flex flex-col items-center'>
        {/* Judul dengan animasi per huruf */}
        <motion.h1
          style={{ fontFamily: "Akira" }}
          className='text-4xl md:text-5xl font-bold mb-12 text-center'>
          {"Motivation".split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={titleVariants}
              initial='hidden'
              animate={isInView ? "visible" : "hidden"}
              className='inline-block'>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Garis pembatas atas */}
        <motion.div
          style={{ marginTop: "20px", marginBottom: "40px" }}
          variants={lineVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          className='h-0.5 w-full max-w-md bg-black mb-10 origin-left'
        />

        {/* Kutipan dengan animasi per kata */}
        <motion.div
          variants={quoteVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          className=' text-center px-4 max-w-3xl leading-relaxed'>
          <span className=' leading-none mr-1'>"</span>
          {words.map((word, i) => (
            <motion.span
              style={{ marginRight: "4px" }}
              key={i}
              variants={wordVariants}
              className='inline-block mr-2'>
              {word}
            </motion.span>
          ))}
          <span className='leading-none ml-1'>"</span>

          {/* Penulis */}
          <motion.div
            variants={wordVariants}
            className='mt-6 font-bold text-lg'>
            {author}
          </motion.div>
        </motion.div>

        {/* Garis pembatas bawah */}
        <motion.div
          style={{ marginTop: "20px", marginBottom: "10px" }}
          variants={lineVariants}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          className='h-0.5 w-full max-w-md bg-black mt-10 origin-right'
        />

        {/* Animated decorative element */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={
            isInView
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className='mt-16 w-12 h-12 border-4 border-black rounded-full flex items-center justify-center'>
          <motion.div
            animate={isInView ? { rotate: 360 } : {}}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className='w-8 h-8 border-2 border-dashed border-black rounded-full'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Motivation;
