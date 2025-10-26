import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import heroImage from "/assets/hero/Kgothatso_Manzini_edit.jpg";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kgothatso</h1>
        <p className={styles.description}>         
              I am a final-year Software Engineering student at WeThinkCode passionate about 
              science and technology, and how they are reshaping our world. 
        </p>
        <a href="kgothatso.manzini@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};