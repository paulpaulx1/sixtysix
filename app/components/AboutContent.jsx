"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { MessageSquare, TrendingUp } from "lucide-react";
import styles from "./AboutSection.module.css";
import AboutImage from "./AboutImage";

const stats = [
  { value: "12", label: "Colleges Supported" },
  { value: "8", label: "Regional Initiatives" },
  { value: "DVBE", label: "Certified" },
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
        {/* ── Left column: image + stats ───────────────────────────── */}
        <div className={styles.right}>
          <div className={styles.photoWrap}>
            <AboutImage />
          </div>
        </div>

        {/* ── Right column: text + CTAs ────────────────────────────── */}
        <div className={styles.left}>
          <span className={styles.eyebrow}>Who We Are</span>

          <div className={styles.titleWrap}>
            <div className={styles.titleRule} />
            <h2 className={styles.title}>
              About 66 <span className={styles.orange}>Training</span> Services
            </h2>
          </div>

          <p className={styles.body}>
            66 Training partners with California community colleges, regional
            consortia, and government workforce leaders to implement high-impact
            training and education initiatives.
          </p>
          <p className={styles.body}>
            We provide expert program and project management, employer
            engagement leadership, and industry-aligned implementation that
            moves workforce initiatives from funded proposals to operational
            success.
          </p>

          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaPrimary}>
              <MessageSquare size={22} strokeWidth={2} />
              Talk to Us
            </Link>
            <Link href="/work" className={styles.ctaSecondary}>
              <TrendingUp size={22} strokeWidth={2} />
              Our Impact
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
