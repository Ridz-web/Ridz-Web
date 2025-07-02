import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";

function App() {
  return (
    <>
      <Router basename='/Ridz-Web'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
