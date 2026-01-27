"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";
import AboutImage from "./AboutImage";

const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={sectionRef}
        id="about"
        className={`${styles.aboutContent} ${isVisible ? styles.visible : ""}`}
      >
        {/* Image */}
        <div className={styles.imageSection}>
          <AboutImage />
        </div>

        {/* Text */}
        <div className={styles.content}>
          <h2 className={styles.title}>About 66 Professional Services</h2>

          <div className={styles.contentBlock}>
            <p>
              66 Professional Services is a comprehensive higher education
              services and workforce development firm specializing in
              industry-aligned training, curriculum design, and program
              management for community colleges, state agencies, and federal
              partners.
            </p>

            <p>
              As a DVBE-certified company with an 8(a) program pathway, we bring
              deep expertise in public education systems together with
              real-world industry insight to help institutions launch compliant,
              scalable workforce programs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
