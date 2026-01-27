"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./WhoWeServe.module.css";

const audiences = [
  {
    iconType: "buildings",
    title: "Community Colleges",
    description:
      "seeking industry-aligned workforce and career-technical education programs",
  },
  {
    iconType: "house",
    title: "State and Federal Agencies",
    description:
      "requiring compliant, outcomes-driven workforce development solutions",
  },
  {
    iconType: "toolbox",
    title: "Industry Partners",
    description:
      "such as Tesla, PG&E, Pure Storage, and NextFlex, building reliable talent pipelines",
  },
  {
    iconType: "wrench",
    title: "Employers",
    description:
      "looking to upskill or reskill their workforce through education partnerships",
  },
];

export default function WhoWeServe() {
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

  const getIconSvg = (iconType) => {
    const icons = {
      buildings: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="2" width="6" height="20" />
          <rect x="14" y="6" width="6" height="16" />
        </svg>
      ),
      house: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      toolbox: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M16 8V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" />
          <rect x="3" y="8" width="18" height="12" rx="2" />
        </svg>
      ),
      wrench: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    };
    return icons[iconType] || icons.house;
  };

  return (
    <section ref={sectionRef} id="who-we-serve" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <h2 className={styles.title}>Who We Serve</h2>
          <p className={styles.intro}>
            We partner with organizations committed to building a skilled,
            future-ready workforce, including:
          </p>
        </div>

        <div className={styles.list}>
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`${styles.listItem} ${isVisible ? styles.visible : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.iconWrapper}>
                {getIconSvg(audience.iconType)}
              </div>
              <div className={styles.content}>
                <h3 className={styles.itemTitle}>{audience.title}</h3>
                <p className={styles.itemDescription}>{audience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
