import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utills";

export const About = () => {

    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop"  className={styles.aboutImage}/>
                <div > 
                    <ul className={styles.aboutItems}>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon"/>
                            <div className={styles.aboutItemText}>
                                <h3>Frontend Developer</h3>
                                <p>I’m a front-end developer in building responsive and optimized sites</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>I have experience developing fast and optimised back-end systems and APIs</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/uiIcon.png")} alt="Server Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Frontend Developer</h3>
                                <p>I’m a front-end developer in building responsive and optimized sites</p>
                            </div> 
                        </li>
                    </ul>
                    
                </div>
            </div>

        </section>
    );

} 