import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailIcon from "/assets/contact/emailIcon.png";
import linkedinIcon from "/assets/contact/linkedinIcon.png";
import githubIcon from "/assets/contact/githubIcon.png";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:kgothatso.manzini@gmail.com">kgothatso.manzini@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/kgothatso-manzini-64b32b208">My Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/Kgothatso-Pixie-Dust">My GitHub</a>
        </li>
      </ul>
    </footer>
  );
};
