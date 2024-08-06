import "./App.css"
import gsap from 'gsap'
import Overlay from './components/Overlay';
import IntroTextAnimation from './components/IntroTextAnimation';
import MainTitle from './components/MainTitle';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import MadeBy from './components/MadeBy';
import Experience from "./components/Experience"
import { useLayoutEffect, useRef } from 'react';

function App() {

  const comp = useRef(null)  
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()

      t1.from(".first", {
        yPercent: "200",
        duration: 0.9, 
        delay: 0.3
      }).from(".second", {
        yPercent: "200",
        duration: 0.9, 
        delay: 0.3
      }).from(".third", {
        yPercent: "200",
        duration: 0.9, 
        delay: 0.3
      }).to([".first", ".second", ".third"], {
        opacity: 0,
        duration: 1.0, 
        delay: 1.4
      }).to(".bar", 1.0, {
        height: 0,
        stagger: {
          amount: 0.5
        }, 
        ease: "power4.inOut"
      }).from(".h1", 1.0, {
        y: "100vh", 
        stagger: {
          amount: 0.5
        }, 
        ease: "power4.inOut", 
      }).to([".aboutMe", ".experience", ".projects", ".skills", ".madeBy"], 1.0,{
        opacity: 1
      }).to(".navBar", 1.0, {
        yPercent: 100
      }).to([".overlay",".intro-text"], {
        display: "None"
      }).to(".container", {
        height: "100%",
      })
    }, comp)
    return () => ctx.revert()
  }, [])
  
  return (
    <div className="App" ref={comp}>

      <Overlay/>
      <IntroTextAnimation/>
      <Navbar/>

      <div className="container">
        <MainTitle/>
        <AboutMe/>
        <Experience/>
        <Projects/>
        <Skills/>
        <MadeBy/>
      </div>

    </div>
  );
}

export default App;