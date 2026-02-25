"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./AboutSection.module.css";
import AboutImage from "./AboutImage";
import { MessageSquare, TrendingUp } from "lucide-react";

const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
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
        {/* Image column */}
        <div className={styles.imageSection}>
          <AboutImage />
          {/* <div className={styles.badges}>
            <span className={styles.badge}>DVBE Certified</span>
            <span className={styles.badge}>8(a) Pathway</span>
          </div> */}
        </div>

        {/* Text column */}
        <div className={styles.content}>
          <div className={styles.titleWrap}>
            <div className={styles.titleRule} />
            <h2 className={styles.title}>About 66 Training Services</h2>
          </div>

          <div className={styles.contentBlock}>
            <p>
              66 Training Services is a comprehensive higher education services
              and workforce development firm specializing in industry-aligned
              training, curriculum design, and program management for community
              colleges, state agencies, and federal partners.
            </p>
            <p>
              As a DVBE-certified company with an 8(a) program pathway, we bring
              deep expertise in public education systems together with
              real-world industry insight to help institutions launch compliant,
              scalable workforce programs.
            </p>
          </div>

          {/* Drop this in place of the single learnMore Link */}

          <div className={styles.ctaRow}>
            <div className={styles.ctaRow}>
              <Link href="/contact" className={styles.ctaPrimary}>
                <MessageSquare size={20} strokeWidth={2} />
                Talk to Us
              </Link>
              <Link href="/projects" className={styles.ctaSecondary}>
                <TrendingUp size={20} strokeWidth={2} />
                Our Impact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.sectionDivider}>
        <span className={styles.dividerDot} />
      </div> */}
    </div>
  );
};

export default AboutContent;
