import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiPython } from "react-icons/si";
import "./Skill.css";
import SkillBackground from "./SkillBackground";

const skills = [
  {
    name: "HTML",
    icon: <FaHtml5 color='black' size={38} />,
    side: "left",
    y: 120,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt color='black' size={38} />,
    side: "left",
    y: 220,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap color='black' size={38} />,
    side: "left",
    y: 320,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss color='black' size={38} />,
    side: "left",
    y: 420,
  },
  // Kanan atas, kanan tengah, kanan bawah
  {
    name: "ReactJS",
    icon: <FaReact className='react-spin' color='black' size={38} />,
    side: "right",
    y: 120,
  },
  {
    name: "JavaScript",
    icon: <FaJs color='black' size={38} />,
    side: "right",
    y: 220,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress color='black' size={38} />,
    side: "right",
    y: 320,
  },
  {
    name: "Python",
    icon: <SiPython color='black' size={38} />,
    side: "right",
    y: 420,
  },
];

const SVG_WIDTH = 900;
const SVG_HEIGHT = 540;
const CENTER_X = SVG_WIDTH / 2;
const CENTER_Y = SVG_HEIGHT / 2;
const CARD_W = 64;
const CARD_H = 64;
const CENTER_SIZE = 110;
const X_OFFSET = 270;

const getPos = (side, y) => {
  return {
    x: side === "left" ? CENTER_X - X_OFFSET : CENTER_X + X_OFFSET,
    y,
  };
};

const getCurve = (from, to) => {
  // Make the curve a bit more dramatic for longer lines
  const cx = (from.x + to.x) / 2 + (to.x > from.x ? 80 : -80);
  const cy = (from.y + to.y) / 2;
  return `M ${from.x} ${from.y} Q ${cx} ${cy} ${to.x} ${to.y}`;
};

function useWindowSize() {
  const [size, setSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  React.useEffect(() => {
    const handleResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

const Skill = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [typed, setTyped] = React.useState("");
  const fullText = "Skills";
  const { width } = useWindowSize();

  // Responsive values
  let SVG_WIDTH = 900,
    SVG_HEIGHT = 540,
    CENTER_SIZE = 110,
    CARD_W = 64,
    CARD_H = 64,
    X_OFFSET = 270,
    fontSize = "4rem";
  if (width < 600) {
    SVG_WIDTH = 340;
    SVG_HEIGHT = 420;
    CENTER_SIZE = 60;
    CARD_W = 44;
    CARD_H = 44;
    X_OFFSET = 110;
    fontSize = "2rem";
  } else if (width < 900) {
    SVG_WIDTH = 600;
    SVG_HEIGHT = 480;
    CENTER_SIZE = 80;
    CARD_W = 54;
    CARD_H = 54;
    X_OFFSET = 170;
    fontSize = "2.7rem";
  }
  const CENTER_X = SVG_WIDTH / 2;
  const CENTER_Y = SVG_HEIGHT / 2;

  // Typing effect for h1
  React.useEffect(() => {
    if (isInView && typed.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTyped(fullText.slice(0, typed.length + 1));
      }, 90);
      return () => clearTimeout(timeout);
    }
  }, [isInView, typed, fullText]);

  // h1 animation
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        duration: 0.7,
      },
    },
  };

  // Skill card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9, rotate: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 0.9,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        delay: 0.3 + i * 0.13,
      },
    }),
  };

  // Shine effect for h1
  const shineVariants = {
    initial: { x: "-100%" },
    animate: {
      x: ["-100%", "120%"],
      transition: {
        duration: 1.2,
        ease: "easeInOut",
        repeat: 1,
        delay: 0.5,
      },
    },
  };

  React.useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <div
      style={{ background: "#c4a580", minHeight: "100dvh" }}
      className='h-[100dvh] z-3'
      ref={ref}>
      <div
        style={{ width: "100%" }}
        className='z-1 text-center items-center text-4xl font-extrabold py-0  px-0 justify-center absolute'>
        <SkillBackground />
      </div>
      <motion.h1
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants}
        style={{
          fontFamily: "Akira",
          fontSize,
          position: "relative",
          overflow: "hidden",
          display: "block",
          width: "100%",
        }}
        className='text-center py-8'>
        <span>{typed}</span>
        {/* Shine effect overlay */}
        {typed.length === fullText.length && (
          <motion.span
            variants={shineVariants}
            initial='initial'
            animate='animate'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              mixBlendMode: "overlay",
              pointerEvents: "none",
            }}
          />
        )}
      </motion.h1>
      <div className='skill-graph-container'>
        <svg
          width='100%'
          height='100%'
          viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
          className='skill-graph-svg'
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: SVG_WIDTH,
            maxHeight: SVG_HEIGHT,
          }}>
          <defs>
            {skills.map((skill, i) => {
              // Unique animated beam gradient for each line
              const gradId = `beam-gradient-${i}`;
              return (
                <linearGradient id={gradId} key={gradId}>
                  <stop offset='0%' stopColor='#fff' stopOpacity='0.0' />
                  <stop offset='40%' stopColor='#fff' stopOpacity='0.7'>
                    <animate
                      attributeName='offset'
                      values='0.2;0.7;0.2'
                      dur='2.2s'
                      repeatCount='indefinite'
                    />
                  </stop>
                  <stop offset='60%' stopColor='#fff' stopOpacity='0.7'>
                    <animate
                      attributeName='offset'
                      values='0.4;0.9;0.4'
                      dur='2.2s'
                      repeatCount='indefinite'
                    />
                  </stop>
                  <stop offset='100%' stopColor='#fff' stopOpacity='0.0' />
                </linearGradient>
              );
            })}
          </defs>
          {/* Garis ke setiap logo dengan animasi beam */}
          {skills.map((skill, i) => {
            const to = getPos(skill.side, skill.y + CARD_H / 2);
            const gradId = `beam-gradient-${i}`;
            return (
              <path
                key={skill.name}
                d={getCurve({ x: CENTER_X, y: CENTER_Y }, to)}
                stroke={`url(#${gradId})`}
                strokeWidth='5'
                fill='none'
                style={{ filter: "drop-shadow(0 0 8px #fff8)" }}
              />
            );
          })}
          {/* Logo tengah */}
          <g>
            <circle
              cx={CENTER_X}
              cy={CENTER_Y}
              r={CENTER_SIZE / 2}
              fill='#fff'
              stroke='#e5e7eb'
              strokeWidth='4'
              filter='drop-shadow(0 0 16px rgba(0,0,0,0.08))'
            />
            <text
              x={CENTER_X}
              y={CENTER_Y + 16}
              textAnchor='middle'
              fontSize='48'
              fontWeight='bold'
              fill='#222'
              fontFamily='monospace'>
              {"</>"}
            </text>
          </g>
          {/* Card + Ikon skill di samping */}
          {skills.map((skill, i) => {
            const { x, y } = getPos(skill.side, skill.y);
            return (
              <foreignObject
                key={skill.name + "-icon"}
                x={x - CARD_W / 2}
                y={y}
                width={CARD_W}
                height={CARD_H}
                style={{ overflow: "visible" }}>
                <motion.div
                  className='skill-icon-card'
                  custom={i}
                  initial='hidden'
                  animate={controls}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.13,
                    boxShadow: "0 0 16px #fff, 0 0 32px #e0c",
                    filter: "brightness(1.2)",
                    transition: { type: "spring", stiffness: 200, damping: 10 },
                  }}>
                  <div className='skill-icon'>{skill.icon}</div>
                  <div className='skill-hover'>{skill.name}</div>
                </motion.div>
              </foreignObject>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Skill;
