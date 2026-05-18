"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, TrendingUp } from "lucide-react";
import styles from "./AboutSection.module.css";
import AboutImage from "./AboutImage";

export default function AboutContent({ about }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div
        ref={sectionRef}
        id="about"
        className={`${styles.grid} ${isVisible ? styles.visible : ""}`}
      >
        <div className={styles.right}>
          <div className={styles.photoWrap}>
            <AboutImage />
          </div>
        </div>

        <div className={styles.left}>
          <span className={styles.eyebrow}>{about.eyebrow}</span>

          <div className={styles.titleWrap}>
            <div className={styles.titleLine} />
            <h2 className={styles.title}>{about.title}</h2>
          </div>

          <p className={styles.body}>{about.bodyOne}</p>
          <p className={styles.body}>{about.bodyTwo}</p>

          <div className={styles.ctaRow}>
            <Link href={about.primaryCtaHref} className={styles.ctaPrimary}>
              <span className={styles.ctaIconWrap}>
                <MessageSquare size={18} strokeWidth={2} />
              </span>
              <span className={styles.ctaText}>{about.primaryCtaText}</span>
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className={styles.ctaArrow}
              />
            </Link>

            <Link href={about.secondaryCtaHref} className={styles.ctaSecondary}>
              <span className={styles.ctaIconWrap}>
                <TrendingUp size={18} strokeWidth={2} />
              </span>
              <span className={styles.ctaText}>{about.secondaryCtaText}</span>
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className={styles.ctaArrow}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.divider}>
        <span className={styles.dividerDot} />
      </div>
    </div>
  );
}
