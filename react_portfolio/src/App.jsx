import { useState } from 'react'

import styles from './App.module.css';
import { Navbar } from './componets/Navbar/Navbar.jsx';
import { Hero } from './componets/Hero/Hero.jsx';
import { About } from './componets/About/About.jsx';
import { Experience } from './componets/Experience/Experience.jsx';
import { Projects } from './componets/Projects/Projects.jsx';
import { Contact } from './componets/Contact/Contact.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />  
      <Hero />
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>              
    </div>
  );}

export default App
