import React, { Suspense, lazy } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FloatingElements from './components/FloatingElements';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Accomplishments = lazy(() => import('./components/Accomplishments'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {

  return (
    <div className="App">
      <div className="global-background">
        <div className="grid-pattern"></div>
      </div>
      <FloatingElements />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Accomplishments />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
