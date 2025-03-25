import React from 'react';
import styles from "./Education.module.css";
import education from "../../data/education.json";
import certifications from "../../data/certifications.json";
import { getImageUrl } from '../../utills';

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education & Certifications</h2>
      <div className={styles.wrapper}>

        {/* Education Section */}
        <div className={styles.educationSection}>
          <h3 className={styles.subTitle}>Education</h3>
          <div className={styles.eduGrid}>
            {education.map((edu, index) => (
              <div key={index} className={styles.eduItem}>
                <img src={getImageUrl(edu.imageSrc)} alt={`${edu.institution} Logo`} />
                <div className={styles.details}>
                  <h4>{edu.degree}</h4>
                  <p>{edu.institution}</p>
                  <p>{edu.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className={styles.certificationWrapper}>
          <h3 className={styles.subTitle}>Certifications</h3>
          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <div key={index} className={styles.certItem}>
                <img src={getImageUrl(cert.imageSrc)} alt={`${cert.issuer} Logo`} />
                <div className={styles.details}>
                  <h4>{cert.title}</h4>
                  <p>{cert.issuer} - {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
