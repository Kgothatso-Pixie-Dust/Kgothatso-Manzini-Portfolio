import { useState } from 'react'

import styles from './App.module.css';
import { Hero } from './componets/Hero/Hero.jsx';
import { Navbar } from './componets/Navbar/Navbar.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/> 
      <About/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>     
    </div>
  );}

export default App
