import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar"
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/service";
import Projects from "./components/projects"
import Contact from "./components/contact";
import Footer from "./components/footer"

export default function Home() {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
    
  );
}
