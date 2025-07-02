import React from "react";
import About from "../components/About/InAbout";
import Project from "../components/About/Project";
import Skill from "../components/About/Skill";
import SkillMobile from "../components/About/SkillMobile";
import CoffeLoader from "../components/Global/AboutLoader";
import { motion, useInView } from "framer-motion";

function useScreenType() {
  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1024);
  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isDesktop;
}

const AboutPage = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isDesktop = useScreenType();
  return (
    <>
      <CoffeLoader />
      <div className='bg-[#c4a580] min-h-[100dvh]'>
        <motion.div
          initial={{ y: 5000 }}
          animate={{
            y: isInView ? 0 : 50,
            transition: { duration: 0.5 },
          }}
          ref={ref}>
          <About />
        </motion.div>
        {isDesktop ? <Skill /> : <SkillMobile />}
        <Project />
      </div>
    </>
  );
};

export default AboutPage;
