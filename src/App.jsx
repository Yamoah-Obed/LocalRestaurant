import React from "react";
import Navbar from "./Component/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
import Menu from "./Pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
