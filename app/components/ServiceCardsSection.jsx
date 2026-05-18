"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./ServiceCardsSection.module.css";
import ServiceCard from "./ServiceCard";

const ServiceCardsSection = ({ services }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) setHasAnimated(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const activeServices = services.filter((s) => s.active);

  return (
    <section
      ref={sectionRef}
      className={styles.servicesSection}
      data-element="services"
    >
      <div className={styles.container}>
        <div
          className={`${styles.servicesHeader} ${hasAnimated ? styles.headerVisible : styles.headerHidden}`}
        >
          <p className={styles.servicesEyebrow}>What We Do</p>
          <h2 className={styles.servicesTitle}>Our Services</h2>
        </div>

        <div className={styles.servicesGrid}>
          {activeServices.map((service, index) => (
            <div
              key={service._key}
              className={`${styles.cardWrapper} ${hasAnimated ? styles.cardVisible : styles.cardHidden}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard
                iconType={service.iconType}
                blueprint={service.blueprint}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                linkUrl={service.linkUrl}
                linkText={service.linkText}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSection;
