import { useState } from 'react'

import styles from './App.module.css';
import { Hero } from './componets/Navbar/Hero/Hero.jsx';
import { Navbar } from './componets/Navbar/Navbar.jsx';

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>      
    </div>
  );}

export default App
