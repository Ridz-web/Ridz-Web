import React from "react";
import Header from "../components/Header/Header";
import Loader from "../components/Global/loader";
import About from "../components/Header/About";
import Motivation from "../components/Header/Motivation";
import Contact from "../components/Footer/Contact";
import Service from "../components/Footer/Service";
import "../index.css";

const Home = () => {
  return (
    <>
      <Loader />
      <Header />
      <About />
      <Motivation />
      <Service />
      <Contact />
    </>
  );
};

export default Home;
