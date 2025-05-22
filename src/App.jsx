import React from 'react'
import Header from './Header/Header'
import Home from './Body/Home'
import About from './About/About';
import './App.css'
import Skills from './About/Skills';
import Project from './About/Project';
import Contact from './Contact/Contact';
import Footer from './About/Footer';
import Particles from "./Body/Particles"
function App() {
  return (
    <>
    <Particles />
    <main style={{ zIndex: 1, position: "relative", color: "#fff" }}>
      <Header/>
      <Home/>
    <About/>
    <Skills></Skills>
    <Project />
    <Contact />
    <Footer />
    </main>
    </>
  )
}

export default App