"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutSection.module.css";
import AboutImage from "./AboutImage";

const AboutContent = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const cx = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <div className={styles.container}>
      <div ref={sectionRef} className={styles.aboutContent}>
        {/* Image */}
        <div
          className={cx(
            styles.imageSection,
            hasAnimated ? styles.aboutVisible : styles.aboutHiddenLeft
          )}
        >
          <AboutImage />
        </div>

        {/* Text */}
        <div
          className={cx(
            styles.content,
            hasAnimated ? styles.aboutVisibleDelayed : styles.aboutHiddenRight
          )}
        >
          <h2 className={styles.title}>About 66 Professional Services</h2>

          <div className={styles.contentBlock}>
            <p>
              66 Professional Services is a comprehensive higher education
              services organization delivering workforce development, curriculum
              design, and project management solutions for community colleges,
              state agencies, and federal clients nationwide.
            </p>

            <p>
              With a team of 10+ specialists and 8+ years of proven experience,
              we've partnered with industry leaders including Tesla, PG&E,
              PureStorage, and NextFlex to create innovative training programs
              that bridge education and industry. Our DVBE certification and 8A
              program pathway position us as a trusted partner for government
              contracts and enterprise workforce initiatives.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectionDivider}></div>
    </div>
  );
};

export default AboutContent;
