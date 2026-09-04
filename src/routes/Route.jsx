import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Contact from "../pages/Contact.jsx";
import About from "../pages/About.jsx";
import Cources from "../pages/Cources.jsx";
import Instructors from "../pages/Instructors.jsx";

export default function Rte() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cources" element={<Cources />} />
        <Route path="/instraction" element={<Instructors />} />
      </Routes>
    </>
  );
}
