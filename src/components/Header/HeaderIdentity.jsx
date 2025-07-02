import React from "react";
import "../../index.css";
import { motion } from "framer-motion";

const HeaderIdentity = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2, ease: "easeOut", type: "spring" }}
        className='z-[51]'>
        <div className='containerNavIdentity'>
          <div className='NavName'>
            <span>Hi, My Name Is</span>
            <span>Ridho Budi Muta`ali</span>
          </div>
          <div className='IdentityRight items-right text-right'>
            <span>Web Frontend Developer</span>
            <span>Based in Indonesia</span>
          </div>
          <div className='IdentityBottom'>
            <span>Let's Coding Together</span>
            <span>And Build Something Great Together</span>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default HeaderIdentity;
