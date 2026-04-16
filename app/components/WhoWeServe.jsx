"use client";

import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Building2,
  Briefcase,
  Zap,
  MapPin,
  Users,
  Award,
} from "lucide-react";
import styles from "./WhoWeServe.module.css";
import Image from "next/image";

const audiences = [
  {
    icon: GraduationCap,
    title: "Community College Workforce Leaders",
    body: "We work with deans, directors, and workforce development teams to launch programs, coordinate regional initiatives, and manage Strong Workforce and CAI-funded projects.",
    image: "/images/who-we-serve/college.jpg",
  },
  {
    icon: Building2,
    title: "Government Workforce & L&D Teams",
    body: "As a DVBE-certified firm, we support state agencies and public workforce entities in advancing training initiatives aligned with regional economic priorities.",
    image: "/images/who-we-serve/government.jpg",
  },
  {
    icon: Briefcase,
    title: "Industry & Corporate Partners",
    body: "We help employers engage with colleges, align skill needs to program design, and strengthen talent pipelines within structured, college-led implementation frameworks.",
    image: "/images/who-we-serve/industry.jpg",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Implementation Expertise",
    body: "From Strong Workforce funding to apprenticeship registration — we know the California CCC system and accelerate progress while minimizing compliance risks.",
  },
  {
    icon: MapPin,
    title: "Regional Track Record",
    body: "12 California community colleges supported. 8 regional initiatives led through the Bay Area Community College Consortium. Hundreds of employers engaged statewide.",
  },
  {
    icon: Users,
    title: "Industry-Aligned Execution",
    body: "We've supported programs aligned with hiring demand from Tesla, PG&E, AWS, Google, and Applied Materials — ensuring curricula reflect real workforce needs.",
  },
];

const badges = [
  { icon: Award, label: "DVBE Certified" },
  { icon: MapPin, label: "12 Colleges Supported" },
  { icon: Users, label: "8 Regional Initiatives" },
];

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

export default function WhoWeServe() {
  const [serveRef, serveVisible] = useVisible();
  const [whyRef, whyVisible] = useVisible();

  return (
    <>
      {/* ── WHO WE SERVE ─────────────────────────────────────────────────── */}
      <section
        ref={serveRef}
        id="who-we-serve"
        className={`${styles.serveSection} ${serveVisible ? styles.visible : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Who We Serve</span>
          </div>

          <div className={styles.audienceList}>
            {audiences.map((a, i) => {
              const Icon = a.icon;
              const isEven = i % 2 === 1;
              return (
                <div
                  key={a.title}
                  className={`${styles.audienceRow} ${isEven ? styles.audienceRowReverse : ""}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.audienceImageWrap}>
                    <Image
                      src={a.image}
                      alt={a.title}
                      fill
                      className={styles.audienceImage}
                    />
                  </div>
                  <div className={styles.audienceContent}>
                    <div className={styles.cardTitleRow}>
                      <div className={styles.cardIconWrap}>
                        <Icon
                          size={20}
                          strokeWidth={1.8}
                          className={styles.cardIcon}
                        />
                      </div>
                      <h3 className={styles.cardTitle}>{a.title}</h3>
                    </div>
                    <p className={styles.cardBody}>{a.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY 66TRAINING — compressed dark strip ───────────────────────── */}
      {/* <section
        ref={whyRef}
        id="why-66training"
        className={`${styles.whySection} ${whyVisible ? styles.whyVisible : ""}`}
      >
        <div className={styles.container}>
          <div className={styles.whyHeader}>
            <span className={styles.eyebrowLight}>Why 66Training</span>
          </div>

          <div className={styles.reasonsGrid}>
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <div
                  key={r.title}
                  className={styles.reasonCard}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.reasonIconWrap}>
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <div className={styles.reasonText}>
                    <h3 className={styles.reasonTitle}>{r.title}</h3>
                    <p className={styles.reasonBody}>{r.body}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className={styles.badgeRow}>
            {badges.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.label} className={styles.awardBadge}>
                  <Icon size={13} strokeWidth={2} />
                  {b.label}
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
    </>
  );
}
