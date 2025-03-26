import React from 'react'
import { getImageUrl } from '../../utills'
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2 >Contact</h2>
            <p>Feel free to Reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email" />
                <a href="mailto:mshadhir3@gmail.com">mshadhir3@gmail.com</a>
            </li>
             <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Email" />
                <a href="https://www.linkedin.com/in/shadhir/">linkedin.com/shadhir</a>
            </li>
             <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Email" />
                <a href="https://github.com/mshadhir">github.com/mshadhir</a>
            </li>
        </ul>

    </footer>
  )
}
