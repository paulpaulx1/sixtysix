"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { urlFor } from "@/sanity/lib/image";

export default function ServicesPage({ data }) {
  const { hero, services, cta } = data;

  const [visibleCards, setVisibleCards] = useState(new Set());
  const [heroVisible, setHeroVisible] = useState(false);
  const [ctaVisible, setCtaVisible] = useState(false);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
      );
      observer.observe(ref);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  useEffect(() => {
    if (!ctaRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setCtaVisible(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.servicesPage}>
      <section
        className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroDescription}>{hero.description}</p>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div
              key={service._key}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`${styles.serviceCard} ${visibleCards.has(index) ? styles.serviceCardVisible : ""}`}
              id={service.id?.current}
            >
              <div className={styles.serviceImageWrapper}>
                <Image
                  src={urlFor(service.image).width(800).height(600).url()}
                  alt={service.image?.alt || service.title}
                  width={400}
                  height={300}
                  className={styles.serviceImage}
                />
                <div className={styles.serviceNumber}>0{index + 1}</div>
              </div>

              <div className={styles.serviceContent}>
                <p className={styles.serviceSubtitle}>{service.subtitle}</p>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <div className={styles.serviceFeatures}>
                  <h3>Key Capabilities</h3>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.serviceClients}>
                  <strong>Representative Projects:</strong> {service.clients}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        ref={ctaRef}
        className={`${styles.ctaSection} ${ctaVisible ? styles.ctaVisible : ""}`}
      >
        <div className={styles.ctaContent}>
          <span className={styles.ctaEyebrow}>{cta.eyebrow}</span>
          <h2>{cta.title}</h2>
          <p>{cta.description}</p>
          <Link href={cta.buttonHref} className={styles.ctaButton}>
            {cta.buttonText}
          </Link>
        </div>
      </section>
    </main>
  );
}
