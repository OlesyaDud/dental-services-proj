import React from "react";

import { useState } from "react";
import "./index.css";

import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection ";
import ServicesSection from "./components/ServiceSection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
