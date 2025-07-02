// File: ServiceSection.jsx
import React, { useRef } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaWhatsapp } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiExpress } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import "../../index.css";

const services = [
  {
    title: "Frontend Developer",
    description:
      "I specialize in building modern, fast, and responsive UIs using ReactJS, TailwindCSS, and CSS. Leveraging tools like Vite and other modern packages to optimize performance and development speed.",
    tech: [<FaReact />, <SiTailwindcss />, <FaCss3Alt />, <SiVite />],
    link: "https://wa.me/6285770715562",
  },
  {
    title: "Web Developer",
    description:
      "I create full-stack web applications using HTML, CSS, TailwindCSS for frontend, and Express.js for backend functionality, ensuring robustness and scalability.",
    tech: [<FaHtml5 />, <FaCss3Alt />, <SiTailwindcss />, <SiExpress />],
    link: "https://wa.me/6285770715562",
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.9, rotate: -3 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 14,
      duration: 0.6,
    },
  },
};

const ServiceCard = ({ service, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUpVariant}
      initial='hidden'
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className='service-card'>
      <div>
        <h2>{service.title}</h2>
        <p>{service.description}</p>
        <div className='tech-icons'>
          {service.tech.map((icon, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 300 }}>
              {icon}
            </motion.span>
          ))}
        </div>
        <div className='other'>+ Other Packages</div>
      </div>
      <a
        href={service.link}
        target='_blank'
        rel='noopener noreferrer'
        className='whatsapp-btn'>
        <FaWhatsapp className='wa-icon' /> Contact Me
      </a>
    </motion.div>
  );
};

const ServiceSection = () => {
  return (
    <section className='service-section' id='services'>
      <h1 className='service-title'>My Services</h1>
      <div className='service-container'>
        {services.map((service, idx) => (
          <ServiceCard key={idx} service={service} delay={0.2 * idx} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
