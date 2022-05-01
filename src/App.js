import React from "react";
import Navbar from "./Navbar";
import Myjourney from "./Myjourney";
import About from "./About";
import Education from "./Education";
import Skill from "./Skill";
import CP from "./CP";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  offset:150,
  duration:1000,
  once:true,
});

const App = () => {
  return (
    <>
      <Navbar />
      <About /> 
      <Education/> 
      <Skill/>
      <CP/>
      <Project/>
      <Myjourney/>
      <Contact/>
      <Footer/> 
      
    </>
  );
}

export default App;