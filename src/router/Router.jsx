import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/home/Home';
import About from '../../pages/about/About';
import Projects from '../../pages/projects/Projects';
import Contact from '../../pages/contact/Contact';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default Router;
