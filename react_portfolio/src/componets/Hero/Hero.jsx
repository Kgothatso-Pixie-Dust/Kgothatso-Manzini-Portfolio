import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Welcome to Kgothatso Manzini Portfolio</h1>
            <p className={styles.description}>This is the hero section of my portfolio website.</p>
            <a href="kgothatso.manzini@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src="./assets/hero-image.png" alt="Hero Image" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottonBlur}></div>

    </section>
  );
};