"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import styles from "./page.module.css";

function useVisible(threshold = 0.12) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function TeamPage({ data }) {
  const { hero, intro, spotlight, team } = data;

  const [heroVisible, setHeroVisible] = useState(false);
  const [introRef, introVisible] = useVisible(0.1);
  const [spotlightRef, spotlightVisible] = useVisible(0.1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.teamPage}>
      <section
        className={`${styles.hero} ${heroVisible ? styles.heroVisible : ""}`}
      >
        <div className={styles.heroContent}>
          <span className={styles.heroEyebrow}>{hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroDescription}>{hero.description}</p>
        </div>
      </section>

      <section
        ref={introRef}
        className={`${styles.introSection} ${introVisible ? styles.introVisible : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.eyebrow}>{intro.eyebrow}</span>
              <h2 className={styles.introTitle}>{intro.title}</h2>
              <p className={styles.introBody}>{intro.bodyOne}</p>
              <p className={styles.introBody}>{intro.bodyTwo}</p>
            </div>
            <div className={styles.introRight}>
              <span className={styles.eyebrow}>Areas of Expertise</span>
              <ul className={styles.expertiseList}>
                {intro.expertise.map((item) => (
                  <li key={item}>
                    <CheckCircle2
                      size={14}
                      strokeWidth={2.2}
                      className={styles.checkIcon}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={spotlightRef}
        className={`${styles.spotlightSection} ${spotlightVisible ? styles.spotlightVisible : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>{spotlight.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{spotlight.sectionTitle}</h2>
          </div>
          <div className={styles.spotlightCard}>
            <div className={styles.spotlightImage}>
              <img
                src={urlFor(spotlight.image).width(800).url()}
                alt={spotlight.image?.alt || spotlight.name}
                className={styles.spotlightPhoto}
              />
            </div>
            <div className={styles.spotlightContent}>
              <h3 className={styles.spotlightName}>{spotlight.name}</h3>
              <p className={styles.spotlightRole}>{spotlight.role}</p>
              <div className={styles.spotlightDivider} />
              <p className={styles.spotlightBio}>{spotlight.bioOne}</p>
              <p className={styles.spotlightBio}>{spotlight.bioTwo}</p>
              <p className={styles.spotlightBio}>{spotlight.bioThree}</p>
              <div className={styles.dvbeBadge}>
                <span>{spotlight.badgeText}</span>
                <span className={styles.badgeDot}>·</span>
                <span>{spotlight.badgeSubtext}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>The Full Team</span>
            <h2 className={styles.sectionTitle}>10+ Specialists</h2>
          </div>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div
                key={member._key}
                className={`${styles.teamCard} ${isVisible ? styles.visible : ""}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={urlFor(member.image).width(600).height(600).url()}
                    alt={member.image?.alt || member.name}
                    width={300}
                    height={300}
                    className={styles.memberImage}
                  />
                </div>
                <div className={styles.memberContent}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
