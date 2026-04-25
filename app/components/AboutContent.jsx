"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare, TrendingUp } from "lucide-react";
import styles from "./AboutSection.module.css";
import AboutImage from "./AboutImage";

const stats = [
  // { value: "12", label: "Colleges Supported" },
  // { value: "8", label: "Regional Initiatives" },
  // { value: "DVBE", label: "Certified" },
];

export default function AboutContent() {
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
        {/* Left column: image + stats */}
        <div className={styles.right}>
          <div className={styles.photoWrap}>
            <AboutImage />
          </div>

          <div className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: text + CTAs */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>Who We Are</span>

          <div className={styles.titleWrap}>
            <div className={styles.titleLine} />
            <h2 className={styles.title}>
              About 66 <span className={styles.orange}>Professional</span>{" "}
              Services
            </h2>
          </div>

          <p className={styles.body}>
            66 Professional Services partners with postsecondary institutions,
            workforce development organizations, corporate training departments,
            and government agencies to implement high-impact learning and
            development initiatives.
          </p>

          <p className={styles.body}>
            We provide expert program management, multi-stakeholder
            collaboration, and industry-aligned implementation that moves
            cross-sector initiatives from funded mandates or strategic goals to
            operational success.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaPrimary}>
              <span className={styles.ctaIconWrap}>
                <MessageSquare size={18} strokeWidth={2} />
              </span>
              <span className={styles.ctaText}>Talk to Us</span>
              <ArrowRight
                size={16}
                strokeWidth={2.2}
                className={styles.ctaArrow}
              />
            </Link>

            <Link href="/work" className={styles.ctaSecondary}>
              <span className={styles.ctaIconWrap}>
                <TrendingUp size={18} strokeWidth={2} />
              </span>
              <span className={styles.ctaText}>Our Impact</span>
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
