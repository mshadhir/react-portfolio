import React from "react";
import { getImageUrl } from "../../utills";
import styles from "./Hero.module.css";

export const Hero = () => {

    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I’m Shadhir 👋</h1>
            <h3 className={styles.subtitle}>Junior Software Developer | MERN Stack | Python | Cloud Technologies  </h3>
            <p className={styles.description}> 
                I’m passionate about building full-stack web applications and cloud-based solutions. Let’s create something impactful together!
            </p>
            <a href="mailto:mshadhir3@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
       <img src={getImageUrl("hero/heroImage.png")} alt="Hero Img of me" className={styles.heroImg} />
        
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
    );
}