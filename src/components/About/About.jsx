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
                                <p>Experienced in building responsive, user-friendly interfaces with React and Vue.js.</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>Backend Developer</h3>
                                <p>Skilled in creating fast, secure APIs and backend systems using Node.js and MongoDB.</p>
                            </div>
                        </li>
                        <li className={styles.aboutItem}>
                            <img src={getImageUrl("about/uiIcon.png")} alt="Server Icon" />
                            <div className={styles.aboutItemText}>
                                <h3>UI Designer</h3>
                                <p>Designed landing pages and UI systems using Figma and modern CSS tools.</p>
                            </div> 
                        </li>
                    </ul>
                    
                </div>
            </div>

        </section>
    );

} 