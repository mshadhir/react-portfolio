import React from "react";
import { getImageUrl } from "../../utills";
import styles from "./Hero.module.css";

export const Hero = () => {
    
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}> Hi, I am Shadhir</h1>
            <p className={styles.description}> 
                I am full-Stack devloper with experince working on ReactJS, NodeJS, ExpressJS projects. Reach out if you'd like to learn more!
            </p>
            <a href="mailto:mshadhir3@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Img of me" className={styles.heroImg}/>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>

    </section>
    );
}