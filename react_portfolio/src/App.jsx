import { useState } from 'react'

import styles from './App.module.css';
import { Navbar } from './componets/Navbar/Navbar.jsx';
import { Hero } from './componets/Hero/Hero.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />  
      <Hero />
     
              
    </div>
  );}

export default App
